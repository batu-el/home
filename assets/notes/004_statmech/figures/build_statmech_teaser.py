"""
Build a two-panel teaser slide for
    "On the Statistical Mechanics of Multi-Agent Interactions"

Style is borrowed from the user's existing
    sim2real_conversational_teaser (1).pptx

  LEFT (blue):   theory  —  Curie magnets → spin glass → agent-society Hamiltonian
  RIGHT (coral): applications — statmech methods predict empirical phase transitions
"""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.oxml.ns import qn
from lxml import etree
import math
import random

# ============================================================== style ========

PANEL_W = Inches(6.30)
PANEL_H = Inches(5.16)
PANEL_TOP = Inches(1.21)
LEFT_PANEL_X = Inches(0.28)
RIGHT_PANEL_X = Inches(6.89)

# Left palette (blue / mathematical theory)
BLUE_BG     = RGBColor(0xF4, 0xF7, 0xFB)
BLUE_ACCENT = RGBColor(0x4A, 0x6F, 0xA5)
BLUE_DARK   = RGBColor(0x2C, 0x52, 0x82)

# Right palette (coral / empirical phenomena)
CORAL_BG     = RGBColor(0xFB, 0xF5, 0xF2)
CORAL_ACCENT = RGBColor(0xC4, 0x45, 0x36)
CORAL_DARK   = RGBColor(0x92, 0x38, 0x2C)

# Neutrals
INK     = RGBColor(0x1F, 0x29, 0x37)
MUTED   = RGBColor(0x6B, 0x72, 0x80)
WHITE   = RGBColor(0xFF, 0xFF, 0xFF)
GREEN   = RGBColor(0x2E, 0x8B, 0x57)
ORANGE  = RGBColor(0xD3, 0x54, 0x00)
GOLD    = RGBColor(0xF1, 0xC4, 0x0F)

FONT_BODY = "Calibri"
FONT_MATH = "Cambria Math"

# ============================================================ utilities ======


def set_no_line(shape):
    line = shape.line
    line.fill.background()  # transparent line


def add_text(slide, x, y, w, h, text, *,
             font=FONT_BODY, size=11, bold=False, color=INK,
             align=PP_ALIGN.LEFT, anchor=MSO_ANCHOR.TOP, italic=False):
    box = slide.shapes.add_textbox(x, y, w, h)
    tf = box.text_frame
    tf.margin_left = tf.margin_right = 0
    tf.margin_top = tf.margin_bottom = 0
    tf.word_wrap = True
    tf.vertical_anchor = anchor
    p = tf.paragraphs[0]
    p.alignment = align
    r = p.add_run()
    r.text = text
    f = r.font
    f.name = font
    f.size = Pt(size)
    f.bold = bold
    f.italic = italic
    f.color.rgb = color
    return box


def add_runs(slide, x, y, w, h, runs, *,
             align=PP_ALIGN.LEFT, anchor=MSO_ANCHOR.TOP):
    """runs: list of dicts with text/font/size/bold/color/italic."""
    box = slide.shapes.add_textbox(x, y, w, h)
    tf = box.text_frame
    tf.margin_left = tf.margin_right = 0
    tf.margin_top = tf.margin_bottom = 0
    tf.word_wrap = True
    tf.vertical_anchor = anchor
    p = tf.paragraphs[0]
    p.alignment = align
    for r_spec in runs:
        r = p.add_run()
        r.text = r_spec["text"]
        f = r.font
        f.name = r_spec.get("font", FONT_BODY)
        f.size = Pt(r_spec.get("size", 11))
        f.bold = r_spec.get("bold", False)
        f.italic = r_spec.get("italic", False)
        f.color.rgb = r_spec.get("color", INK)
    return box


def add_rounded_rect(slide, x, y, w, h, fill, *, line_color=None,
                     line_width=0.5, corner=None):
    shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y, w, h)
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill
    if line_color is None:
        set_no_line(shape)
    else:
        shape.line.color.rgb = line_color
        shape.line.width = Pt(line_width)
    # Adjust corner radius (smaller number = less rounded)
    if corner is not None:
        adj = shape.adjustments
        adj[0] = corner
    return shape


def add_oval(slide, x, y, w, h, fill, *, line_color=None, line_width=0.5):
    shape = slide.shapes.add_shape(MSO_SHAPE.OVAL, x, y, w, h)
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill
    if line_color is None:
        set_no_line(shape)
    else:
        shape.line.color.rgb = line_color
        shape.line.width = Pt(line_width)
    return shape


