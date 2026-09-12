"""
NeurIPS/ICML/ICLR-style teaser figure for:
    "On Statistical Mechanics of Multiagent Interactions"

Six-panel narrative:
    (a) LLM agents with personas on a social graph
    (b) Spin-glass mapping (same graph, signed couplings, ±1 spins)
    (c) Frustration: friend-of-enemy structures produce rugged landscape
    (d) Replica method: n copies sharing one disorder → overlap matrix Q
    (e) Cavity method: leave-one-out + message passing
    (f) Predicted phase diagram + overlap distributions P(q)
"""

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyArrowPatch, Rectangle, FancyBboxPatch
from matplotlib.lines import Line2D
import numpy as np
import networkx as nx

# ----------------------- Style ------------------------------------------------

plt.rcParams.update({
    'font.family': 'serif',
    'font.serif': ['Times New Roman', 'DejaVu Serif', 'Computer Modern Roman'],
    'font.size': 9,
    'axes.titlesize': 10.5,
    'axes.labelsize': 9,
    'mathtext.fontset': 'cm',
    'axes.linewidth': 0.7,
    'axes.spines.top': False,
    'axes.spines.right': False,
    'figure.facecolor': 'white',
    'axes.facecolor': 'white',
    'savefig.facecolor': 'white',
})

# Palette ---------------------------------------------------------------------
SPIN_UP   = '#c0392b'   # warm red
SPIN_DOWN = '#2c5d99'   # steel blue
EDGE_POS  = '#2e8b57'   # green
EDGE_NEG  = '#d35400'   # orange
HIGHLIGHT = '#f1c40f'   # gold
GRAY      = '#7f8c8d'
INK       = '#1f2933'
LIGHT_BG  = '#f4f6fa'
ACCENT    = '#34495e'

# ---------------------------------------------------------------------------- #
# Figure scaffold                                                               #
# ---------------------------------------------------------------------------- #

fig = plt.figure(figsize=(15.2, 9.0))
gs = fig.add_gridspec(
    2, 3,
    hspace=0.55, wspace=0.22,
    left=0.035, right=0.985, top=0.85, bottom=0.06,
)

# ---------------------------------------------------------------------------- #
# Build a shared 12-agent social graph                                          #
# ---------------------------------------------------------------------------- #
rng = np.random.default_rng(11)
N = 12
G = nx.connected_watts_strogatz_graph(N, k=4, p=0.4, seed=2)
pos = nx.kamada_kawai_layout(G)

# Spins
spins = rng.choice([-1, 1], size=N)
spins[3] = 1; spins[5] = -1; spins[7] = 1   # tweak for visual

# Couplings: signed, weighted
J = {}
for (u, v) in G.edges():
    sign = rng.choice([-1, 1], p=[0.35, 0.65])
    mag = rng.uniform(0.6, 1.7)
    J[(u, v)] = sign * mag

# Persona archetypes (colors / glyphs)
PERSONAS = [
    ("Skeptic",      "#8e44ad"),
    ("Loyalist",     "#27ae60"),
    ("Contrarian",   "#e67e22"),
    ("Bridge",       "#16a085"),
    ("Influencer",   "#c0392b"),
    ("Observer",     "#7f8c8d"),
]
persona_idx = rng.integers(0, len(PERSONAS), size=N)


# ---------------------------------------------------------------------------- #
# Panel (a): LLM agents with personas                                           #
# ---------------------------------------------------------------------------- #
ax_a = fig.add_subplot(gs[0, 0])
ax_a.set_title("(a)  LLM agents with personas",
               loc='left', fontweight='bold', color=INK)

for (u, v) in G.edges():
    ax_a.plot([pos[u][0], pos[v][0]], [pos[u][1], pos[v][1]],
              color=GRAY, lw=0.9, alpha=0.55, zorder=1)

