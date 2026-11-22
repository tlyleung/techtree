export const SITE = {
  title: "Technology Tree",
  description: "A tech tree of real human history in the style of the Civilization games, continued into the future.",
  repo: "https://github.com/tlyleung/techtree",
};

/** Site-relative URL that respects Astro's `base`. */
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

export const editUrl = (id: string) => `${SITE.repo}/edit/main/src/content/tech/${id}.md`;

/** SVG path for an orthogonal route with rounded corners. */
export function roundedPath(points: { x: number; y: number }[], radius = 8): string {
  if (points.length < 2) return "";
  let d = `M${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length - 1; i++) {
    const [a, b, c] = [points[i - 1], points[i], points[i + 1]];
    const r = Math.min(radius, Math.hypot(b.x - a.x, b.y - a.y) / 2, Math.hypot(c.x - b.x, c.y - b.y) / 2);
    const toward = (p: { x: number; y: number }, q: { x: number; y: number }, dist: number) => {
      const len = Math.hypot(q.x - p.x, q.y - p.y) || 1;
      return { x: p.x + ((q.x - p.x) / len) * dist, y: p.y + ((q.y - p.y) / len) * dist };
    };
    const p1 = toward(b, a, r), p2 = toward(b, c, r);
    d += ` L${p1.x},${p1.y} Q${b.x},${b.y} ${p2.x},${p2.y}`;
  }
  const last = points[points.length - 1];
  return d + ` L${last.x},${last.y}`;
}