def add_line(slide, x1, y1, x2, y2, color, width=1.2, dash=None):
    line = slide.shapes.add_connector(1, x1, y1, x2, y2)
    line.line.color.rgb = color
    line.line.width = Pt(width)
    if dash:
        ln = line.line._get_or_add_lnPr() if False else None
    return line


# ============================================================ slide ==========

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)
blank = prs.slide_layouts[6]
slide = prs.slides.add_slide(blank)

# ------------------------------------- LEFT PANEL ----------------------------

# Panel background
add_rounded_rect(slide, LEFT_PANEL_X, PANEL_TOP, PANEL_W, PANEL_H,
                 fill=BLUE_BG, corner=0.04)

# Accent dot + caps header
DOT_R = Inches(0.10)
add_oval(slide, LEFT_PANEL_X + Inches(0.32), PANEL_TOP + Inches(0.36),
         DOT_R, DOT_R, fill=BLUE_ACCENT)
add_text(slide, LEFT_PANEL_X + Inches(0.51), PANEL_TOP + Inches(0.24),
         Inches(5.5), Inches(0.30),
         "FROM MAGNETS TO AGENT SOCIETIES",
         size=14, bold=True, color=BLUE_DARK)

# Subtitle (big)
add_text(slide, LEFT_PANEL_X + Inches(0.32), PANEL_TOP + Inches(0.63),
         Inches(5.80), Inches(0.40),
         "Spin glass as a model of opinion dynamics",
         size=21, bold=True, color=INK)

# -------------------- Visual row: Curie / Spin glass / Society ---------------

ROW_TOP = PANEL_TOP + Inches(1.20)
ROW_H = Inches(1.55)

# Three sub-panels inside the left panel
SUB_W = Inches(1.80)
sub_x = [
    LEFT_PANEL_X + Inches(0.32),
    LEFT_PANEL_X + Inches(2.27),
    LEFT_PANEL_X + Inches(4.22),
]

# Captions above each subpanel
captions = [
    ("CURIE MAGNET",       "mean-field, ordered"),
    ("SPIN GLASS",         "random couplings, frustrated"),
    ("AGENT SOCIETY",      "personas + signed ties"),
]
for k, (cap, sub) in enumerate(captions):
    add_text(slide, sub_x[k], ROW_TOP - Inches(0.30),
             SUB_W, Inches(0.18),
             cap, size=9, bold=True, color=BLUE_DARK,
             align=PP_ALIGN.CENTER)
    add_text(slide, sub_x[k], ROW_TOP - Inches(0.13),
             SUB_W, Inches(0.16),
             sub, size=8.5, italic=True, color=MUTED,
             align=PP_ALIGN.CENTER)

# Sub-panel backgrounds (white rounded rects)
for k in range(3):
    add_rounded_rect(slide, sub_x[k], ROW_TOP, SUB_W, ROW_H,
                     fill=WHITE, corner=0.06)


# ----- (i) CURIE MAGNET — uniform up-spin grid ------
def draw_spin(slide, cx, cy, r, up, *, label_size=10):
    color = CORAL_ACCENT if up else BLUE_ACCENT
    add_oval(slide, cx - r, cy - r, 2 * r, 2 * r, fill=color)
    add_text(slide, cx - r, cy - r, 2 * r, 2 * r,
             "+" if up else "–",
             size=label_size, bold=True, color=WHITE,
             align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)


r_spin = Inches(0.11)
rows, cols = 3, 4
gx0 = sub_x[0] + Inches(0.30)
gy0 = ROW_TOP + Inches(0.30)
gx_step = Inches(0.34)
gy_step = Inches(0.36)
for rr in range(rows):
    for cc in range(cols):
        cx = gx0 + cc * gx_step + r_spin
        cy = gy0 + rr * gy_step + r_spin
        draw_spin(slide, cx, cy, r_spin, up=True)
# Tag
add_text(slide, sub_x[0] + Inches(0.10), ROW_TOP + Inches(1.30),
         SUB_W - Inches(0.20), Inches(0.18),
         "all aligned — single phase",
         size=8.5, italic=True, color=MUTED, align=PP_ALIGN.CENTER)