for i in G.nodes():
    name, col = PERSONAS[persona_idx[i]]
    ax_a.scatter(*pos[i], s=420, c=col, edgecolors='white',
                 lw=1.7, zorder=3)
    ax_a.text(pos[i][0], pos[i][1], str(i+1), ha='center', va='center',
              color='white', fontsize=8, fontweight='bold', zorder=4)

ax_a.set_xlim(-1.18, 1.18); ax_a.set_ylim(-1.18, 1.18)
ax_a.set_aspect('equal'); ax_a.axis('off')

# Mini legend
legend_handles = [
    Line2D([0], [0], marker='o', color='none',
           markerfacecolor=col, markeredgecolor='white',
           markersize=8, label=name)
    for name, col in PERSONAS
]
ax_a.legend(handles=legend_handles, loc='lower center',
            bbox_to_anchor=(0.5, -0.13), ncol=3, fontsize=7,
            frameon=False, handletextpad=0.2, columnspacing=0.8)
ax_a.text(0.5, 1.03,
          r"personas $h_i$  $\cdot$  social ties on platform graph",
          transform=ax_a.transAxes, ha='center', fontsize=8, style='italic',
          color=ACCENT)


# ---------------------------------------------------------------------------- #
# Panel (b): Spin-glass mapping                                                  #
# ---------------------------------------------------------------------------- #
ax_b = fig.add_subplot(gs[0, 1])
ax_b.set_title(r"(b)  $\Rightarrow$ Spin-glass Hamiltonian  "
               r"$H_J(S)=-\!\sum J_{ij}S_iS_j-\sum h_iS_i$",
               loc='left', fontweight='bold', color=INK)

for (u, v), w in J.items():
    color = EDGE_POS if w > 0 else EDGE_NEG
    lw = 0.7 + 1.6 * (abs(w) / 1.7)
    ax_b.plot([pos[u][0], pos[v][0]], [pos[u][1], pos[v][1]],
              color=color, lw=lw, alpha=0.85, zorder=1,
              solid_capstyle='round')

for i in G.nodes():
    color = SPIN_UP if spins[i] > 0 else SPIN_DOWN
    ax_b.scatter(*pos[i], s=460, c=color, edgecolors='white',
                 lw=2, zorder=3)
    ax_b.text(pos[i][0], pos[i][1],
              r'$+$' if spins[i] > 0 else r'$-$',
              ha='center', va='center',
              color='white', fontsize=11, fontweight='bold', zorder=4)

ax_b.set_xlim(-1.18, 1.18); ax_b.set_ylim(-1.18, 1.18)
ax_b.set_aspect('equal'); ax_b.axis('off')

leg = ax_b.legend(handles=[
    Line2D([0], [0], color=EDGE_POS, lw=2,   label=r'$J_{ij}>0$ (align)'),
    Line2D([0], [0], color=EDGE_NEG, lw=2,   label=r'$J_{ij}<0$ (oppose)'),
    Line2D([0], [0], marker='o', color='none', markerfacecolor=SPIN_UP,
           markeredgecolor='white', markersize=8, label=r'$S_i=+1$'),
    Line2D([0], [0], marker='o', color='none', markerfacecolor=SPIN_DOWN,
           markeredgecolor='white', markersize=8, label=r'$S_i=-1$'),
], loc='lower center', bbox_to_anchor=(0.5, -0.13), ncol=4,
   fontsize=7, frameon=False, handletextpad=0.2, columnspacing=0.9)


# ---------------------------------------------------------------------------- #
# Panel (c): Frustration                                                         #
# ---------------------------------------------------------------------------- #
ax_c = fig.add_subplot(gs[0, 2])
ax_c.set_title("(c)  Frustration  $\\Rightarrow$  many local minima",
               loc='left', fontweight='bold', color=INK)

# Draw a frustrated triangle
tri = np.array([
    [0.0, 0.85],
    [-0.78, -0.45],
    [0.78, -0.45],
])
tri_spins = [+1, +1, -1]
tri_J = [+1, -1, +1]   # 12, 23, 31  -> product > 0? +1*-1*+1 = -1 -> frustrated

