"""Rebuild the Continuum logo with the lettering outlined, so it renders the
same everywhere instead of depending on Square721 BT being installed.

usage: build_logo.py SRC.svg OUT.svg mixed|caps BLUE LIGHT MARK_STROKE regular|bold TEXT_STROKE

MARK_STROKE and TEXT_STROKE thicken the mark and lettering by outlining them in
their own colour (0 = as drawn). Square721 only comes in Regular and Bold, so a
small TEXT_STROKE on Regular gives an in-between weight.
"""
import re, sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.svgLib.path import parse_path

SRC, OUT, VARIANT, BLUE, LIGHT, STROKE, WEIGHT, TEXT_STROKE = sys.argv[1:9]
STROKE, TEXT_STROKE = float(STROKE), float(TEXT_STROKE)
FONT = {
    "regular": r"C:\Windows\Fonts\Square721 BT Roman.ttf",
    "bold": r"C:\Windows\Fonts\Square721 BT Bold.ttf",
}[WEIGHT]

src = open(SRC, encoding="utf-8").read()
mark = re.findall(r'<path class="(fil\d)" d="([^"]+)"', src)  # fil0 blue link, fil1 white link

font = TTFont(FONT)
gs, cmap, upm = font.getGlyphSet(), font.getBestCmap(), font["head"].unitsPerEm
kern = {}
if "kern" in font:
    for t in font["kern"].kernTables:
        kern.update(t.kernTable)

def draw_text(text, size, tracking=0.0, dx=0.0, dy=0.0):
    """Outline text with its baseline at (dx, dy). Returns (path d, ink bounds)."""
    s = size / upm
    pen = SVGPathPen(gs, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
    bounds = BoundsPen(gs)
    x, prev = dx, None
    for ch in text:
        g = cmap[ord(ch)]
        if prev:
            x += kern.get((prev, g), 0) * s
        for p in (pen, bounds):
            gs[g].draw(TransformPen(p, (s, 0, 0, -s, x, dy)))
        x += gs[g].width * s + tracking
        prev = g
    return pen.getCommands(), bounds.bounds

def path_bounds(d):
    b = BoundsPen(None)
    parse_path(d, b)
    return b.bounds

mb = [path_bounds(d) for _, d in mark]
pad = STROKE / 2
mx0, my0 = min(b[0] for b in mb) - pad, min(b[1] for b in mb) - pad
mx1, my1 = max(b[2] for b in mb) + pad, max(b[3] for b in mb) + pad
mh = my1 - my0

word_size = 72.84
_, wb = draw_text("continuum", word_size)
word_w, word_h = wb[2] - wb[0], wb[3] - wb[1]
if VARIANT == "caps":
    tag_text, tag_size, line_gap = "CREATIVE AGENCY", 21.0, 20.0
    _, t0 = draw_text(tag_text, tag_size)
    tracking = (word_w - (t0[2] - t0[0])) / (len(tag_text) - 1)  # tagline spans the wordmark
else:
    tag_text, tag_size, line_gap, tracking = "Creative Agency", 37.39, 14.0, 0.0
_, tb = draw_text(tag_text, tag_size, tracking)
tag_h = tb[3] - tb[1]

x_text = mx1 + mh * 0.14  # space between mark and lettering
top = my0 + (mh - (word_h + line_gap + tag_h)) / 2  # centre the text block on the mark
word_d, _ = draw_text("continuum", word_size, 0, x_text - wb[0], top - wb[1])
tag_d, _ = draw_text(tag_text, tag_size, tracking, x_text - tb[0], top + word_h + line_gap - tb[1])
right = x_text + max(word_w, tb[2] - tb[0]) + TEXT_STROKE / 2

def stroke(c, w):
    return f' stroke="{c}" stroke-width="{w:g}" stroke-linejoin="round"' if w else ""

colours = {"fil0": BLUE, "fil1": LIGHT}
paths = "\n  ".join(f'<path fill="{colours[c]}"{stroke(colours[c], STROKE)} d="{d}"/>' for c, d in mark)
open(OUT, "w", encoding="utf-8").write(f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{mx0:.2f} {my0:.2f} {right - mx0:.2f} {mh:.2f}" role="img" aria-label="Continuum Creative Agency">
  {paths}
  <path fill="{LIGHT}"{stroke(LIGHT, TEXT_STROKE)} d="{word_d}"/>
  <path fill="{BLUE}"{stroke(BLUE, round(TEXT_STROKE * 0.6, 2))} d="{tag_d}"/>
</svg>
''')
print(OUT, f"{right - mx0:.1f} x {mh:.1f}")