# ----- (ii) SPIN GLASS — graph with frustrated triangle -----
# Place nodes
sg_cx = sub_x[1] + SUB_W / 2
sg_cy = ROW_TOP + Inches(0.70)
nodes = []
N_sg = 6
for k in range(N_sg):
    theta = 2 * math.pi * k / N_sg - math.pi / 2
    px = sg_cx + Inches(0.55) * math.cos(theta)
    py = sg_cy + Inches(0.45) * math.sin(theta)
    nodes.append((px, py))
# Edges with signs
edges = [
    (0, 1, +1), (1, 2, -1), (2, 3, +1),
    (3, 4, +1), (4, 5, -1), (5, 0, +1),
    (0, 2, +1), (0, 3, -1), (1, 4, +1),
]
for (a, b, s) in edges:
    c = GREEN if s > 0 else ORANGE
    add_line(slide, nodes[a][0], nodes[a][1],
             nodes[b][0], nodes[b][1], color=c, width=1.4)
# Frustrated triangle highlight (0,2,4)
tri_color = GOLD
for (a, b) in [(0, 2), (2, 4), (4, 0)]:
    # draw a slightly thicker gold edge underneath? Skip, keep simple.
    pass
# Nodes (random ±1)
random.seed(7)
sg_spins = [+1, -1, +1, +1, -1, +1]
for k, (px, py) in enumerate(nodes):
    draw_spin(slide, px, py, r_spin, up=(sg_spins[k] > 0), label_size=9)
# Tag
add_text(slide, sub_x[1] + Inches(0.10), ROW_TOP + Inches(1.30),
         SUB_W - Inches(0.20), Inches(0.18),
         "many local minima",
         size=8.5, italic=True, color=MUTED, align=PP_ALIGN.CENTER)


# ----- (iii) AGENT SOCIETY — same graph, persona-colored nodes -----
sg_cx2 = sub_x[2] + SUB_W / 2
sg_cy2 = ROW_TOP + Inches(0.70)
nodes2 = []
for k in range(N_sg):
    theta = 2 * math.pi * k / N_sg - math.pi / 2
    px = sg_cx2 + Inches(0.55) * math.cos(theta)
    py = sg_cy2 + Inches(0.45) * math.sin(theta)
    nodes2.append((px, py))
for (a, b, s) in edges:
    c = GREEN if s > 0 else ORANGE
    add_line(slide, nodes2[a][0], nodes2[a][1],
             nodes2[b][0], nodes2[b][1], color=c, width=1.4)
persona_colors = [
    RGBColor(0x8E, 0x44, 0xAD),  # Skeptic
    RGBColor(0x27, 0xAE, 0x60),  # Loyalist
    RGBColor(0xE6, 0x7E, 0x22),  # Contrarian
    RGBColor(0x16, 0xA0, 0x85),  # Bridge
    RGBColor(0xC0, 0x39, 0x2B),  # Influencer
    RGBColor(0x34, 0x49, 0x5E),  # Observer
]
for k, (px, py) in enumerate(nodes2):
    add_oval(slide, px - r_spin, py - r_spin, 2 * r_spin, 2 * r_spin,
             fill=persona_colors[k])
    add_text(slide, px - r_spin, py - r_spin, 2 * r_spin, 2 * r_spin,
             str(k + 1), size=8, bold=True, color=WHITE,
             align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)
add_text(slide, sub_x[2] + Inches(0.10), ROW_TOP + Inches(1.30),
         SUB_W - Inches(0.20), Inches(0.18),
         "LLM personas on signed graph",
         size=8.5, italic=True, color=MUTED, align=PP_ALIGN.CENTER)

# Arrows between subpanels
for ax in [sub_x[0] + SUB_W, sub_x[1] + SUB_W]:
    arr = slide.shapes.add_connector(1, ax + Inches(0.01),
                                     ROW_TOP + ROW_H / 2,
                                     ax + Inches(0.14),
                                     ROW_TOP + ROW_H / 2)
    arr.line.color.rgb = MUTED
    arr.line.width = Pt(1.2)
    # arrow head
    ln = arr.line._get_or_add_ln() if False else None

# ------------------- Bottom Hamiltonian box (left panel) ---------------------

HAM_TOP = ROW_TOP + ROW_H + Inches(0.22)
ham_box = add_rounded_rect(
    slide, LEFT_PANEL_X + Inches(0.32), HAM_TOP,
    Inches(5.66), Inches(0.95), fill=WHITE, corner=0.10)