# Triangle edges
edge_labels = [r'$J_{12}>0$', r'$J_{23}<0$', r'$J_{31}>0$']
edge_pairs = [(0, 1), (1, 2), (2, 0)]
for k, (i, j) in enumerate(edge_pairs):
    color = EDGE_POS if tri_J[k] > 0 else EDGE_NEG
    ax_c.plot([tri[i, 0], tri[j, 0]], [tri[i, 1], tri[j, 1]],
              color=color, lw=2.2, zorder=1, solid_capstyle='round')
    # Edge label
    midx = 0.5 * (tri[i, 0] + tri[j, 0])
    midy = 0.5 * (tri[i, 1] + tri[j, 1])
    nx_off = (tri[j, 1] - tri[i, 1])
    ny_off = -(tri[j, 0] - tri[i, 0])
    norm = np.hypot(nx_off, ny_off) + 1e-9
    midx += 0.18 * nx_off / norm
    midy += 0.18 * ny_off / norm
    ax_c.text(midx, midy, edge_labels[k], fontsize=8.5,
              ha='center', va='center', color=color, fontweight='bold')

# Triangle nodes
for k in range(3):
    color = SPIN_UP if tri_spins[k] > 0 else SPIN_DOWN
    ax_c.scatter(*tri[k], s=620, c=color, edgecolors='white', lw=2.2, zorder=3)
    ax_c.text(tri[k, 0], tri[k, 1],
              r'$+$' if tri_spins[k] > 0 else r'$-$',
              ha='center', va='center',
              color='white', fontsize=14, fontweight='bold', zorder=4)
    ax_c.text(tri[k, 0], tri[k, 1] - 0.20,
              f'$S_{k+1}$', ha='center', va='top',
              fontsize=9.5, color=INK)

# Highlight "broken" bond
broken = (2, 0)  # the +J between mismatched spins
xm = 0.5 * (tri[broken[0], 0] + tri[broken[1], 0]) + 0.05
ym = 0.5 * (tri[broken[0], 1] + tri[broken[1], 1]) + 0.05
ax_c.scatter(xm, ym, s=380, c=HIGHLIGHT, edgecolors='white',
             lw=1.4, alpha=0.85, zorder=2, marker='*')

ax_c.text(0, -0.95,
          r"product $J_{12}J_{23}J_{31}<0$  $\Rightarrow$  "
          r"no configuration satisfies all bonds",
          ha='center', va='center', fontsize=8.5, style='italic',
          color=ACCENT)
ax_c.text(0, -1.15,
          r"$\Rightarrow$  exponentially many metastable opinion states",
          ha='center', va='center', fontsize=8.5,
          color=INK)

ax_c.set_xlim(-1.25, 1.25); ax_c.set_ylim(-1.30, 1.10)
ax_c.set_aspect('equal'); ax_c.axis('off')


# ---------------------------------------------------------------------------- #
# Panel (d): Replica method                                                      #
# ---------------------------------------------------------------------------- #
ax_d = fig.add_subplot(gs[1, 0])
ax_d.set_title(r"(d)  Replica method:  $n$ copies share one $J$",
               loc='left', fontweight='bold', color=INK)

# Mini-network template positions
mini_pos = {
    0: (-0.6, 0.55),
    1: ( 0.0, 0.85),
    2: ( 0.6, 0.55),
    3: ( 0.55, -0.05),
    4: (-0.55, -0.05),
    5: ( 0.0,  0.25),
}
mini_edges = [(0,1),(1,2),(2,3),(3,4),(4,0),(0,5),(2,5),(1,5),(3,5)]

# Three replica copies stacked with offset
offsets = [(-2.0, 0.6), (-1.7, 0.0), (-1.4, -0.6)]
labels = [r'$S^{1}$', r'$S^{2}$', r'$S^{3}$']
replica_spins = [
    [+1,+1,-1,-1,+1,-1],
    [+1,-1,-1,+1,+1,+1],
    [-1,+1,+1,-1,-1,+1],
]

