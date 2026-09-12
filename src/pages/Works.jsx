import React, { useState } from 'react';
import { works } from '../data.js';

const formatAuthors = (authors) => {
  const parts = authors.split(/(Batu El)/);
  return parts.map((part, i) =>
    part === 'Batu El'
      ? <span key={i} className="text-neutral-900">{part}</span>
      : part
  );
};

const ExtLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral-600 hover:text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900 underline-offset-[3px] transition-colors"
  >
    {children}
  </a>
);

const linkLabels = {
  paper: 'paper',
  appendix: 'online appendix',
  thread_james: "james' thread",
  thread_surya: "surya's thread",
  thread: 'thread',
  code: 'code',
  dataset: 'dataset',
  poster: 'poster',
  slides: 'slides',
  site: 'site',
};

const ProjectEntry = ({ project }) => {
  const links = project.links || {};
  return (
    <div className="py-4 border-t border-neutral-100 first:border-t-0">
      <div className="flex justify-between items-baseline gap-4 mb-1">
        <h3 className="text-[14.5px] font-medium leading-snug tracking-tight text-neutral-900">
          {project.title}
        </h3>
        <span className="font-mono text-[11px] text-neutral-400 shrink-0 tabular-nums">
          {project.year}
        </span>
      </div>
      {project.authors && (
        <p className="text-[12.5px] text-neutral-500 leading-relaxed mb-2">
          {formatAuthors(project.authors)}
        </p>
      )}
      <div className="flex gap-x-3.5 gap-y-1 flex-wrap items-baseline text-[12.5px]">
        {Object.entries(linkLabels).map(([key, label]) =>
          links[key] ? (
            <ExtLink key={key} href={links[key]}>
              {label}
            </ExtLink>
          ) : null
        )}
        {project.tags && project.tags.length > 0 && (
          <span className="font-mono text-[10.5px] text-neutral-400">
            {project.tags.join(' \u00B7 ')}
          </span>
        )}
      </div>
    </div>
  );
};

const main = works
  .filter((w) => w.featured != null)
  .sort((a, b) => a.featured - b.featured);

const other = works
  .filter((w) => w.other != null)
  .sort((a, b) => a.other - b.other);

const groups = { main, other };
const tabs = Object.keys(groups);

const Works = () => {
  const [active, setActive] = useState('main');

  return (
    <>
      <ul role="tablist" className="flex gap-5 mb-8">
        {tabs.map((tab) => {
          const isActive = active === tab;
          return (
            <li key={tab}>
              <button
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab)}
                className={`text-[13.5px] tracking-tight transition-colors duration-150 ${
                  isActive
                    ? 'text-neutral-900 font-medium underline decoration-neutral-900 underline-offset-[4px]'
                    : 'text-neutral-500 hover:text-neutral-900 underline decoration-neutral-200 hover:decoration-neutral-900 underline-offset-[4px]'
                }`}
              >
                {tab}
              </button>
            </li>
          );
        })}
      </ul>

      <div key={active} className="page-fade">
        {groups[active].map((project) => (
          <ProjectEntry key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Works;