# Section caption above hamiltonian
add_text(slide, LEFT_PANEL_X + Inches(0.32),
         HAM_TOP - Inches(0.30),
         Inches(5.66), Inches(0.22),
         "EFFECTIVE HAMILTONIAN  ON THE AGENT GRAPH",
         size=10, bold=True, color=BLUE_DARK)

# The Hamiltonian as a formula
add_runs(slide,
         LEFT_PANEL_X + Inches(0.32), HAM_TOP + Inches(0.12),
         Inches(5.66), Inches(0.40),
         runs=[
             {"text": "H", "font": FONT_MATH, "size": 18, "bold": True,
              "color": INK, "italic": True},
             {"text": "J", "font": FONT_MATH, "size": 11, "bold": False,
              "color": INK, "italic": True},
             {"text": "(S) = − Σ ", "font": FONT_BODY, "size": 18, "bold": True,
              "color": INK},
             {"text": "J", "font": FONT_MATH, "size": 18, "bold": True,
              "color": GREEN, "italic": True},
             {"text": "ij", "font": FONT_MATH, "size": 11, "color": GREEN,
              "italic": True},
             {"text": " S", "font": FONT_MATH, "size": 18, "bold": True,
              "color": INK, "italic": True},
             {"text": "i", "font": FONT_MATH, "size": 11, "color": INK,
              "italic": True},
             {"text": " S", "font": FONT_MATH, "size": 18, "bold": True,
              "color": INK, "italic": True},
             {"text": "j", "font": FONT_MATH, "size": 11, "color": INK,
              "italic": True},
             {"text": "  − Σ ", "font": FONT_BODY, "size": 18, "bold": True,
              "color": INK},
             {"text": "h", "font": FONT_MATH, "size": 18, "bold": True,
              "color": ORANGE, "italic": True},
             {"text": "i", "font": FONT_MATH, "size": 11, "color": ORANGE,
              "italic": True},
             {"text": " S", "font": FONT_MATH, "size": 18, "bold": True,
              "color": INK, "italic": True},
             {"text": "i", "font": FONT_MATH, "size": 11, "color": INK,
              "italic": True},
         ], align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)

# Annotation row beneath formula
add_runs(slide,
         LEFT_PANEL_X + Inches(0.32), HAM_TOP + Inches(0.58),
         Inches(5.66), Inches(0.28),
         runs=[
             {"text": "social tie (signed) ", "size": 9.5, "bold": True,
              "color": GREEN},
             {"text": "·  ", "size": 9.5, "color": MUTED},
             {"text": "persona prior ", "size": 9.5, "bold": True,
              "color": ORANGE},
             {"text": "·  ", "size": 9.5, "color": MUTED},
             {"text": "stance ", "size": 9.5, "bold": True, "color": INK},
             {"text": "S", "font": FONT_MATH, "size": 9.5, "italic": True,
              "bold": True, "color": INK},
             {"text": " ∈ {−1, +1}", "size": 9.5, "color": INK, "bold": True},
         ], align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)


# ------------------------------------ RIGHT PANEL ----------------------------

# Panel background
add_rounded_rect(slide, RIGHT_PANEL_X, PANEL_TOP, PANEL_W, PANEL_H,
                 fill=CORAL_BG, corner=0.04)

# Accent dot + caps header
add_oval(slide, RIGHT_PANEL_X + Inches(0.32), PANEL_TOP + Inches(0.36),
         DOT_R, DOT_R, fill=CORAL_ACCENT)
add_text(slide, RIGHT_PANEL_X + Inches(0.51), PANEL_TOP + Inches(0.24),
         Inches(5.5), Inches(0.30),
         "PREDICT EMPIRICAL PHENOMENA",
         size=14, bold=True, color=CORAL_DARK)

# Subtitle (shortened to fit a single line)
add_text(slide, RIGHT_PANEL_X + Inches(0.32), PANEL_TOP + Inches(0.63),
         Inches(5.80), Inches(0.40),
         "Replica & cavity predict opinion phases",
         size=20, bold=True, color=INK)


# -------------------- Method illustration row -------------------------------

R_ROW_TOP = PANEL_TOP + Inches(1.20)
R_ROW_H = Inches(1.55)