for a, (ox, oy) in enumerate(offsets):
    for (u, v) in mini_edges:
        ax_d.plot([mini_pos[u][0]+ox, mini_pos[v][0]+ox],
                  [mini_pos[u][1]+oy, mini_pos[v][1]+oy],
                  color=GRAY, lw=0.7, alpha=0.6, zorder=1)
    for i in mini_pos:
        color = SPIN_UP if replica_spins[a][i] > 0 else SPIN_DOWN
        ax_d.scatter(mini_pos[i][0]+ox, mini_pos[i][1]+oy,
                     s=80, c=color, edgecolors='white', lw=1, zorder=2)
    ax_d.text(ox - 0.85, oy + 0.4, labels[a], fontsize=11,
              color=INK, fontweight='bold')

# Big arrow → overlap matrix
arrow = FancyArrowPatch(
    (-0.55, 0.0), (0.85, 0.0), arrowstyle='-|>',
    color=INK, mutation_scale=18, lw=1.8, zorder=3
)
ax_d.add_patch(arrow)
ax_d.text(0.15, 0.18, r'$\mathbb{E}_{J}[\,\cdot\,]$', fontsize=10,
          ha='center', color=INK)

# Overlap matrix Q_{ab}
n = 4
Q = np.array([
    [1.00, 0.72, 0.41, 0.55],
    [0.72, 1.00, 0.62, 0.48],
    [0.41, 0.62, 1.00, 0.74],
    [0.55, 0.48, 0.74, 1.00],
])
mat_x, mat_y = 1.55, -0.55
cell = 0.32
for i in range(n):
    for j in range(n):
        val = Q[i, j]
        c = plt.cm.RdBu_r((val + 1) / 2)
        ax_d.add_patch(Rectangle((mat_x + j*cell, mat_y + (n-1-i)*cell),
                                 cell, cell, color=c, ec='white', lw=0.7))
        ax_d.text(mat_x + j*cell + cell/2,
                  mat_y + (n-1-i)*cell + cell/2,
                  f'{val:.2f}', ha='center', va='center', fontsize=7.5,
                  color='white' if abs(val) > 0.45 else INK,
                  fontweight='bold')

ax_d.text(mat_x + n*cell/2, mat_y + n*cell + 0.12,
          r'$Q_{ab}=\frac{1}{N}\sum_i S_i^{a}S_i^{b}$',
          ha='center', fontsize=9, color=INK)

ax_d.set_xlim(-3.1, 3.2); ax_d.set_ylim(-1.35, 1.35)
ax_d.set_aspect('equal'); ax_d.axis('off')


# ---------------------------------------------------------------------------- #
# Panel (e): Cavity method                                                       #
# ---------------------------------------------------------------------------- #
ax_e = fig.add_subplot(gs[1, 1])
ax_e.set_title("(e)  Cavity method:  leave-one-out + messages",
               loc='left', fontweight='bold', color=INK)

cav_pos = {
    0: (-0.85, 0.6),
    1: (-0.0, 0.85),
    2: ( 0.85, 0.6),
    3: ( 0.85, -0.3),
    4: (-0.85, -0.3),
    5: ( 0.0, -0.75),
}
cav_edges = [(0,1),(1,2),(2,3),(3,5),(5,4),(4,0)]
cav_spins = [+1, -1, +1, -1, +1, -1]

# Removed center node
center = (0.0, 0.0)

# Draw faded edges to removed center
for nbr in [0, 1, 2, 3, 4, 5]:
    ax_e.plot([cav_pos[nbr][0], center[0]],
              [cav_pos[nbr][1], center[1]],
              color=GRAY, lw=0.6, alpha=0.25, ls=(0,(2,2)), zorder=1)

