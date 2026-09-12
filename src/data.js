// Loads works from /assets at the repo root, organized one folder per item.
// Each folder contains an `abstract.json` plus any local files (PDFs, images)
// that the JSON references by filename.

const workAbstracts = import.meta.glob('../assets/works/*/abstract.json', {
  eager: true,
  import: 'default',
});

const workAssets = import.meta.glob('../assets/works/*/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

const folderId = (path) => {
  const parts = path.split('/');
  return parts[parts.length - 2];
};

const isExternal = (url) => /^(https?:|mailto:)/.test(url);

const assetMap = {
  works: workAssets,
};

const resolveLinks = (collectionDir, id, links = {}) => {
  const out = {};
  for (const [key, value] of Object.entries(links)) {
    if (!value) continue;
    if (isExternal(value)) {
      out[key] = value;
      continue;
    }
    // Cross-collection reference, e.g. "works/002_cognitivesecurity/paper.pdf"
    const cross = value.match(/^([a-z]+)\/([^/]+)\/(.+)$/);
    if (cross) {
      const [, otherDir, otherId, otherFile] = cross;
      const otherAssets = assetMap[otherDir] || {};
      const crossPath = `../assets/${otherDir}/${otherId}/${otherFile}`;
      if (otherAssets[crossPath]) {
        out[key] = otherAssets[crossPath];
        continue;
      }
    }
    const assets = assetMap[collectionDir] || {};
    const assetPath = `../assets/${collectionDir}/${id}/${value}`;
    out[key] = assets[assetPath] || value;
  }
  return out;
};

const resolveAsset = (collectionDir, id, value) => {
  if (!value || isExternal(value)) return value;
  const assets = assetMap[collectionDir] || {};
  const assetPath = `../assets/${collectionDir}/${id}/${value}`;
  return assets[assetPath] || value;
};

const buildItems = (abstracts, collectionDir) =>
  Object.entries(abstracts)
    .map(([path, data]) => {
      const id = folderId(path);
      return {
        id,
        ...data,
        image: resolveAsset(collectionDir, id, data.image),
        images: Array.isArray(data.images)
          ? data.images.map((v) => resolveAsset(collectionDir, id, v))
          : undefined,
        links: resolveLinks(collectionDir, id, data.links),
      };
    })
    .sort((a, b) => {
      const ao = a.order ?? Infinity;
      const bo = b.order ?? Infinity;
      if (ao !== bo) return ao - bo;
      if (b.year !== a.year) return b.year - a.year;
      return (b.month || 0) - (a.month || 0);
    });

export const works = buildItems(workAbstracts, 'works');

const groupByArea = (items) => {
  const order = [];
  const groups = new Map();
  for (const item of items) {
    const area = item.area || 'Other';
    if (!groups.has(area)) {
      groups.set(area, []);
      order.push(area);
    }
    groups.get(area).push(item);
  }
  return order.map((title) => ({ title, projects: groups.get(title) }));
};

export const researchAreas = groupByArea(works);