R_SUB_W = Inches(2.80)
r_sub_x = [
    RIGHT_PANEL_X + Inches(0.32),
    RIGHT_PANEL_X + Inches(3.27),
]
r_caps = [
    ("REPLICA METHOD",   r"E_J[Z^n]  ⇒  overlap matrix  Q_ab"),
    ("CAVITY METHOD",    r"leave-one-out  ⇒  message passing"),
]
for k, (cap, sub) in enumerate(r_caps):
    add_text(slide, r_sub_x[k], R_ROW_TOP - Inches(0.30),
             R_SUB_W, Inches(0.18),
             cap, size=9.5, bold=True, color=CORAL_DARK,
             align=PP_ALIGN.CENTER)
    add_text(slide, r_sub_x[k], R_ROW_TOP - Inches(0.13),
             R_SUB_W, Inches(0.16),
             sub, size=8.5, italic=True, color=MUTED,
             align=PP_ALIGN.CENTER)
for k in range(2):
    add_rounded_rect(slide, r_sub_x[k], R_ROW_TOP, R_SUB_W, R_ROW_H,
                     fill=WHITE, corner=0.06)


# --- REPLICA: stacked copies → Q matrix ---
# 3 mini graphs stacked on the left, big arrow → matrix on the right
mini_origin_x = r_sub_x[0] + Inches(0.18)
mini_origin_y = R_ROW_TOP + Inches(0.18)
mini_W = Inches(0.85)
mini_step_y = Inches(0.42)
replica_spins = [
    [+1, -1, +1, -1],
    [-1, -1, +1, +1],
    [+1, +1, -1, +1],
]
for a, spin_row in enumerate(replica_spins):
    ox = mini_origin_x + Inches(0.05 * a)
    oy = mini_origin_y + a * mini_step_y
    # 4 spins in a small ring
    centers = [
        (ox + Inches(0.05), oy + Inches(0.12)),
        (ox + Inches(0.30), oy + Inches(0.02)),
        (ox + Inches(0.55), oy + Inches(0.12)),
        (ox + Inches(0.30), oy + Inches(0.25)),
    ]
    # edges
    for (i, j) in [(0, 1), (1, 2), (2, 3), (3, 0), (0, 2)]:
        add_line(slide, centers[i][0] + Inches(0.06),
                 centers[i][1] + Inches(0.06),
                 centers[j][0] + Inches(0.06),
                 centers[j][1] + Inches(0.06),
                 color=MUTED, width=0.7)
    for k, (cx, cy) in enumerate(centers):
        col = CORAL_ACCENT if spin_row[k] > 0 else BLUE_ACCENT
        add_oval(slide, cx, cy, Inches(0.12), Inches(0.12), fill=col)
    # Label S^a
    add_runs(slide, ox - Inches(0.18), oy + Inches(0.04),
             Inches(0.30), Inches(0.20),
             [
                 {"text": "S", "font": FONT_MATH, "size": 10, "bold": True,
                  "italic": True, "color": INK},
                 {"text": str(a + 1), "font": FONT_MATH, "size": 7,
                  "italic": False, "color": INK, "bold": True},
             ])

# Arrow to overlap matrix
arrow_y = R_ROW_TOP + R_ROW_H / 2
arr_left = r_sub_x[0] + Inches(1.05)
arr_right = r_sub_x[0] + Inches(1.55)
add_line(slide, arr_left, arrow_y, arr_right, arrow_y,
         color=INK, width=1.6)
# Arrowhead approximation: small triangle
ah = slide.shapes.add_shape(MSO_SHAPE.RIGHT_TRIANGLE,
                            arr_right - Inches(0.04),
                            arrow_y - Inches(0.06),
                            Inches(0.10), Inches(0.12))
ah.rotation = 90
ah.fill.solid(); ah.fill.fore_color.rgb = INK
set_no_line(ah)

add_text(slide, arr_left - Inches(0.05), arrow_y - Inches(0.28),
         Inches(0.60), Inches(0.18),
         "E_J[ · ]", size=9, italic=True, color=INK,
         align=PP_ALIGN.CENTER)