# Outer edges
for (u, v) in cav_edges:
    ax_e.plot([cav_pos[u][0], cav_pos[v][0]],
              [cav_pos[u][1], cav_pos[v][1]],
              color=GRAY, lw=0.9, alpha=0.6, zorder=1)

# Outer spins
for i in cav_pos:
    color = SPIN_UP if cav_spins[i] > 0 else SPIN_DOWN
    ax_e.scatter(*cav_pos[i], s=380, c=color,
                 edgecolors='white', lw=1.6, zorder=3)
    ax_e.text(cav_pos[i][0], cav_pos[i][1],
              r'$+$' if cav_spins[i] > 0 else r'$-$',
              ha='center', va='center', color='white',
              fontsize=10, fontweight='bold', zorder=4)

# Cavity (removed) node
ax_e.scatter(*center, s=420, facecolors='white',
             edgecolors=INK, lw=1.6, ls='--', zorder=3)
ax_e.text(*center, '?', ha='center', va='center',
          fontsize=12, fontweight='bold', color=INK, zorder=4)

# Message arrows: η_{i→0}
for nbr in [0, 1, 2, 3, 4, 5]:
    sx, sy = cav_pos[nbr]
    ex, ey = center
    # shorten arrow on both ends
    vx, vy = ex - sx, ey - sy
    norm = np.hypot(vx, vy)
    ux, uy = vx / norm, vy / norm
    sx2, sy2 = sx + 0.16 * ux, sy + 0.16 * uy
    ex2, ey2 = ex - 0.20 * ux, ey - 0.20 * uy
    arr = FancyArrowPatch((sx2, sy2), (ex2, ey2), arrowstyle='-|>',
                          color=ACCENT, mutation_scale=11, lw=1.1,
                          alpha=0.85, zorder=2)
    ax_e.add_patch(arr)

ax_e.text(0.0, -1.15,
          r"messages  $\eta_{i\to 0}(S_0)\propto\psi_i(S_i)\!"
          r"\prod_{k\in\partial i\setminus 0}\!\sum_{S_k}\psi_{ik}\,\eta_{k\to i}$",
          ha='center', va='center', fontsize=8.2, color=INK)
ax_e.text(0.0, -1.36,
          "$\\Rightarrow$ Belief Propagation (sparse)  /  AMP (dense)",
          ha='center', va='center', fontsize=8.5,
          color=ACCENT, style='italic')

ax_e.set_xlim(-1.45, 1.45); ax_e.set_ylim(-1.55, 1.20)
ax_e.set_aspect('equal'); ax_e.axis('off')


# ---------------------------------------------------------------------------- #
# Panel (f): Phase diagram + P(q)                                                #
# ---------------------------------------------------------------------------- #
ax_f = fig.add_subplot(gs[1, 2])
ax_f.set_title("(f)  Predicted phase diagram & overlap distributions",
               loc='left', fontweight='bold', color=INK)

# 2D phase diagram region
beta = np.linspace(0, 2, 400)
het  = np.linspace(0, 2, 400)
B, H_ = np.meshgrid(beta, het)
# Sketch three regions: consensus (low β, low het), ferro (mid β, low het),
# glassy/polarized (high β + high het)
region = np.zeros_like(B)
region[(B > 0.8) & (H_ < 0.7)] = 1                # ferro
region[(B > 0.9) & (H_ > 0.7)] = 2                # glassy
region[(B > 0.5) & (H_ > 1.3) & (B < 1.1)] = 2    # extend glassy
cmap = plt.matplotlib.colors.ListedColormap(['#dfe9f5', '#fce4c4', '#f2c2c2'])
ax_f.imshow(region, origin='lower', extent=[0, 2, 0, 2], aspect='auto',
            cmap=cmap, alpha=0.85, interpolation='bilinear')