# Q matrix as a 3x3 heatmap of colored squares
Q_vals = [
    [1.00, 0.72, 0.41],
    [0.72, 1.00, 0.62],
    [0.41, 0.62, 1.00],
]
mat_x0 = r_sub_x[0] + Inches(1.65)
mat_y0 = R_ROW_TOP + Inches(0.25)
cell = Inches(0.30)
for i in range(3):
    for j in range(3):
        v = Q_vals[i][j]
        # Map v in [0,1] to coral intensity
        # 0 → very light, 1 → coral_accent
        r0, g0, b0 = 0xFB, 0xF5, 0xF2
        r1, g1, b1 = 0xC4, 0x45, 0x36
        rr = int(r0 + (r1 - r0) * v)
        gg = int(g0 + (g1 - g0) * v)
        bb = int(b0 + (b1 - b0) * v)
        add_rounded_rect(slide,
                         mat_x0 + j * cell, mat_y0 + i * cell,
                         cell, cell,
                         fill=RGBColor(rr, gg, bb),
                         line_color=WHITE, line_width=0.6, corner=0.1)
        add_text(slide,
                 mat_x0 + j * cell, mat_y0 + i * cell,
                 cell, cell,
                 f"{v:.2f}", size=8, bold=True,
                 color=WHITE if v > 0.45 else INK,
                 align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)
add_runs(slide,
         mat_x0 - Inches(0.10), mat_y0 + 3 * cell + Inches(0.05),
         Inches(1.40), Inches(0.20),
         [
             {"text": "Q", "font": FONT_MATH, "size": 11, "bold": True,
              "italic": True, "color": INK},
             {"text": "ab", "font": FONT_MATH, "size": 8,
              "italic": True, "color": INK},
             {"text": " overlap matrix", "size": 9, "italic": True,
              "color": MUTED},
         ])


# --- CAVITY: 5 outer spins around a dashed center node with message arrows ---
cv_cx = r_sub_x[1] + R_SUB_W / 2
cv_cy = R_ROW_TOP + Inches(0.70)
outer = []
for k in range(5):
    theta = 2 * math.pi * k / 5 - math.pi / 2
    px = cv_cx + Inches(0.55) * math.cos(theta)
    py = cv_cy + Inches(0.45) * math.sin(theta)
    outer.append((px, py))
# Edges to center (dashed grayish)
for (px, py) in outer:
    add_line(slide, px, py, cv_cx, cv_cy, color=MUTED, width=0.7)
# Message arrows (slightly offset)
for (px, py) in outer:
    # short arrow from outer toward center
    dx, dy = cv_cx - px, cv_cy - py
    dist = math.sqrt(dx * dx + dy * dy)
    ux, uy = dx / dist, dy / dist
    sx = px + Inches(0.06) * ux
    sy = py + Inches(0.06) * uy
    ex = cv_cx - Inches(0.20) * ux
    ey = cv_cy - Inches(0.20) * uy
    add_line(slide, sx, sy, ex, ey, color=CORAL_DARK, width=1.0)
# Outer spins
outer_spins = [+1, -1, +1, -1, +1]
for k, (px, py) in enumerate(outer):
    col = CORAL_ACCENT if outer_spins[k] > 0 else BLUE_ACCENT
    add_oval(slide, px - r_spin, py - r_spin, 2 * r_spin, 2 * r_spin,
             fill=col)
    add_text(slide, px - r_spin, py - r_spin, 2 * r_spin, 2 * r_spin,
             "+" if outer_spins[k] > 0 else "–",
             size=9, bold=True, color=WHITE,
             align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)
# Center node (dashed, ?)
center_r = Inches(0.16)
center_circ = add_oval(slide, cv_cx - center_r, cv_cy - center_r,
                       2 * center_r, 2 * center_r, fill=WHITE,
                       line_color=INK, line_width=1.0)
# Force dashed border
spPr = center_circ._element.spPr
ln = spPr.find(qn('a:ln'))
if ln is None:
    ln = etree.SubElement(spPr, qn('a:ln'))
dash = ln.find(qn('a:prstDash'))
if dash is None:
    dash = etree.SubElement(ln, qn('a:prstDash'))
dash.set('val', 'dash')
add_text(slide, cv_cx - center_r, cv_cy - center_r,
         2 * center_r, 2 * center_r,
         "?", size=11, bold=True, color=INK,
         align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)

# Caption
add_runs(slide, r_sub_x[1] + Inches(0.10),
         R_ROW_TOP + R_ROW_H - Inches(0.22),
         R_SUB_W - Inches(0.20), Inches(0.18),
         [
             {"text": "messages η", "size": 9, "italic": True,
              "color": MUTED},
             {"text": "i→0", "size": 7, "italic": True, "color": MUTED},
             {"text": "  →  BP / AMP", "size": 9, "italic": True,
              "color": MUTED},
         ], align=PP_ALIGN.CENTER)


# ------------------- Bottom phase diagram (right panel) ----------------------

PD_TOP = R_ROW_TOP + R_ROW_H + Inches(0.22)
PD_LEFT = RIGHT_PANEL_X + Inches(0.32)
PD_W = Inches(5.66)
PD_H = Inches(0.95)

add_text(slide, PD_LEFT, PD_TOP - Inches(0.30),
         PD_W, Inches(0.22),
         "PREDICTED PHASE DIAGRAM  ·  P(q) DISTRIBUTIONS",
         size=10, bold=True, color=CORAL_DARK)

# Phase diagram axes
add_rounded_rect(slide, PD_LEFT, PD_TOP, PD_W, PD_H,
                 fill=WHITE, corner=0.10)

# Build phase-diagram subregions inside the white box
# Axes box covers ~ left half
PDA_X = PD_LEFT + Inches(0.30)
PDA_Y = PD_TOP + Inches(0.10)
PDA_W = Inches(2.60)
PDA_H = Inches(0.78)

# Consensus region (left, light blue)
add_rounded_rect(slide, PDA_X, PDA_Y, Inches(1.00), PDA_H,
                 fill=RGBColor(0xDF, 0xE9, 0xF5), corner=0.04)
add_text(slide, PDA_X, PDA_Y + PDA_H / 2 - Inches(0.10),
         Inches(1.00), Inches(0.20),
         "Consensus", size=9, bold=True, color=BLUE_DARK,
         align=PP_ALIGN.CENTER)

# Ferromagnet region (middle, light orange)
add_rounded_rect(slide, PDA_X + Inches(1.00), PDA_Y,
                 Inches(0.80), Inches(0.48),
                 fill=RGBColor(0xFC, 0xE4, 0xC4), corner=0.04)
add_text(slide, PDA_X + Inches(1.00), PDA_Y + Inches(0.18),
         Inches(0.80), Inches(0.20),
         "Ferro", size=9, bold=True, color=CORAL_DARK,
         align=PP_ALIGN.CENTER)

# Glassy region (top right, light coral)
add_rounded_rect(slide, PDA_X + Inches(1.00), PDA_Y + Inches(0.48),
                 Inches(1.60), Inches(0.30),
                 fill=RGBColor(0xF2, 0xC2, 0xC2), corner=0.04)
add_text(slide, PDA_X + Inches(1.00), PDA_Y + Inches(0.50),
         Inches(1.60), Inches(0.20),
         "Glassy / polarized (RSB)", size=8.5, bold=True, color=CORAL_DARK,
         align=PP_ALIGN.CENTER)

# Ferro extension
add_rounded_rect(slide, PDA_X + Inches(1.80), PDA_Y,
                 Inches(0.80), Inches(0.48),
                 fill=RGBColor(0xFC, 0xE4, 0xC4), corner=0.04)
add_text(slide, PDA_X + Inches(1.80), PDA_Y + Inches(0.18),
         Inches(0.80), Inches(0.20),
         "Ferro", size=9, bold=True, color=CORAL_DARK,
         align=PP_ALIGN.CENTER)

# Axis labels
add_runs(slide, PDA_X - Inches(0.05), PDA_Y + PDA_H + Inches(0.02),
         PDA_W, Inches(0.18),
         [{"text": "conformity  β →", "size": 8.5, "italic": True,
           "color": MUTED}], align=PP_ALIGN.CENTER)
add_runs(slide, PDA_X - Inches(0.30), PDA_Y - Inches(0.02),
         Inches(0.28), PDA_H,
         [{"text": "σ_h", "size": 8.5, "italic": True, "color": MUTED}],
         align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)

# P(q) inset on the right of the phase diagram
PQ_X = PD_LEFT + Inches(3.30)
PQ_Y = PD_TOP + Inches(0.10)
PQ_W = Inches(2.20)
PQ_H = Inches(0.78)
add_rounded_rect(slide, PQ_X, PQ_Y, PQ_W, PQ_H,
                 fill=RGBColor(0xFD, 0xFA, 0xF8), corner=0.06)

# Title
add_runs(slide, PQ_X + Inches(0.08), PQ_Y + Inches(0.02),
         PQ_W, Inches(0.18),
         [{"text": "P(q)", "size": 9, "bold": True, "italic": True,
           "color": INK}])