# Phase boundaries (schematic)
ax_f.plot([0.9, 0.9], [0, 0.7], color=INK, lw=1.0)
ax_f.plot([0.9, 1.1], [0.7, 0.7], color=INK, lw=1.0)
ax_f.plot([1.1, 1.1], [0.7, 1.3], color=INK, lw=1.0)
ax_f.plot([0.55, 1.1], [1.3, 1.3], color=INK, lw=1.0)
ax_f.plot([0.55, 0.55], [1.3, 2.0], color=INK, lw=1.0)

ax_f.text(0.32, 0.35, "Consensus",  fontsize=9, color=ACCENT,
          fontweight='bold', ha='center')
ax_f.text(1.55, 0.35, "Ferromagnet\n(broken symmetry)", fontsize=8,
          color=ACCENT, fontweight='bold', ha='center')
ax_f.text(1.55, 1.5, "Glassy /\npolarized (RSB)", fontsize=8.5,
          color='#922b21', fontweight='bold', ha='center')

ax_f.set_xlabel(r'conformity  $\beta$', color=INK)
ax_f.set_ylabel(r'persona heterogeneity  $\sigma_h$', color=INK)
ax_f.set_xticks([0, 0.5, 1, 1.5, 2])
ax_f.set_yticks([0, 0.5, 1, 1.5, 2])
ax_f.set_xlim(0, 2); ax_f.set_ylim(0, 2)
ax_f.spines['top'].set_visible(False)
ax_f.spines['right'].set_visible(False)

# Inset: P(q) for three phases
inset = ax_f.inset_axes([0.62, 0.62, 0.36, 0.34])
q = np.linspace(-0.05, 1.05, 400)

def gauss(q, mu, sig):
    return np.exp(-0.5 * ((q - mu) / sig) ** 2) / (sig * np.sqrt(2 * np.pi))

para = gauss(q, 0.00, 0.04)
ferr = gauss(q, 0.75, 0.04)
glas = 0.6 * gauss(q, 0.25, 0.07) + 0.8 * gauss(q, 0.65, 0.08) \
       + 0.3 * gauss(q, 0.85, 0.05)

inset.fill_between(q, para, alpha=0.6, color='#2980b9', label='consensus')
inset.fill_between(q, ferr, alpha=0.6, color='#e67e22', label='ferro')
inset.fill_between(q, glas, alpha=0.6, color='#c0392b', label='glassy')
inset.set_xlim(0, 1); inset.set_ylim(0, None)
inset.set_xticks([0, 0.5, 1]); inset.set_yticks([])
inset.tick_params(axis='x', labelsize=7)
inset.set_xlabel(r'overlap $q$', fontsize=7, labelpad=1)
inset.set_title(r'$P(q)$', fontsize=8, pad=2)
inset.legend(fontsize=6, frameon=False, loc='upper center',
             bbox_to_anchor=(0.5, -0.18), ncol=3, handletextpad=0.2,
             columnspacing=0.6)
for s in ['top', 'right']:
    inset.spines[s].set_visible(False)


# ---------------------------------------------------------------------------- #
# Suptitle + caption strip                                                       #
# ---------------------------------------------------------------------------- #
fig.text(0.5, 0.975,
         "On the Statistical Mechanics of Multi-Agent Interactions",
         ha='center', va='top', fontsize=16.5, fontweight='bold', color=INK)
fig.text(0.5, 0.935,
         "LLM agents with personas on a social graph  $\\to$  "
         "spin-glass mapping  $\\to$  replica & cavity analysis  $\\to$  "
         "predicted phase diagram of opinion dynamics",
         ha='center', va='top', fontsize=10.5, style='italic', color=ACCENT)

# Save in PNG and PDF
out_dir = "/Users/batuel/Documents/Projects/home/assets/blog/004_statmech/figures"
fig.savefig(f"{out_dir}/teaser_figure.png", dpi=300, bbox_inches='tight',
            pad_inches=0.15)
fig.savefig(f"{out_dir}/teaser_figure.pdf", bbox_inches='tight',
            pad_inches=0.15)
print("Saved teaser_figure.png and teaser_figure.pdf to:", out_dir)