# Three peaks — paramagnet (blue, narrow at q=0),
#                 ferro (orange, at q≈0.55),
#                 glass (coral, broad spread 0.2..0.85)
base_y = PQ_Y + PQ_H - Inches(0.10)

def draw_peak(x_center, height, color, half_width_in=0.07):
    # Triangle peak
    cx = x_center
    bw = Inches(half_width_in)
    h = Inches(height)
    pts = [(cx - bw, base_y), (cx + bw, base_y), (cx, base_y - h)]
    tri = slide.shapes.add_shape(MSO_SHAPE.FREEFORM if False else MSO_SHAPE.OVAL,
                                 cx - bw, base_y - h, 2 * bw, h)
    # Use a flat-bottom oval as a quick fake peak
    tri.fill.solid()
    tri.fill.fore_color.rgb = color
    set_no_line(tri)

# Axis line
add_line(slide, PQ_X + Inches(0.20), base_y,
         PQ_X + PQ_W - Inches(0.10), base_y,
         color=MUTED, width=0.7)
# q tick labels
for tx, txt in [(0.20, "0"), (1.05, "0.5"), (1.95, "1")]:
    add_text(slide, PQ_X + Inches(tx) - Inches(0.10),
             base_y + Inches(0.02),
             Inches(0.30), Inches(0.14),
             txt, size=7, color=MUTED, align=PP_ALIGN.CENTER)

# Paramagnet narrow at 0
draw_peak(PQ_X + Inches(0.30), 0.40, BLUE_ACCENT, half_width_in=0.05)
# Ferro narrow at ~0.55
draw_peak(PQ_X + Inches(1.20), 0.42, ORANGE, half_width_in=0.05)
# Glass: spread (use 3 short peaks)
draw_peak(PQ_X + Inches(0.70), 0.18, CORAL_ACCENT, half_width_in=0.10)
draw_peak(PQ_X + Inches(1.50), 0.20, CORAL_ACCENT, half_width_in=0.10)
draw_peak(PQ_X + Inches(1.80), 0.22, CORAL_ACCENT, half_width_in=0.10)

# Legend for P(q)
add_runs(slide, PQ_X + Inches(0.08), PQ_Y + Inches(0.18),
         PQ_W - Inches(0.10), Inches(0.16),
         [{"text": "consensus ", "size": 7, "bold": True,
           "color": BLUE_DARK},
          {"text": "·  ", "size": 7, "color": MUTED},
          {"text": "ferro ", "size": 7, "bold": True, "color": ORANGE},
          {"text": "·  ", "size": 7, "color": MUTED},
          {"text": "glassy", "size": 7, "bold": True, "color": CORAL_DARK}])


# ------------------------------------ Title strip (above panels) -------------

add_text(slide, Inches(0.28), Inches(0.30),
         Inches(12.80), Inches(0.45),
         "On the Statistical Mechanics of Multi-Agent Interactions",
         size=22, bold=True, color=INK,
         align=PP_ALIGN.CENTER)
add_text(slide, Inches(0.28), Inches(0.78),
         Inches(12.80), Inches(0.30),
         "LLM agents with personas on a social graph  →  "
         "spin-glass mapping  →  replica & cavity analysis  →  "
         "predicted phase diagram of opinion dynamics",
         size=11.5, italic=True, color=MUTED,
         align=PP_ALIGN.CENTER)


# Footer / takeaway strip below the two panels
TAKE_TOP = PANEL_TOP + PANEL_H + Inches(0.18)
add_runs(slide, Inches(0.28), TAKE_TOP, Inches(12.80), Inches(0.35),
         [
             {"text": "Theory side ",   "size": 12, "bold": True,
              "color": BLUE_DARK},
             {"text": "(left): ", "size": 12, "color": INK},
             {"text": "the agent society is a spin glass with quenched "
                      "personas and signed ties.   ",
              "size": 12, "color": INK},
             {"text": "Empirical side ", "size": 12, "bold": True,
              "color": CORAL_DARK},
             {"text": "(right): ", "size": 12, "color": INK},
             {"text": "replica & cavity calculations predict consensus, "
                      "polarization, and glassy multi-cluster opinion phases.",
              "size": 12, "color": INK},
         ], align=PP_ALIGN.CENTER)

# ============================================================== save ========

out_path = "/Users/batuel/Documents/Projects/home/assets/blog/004_statmech/figures/statmech_multiagent_teaser.pptx"
prs.save(out_path)
print("Saved:", out_path)
