#!/usr/bin/env python3
"""Check data/history-tree.json against the layout rules in PLAN.md.

Lays the tree out in columns (era bands, depth-layered inside each band,
then nodes are shifted within their slack to shorten long links) and
reports every rule that fails. Exits 1 if any rule fails.

Usage: python3 scripts/lint_history.py [path] [--grid]
"""
import json
import sys
from collections import defaultdict

MAX_PER_COLUMN = 8
MAX_SPAN = 2  # a link may skip at most one column


def load(path):
    d = json.load(open(path))
    names = [n["name"] for n in d["nodes"]]
    node = {n["name"]: n for n in d["nodes"]}
    eras = [g["name"] for g in d["groups"]]
    pre, post = defaultdict(list), defaultdict(list)
    errors = []
    if len(set(names)) != len(names):
        errors.append("duplicate node names")
    for l in d["links"]:
        s, t = l["source"], l["target"]
        if s not in node or t not in node:
            errors.append(f"link to unknown node: {s} -> {t}")
            continue
        pre[t].append(s)
        post[s].append(t)
    return names, node, eras, pre, post, errors


def topo(names, pre):
    order, state = [], {}

    def visit(n, stack):
        if state.get(n) == 2:
            return
        if state.get(n) == 1:
            raise ValueError("cycle: " + " -> ".join(stack + [n]))
        state[n] = 1
        for p in pre[n]:
            visit(p, stack + [n])
        state[n] = 2
        order.append(n)

    for n in names:
        visit(n, [])
    return order


def solve(nodes, eras, era_of, links, fixed=()):
    """Assign columns with difference constraints (Bellman-Ford).

    Each link spans 1..MAX_SPAN columns, each era is a contiguous block of
    columns, and `fixed` pins (node, column) pairs. Returns (columns, None)
    or (None, the links on a contradictory cycle).
    """
    Z = ("Z",)
    S = [("S", i) for i in range(len(eras) + 1)]
    edges = []  # (u, v, w, why): x_v - x_u <= w

    def le(v, u, w, why=None):
        edges.append((u, v, w, why))

    le(S[0], Z, 0)
    le(Z, S[0], 0)
    for i in range(len(eras)):
        le(S[i], S[i + 1], -1)
    for n in nodes:
        i = eras.index(era_of[n])
        le(S[i], n, 0)
        le(n, S[i + 1], -1)
    for s, t in links:
        le(t, s, MAX_SPAN, (s, t))
        le(s, t, -1, (s, t))
    for n, c in fixed:
        le(n, Z, c)
        le(Z, n, -c)
    verts = [Z] + S + list(nodes)
    dist = {v: 0 for v in verts}
    pred = {}
    for _ in range(len(verts)):
        changed = None
        for u, v, w, why in edges:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                pred[v] = (u, why)
                changed = v
        if changed is None:
            base = dist[Z]
            return {n: dist[n] - base for n in nodes}, None
    v = changed
    for _ in range(len(verts)):
        v = pred[v][0]
    cycle, u = [], v
    while True:
        u, why = pred[u]
        if why:
            cycle.append(why)
        if u == v:
            break
    return None, cycle


def layout(names, node, eras, pre, post, order):
    """Return (columns, links that can't meet the span limit)."""
    era_of = {n: node[n]["era"] for n in names}
    links = [(s, t) for t in names for s in pre[t]]
    broken = []
    while True:
        col, cycle = solve(names, eras, era_of, [l for l in links if l not in broken])
        if col is not None:
            break
        # Prefer a link whose removal resolves everything; otherwise drop the
        # link on the contradiction that spans the most years.
        rest = [l for l in links if l not in broken]
        fixes = [l for l in cycle
                 if solve(names, eras, era_of, [m for m in rest if m != l])[0] is not None]
        worst = max(fixes or cycle, key=lambda l: node[l[1]]["year"] - node[l[0]]["year"])
        broken.append(worst)
    # Width: pin nodes from overfull columns elsewhere while that lowers the
    # total overflow and the other constraints still hold.
    ok = [l for l in links if l not in broken]

    def overflow(c):
        # Overflow first; the sum of squares breaks ties so that nodes can
        # move out of full columns to make room for a later move.
        count = defaultdict(int)
        for n in names:
            count[c[n]] += 1
        return (sum(max(0, k - MAX_PER_COLUMN) for k in count.values()),
                sum(k * k for k in count.values()))

    fixed = []
    for _ in range(len(names)):
        cur = overflow(col)
        if cur[0] == 0:
            break
        count = defaultdict(int)
        for n in names:
            count[col[n]] += 1
        best = None
        for n in names:
            if count[col[n]] < MAX_PER_COLUMN:
                continue
            for d in (1, -1, 2, -2, 3, -3):
                trial, _ = solve(names, eras, era_of, ok, fixed + [(n, col[n] + d)])
                if trial is not None and overflow(trial) < cur:
                    best = (overflow(trial), trial, (n, col[n] + d))
                    break
            if best:
                break
        if not best:
            break
        _, col, pin = best
        fixed.append(pin)
    return col, broken


def redundant(names, pre):
    anc = {}

    def ancestors(n):
        if n not in anc:
            a = set()
            for p in pre[n]:
                a |= {p} | ancestors(p)
            anc[n] = a
        return anc[n]

    out = []
    for t in names:
        for s in pre[t]:
            if any(s in ancestors(p) for p in pre[t] if p != s):
                out.append((s, t))
    return out


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    path = args[0] if args else "data/history-tree.json"
    names, node, eras, pre, post, errors = load(path)
    warnings = []
    for n in names:
        if node[n]["era"] not in eras:
            errors.append(f"{n}: unknown era {node[n]['era']}")
    try:
        order = topo(names, pre)
    except ValueError as e:
        print("FAIL", e)
        return 1
    for t in names:
        for s in pre[t]:
            if eras.index(node[s]["era"]) > eras.index(node[t]["era"]):
                errors.append(f"era goes backwards: {s} ({node[s]['era']}) -> {t} ({node[t]['era']})")
            if node[s]["year"] > node[t]["year"]:
                warnings.append(f"date conflict: {s} ({node[s]['year']}) -> {t} ({node[t]['year']})")
    for s, t in redundant(names, pre):
        errors.append(f"redundant link: {s} -> {t}")
    col, broken = layout(names, node, eras, pre, post, order)
    per = defaultdict(list)
    for n in names:
        per[col[n]].append(n)
    for c, ns in sorted(per.items()):
        if len(ns) > MAX_PER_COLUMN:
            errors.append(f"column {c} has {len(ns)} nodes (max {MAX_PER_COLUMN}): {', '.join(ns)}")
    for t in names:
        for s in pre[t]:
            span = col[t] - col[s]
            if span < 1:
                errors.append(f"link not rightward: {s} -> {t}")
            elif span > MAX_SPAN:
                errors.append(f"link can't fit (skips {span - 1} columns): {s} -> {t}")
    if "--grid" in sys.argv:
        for c, ns in sorted(per.items()):
            print(f"{c:2} {node[ns[0]]['era']:<12} {len(ns)}  {', '.join(ns)}")
        print()
    for w in warnings:
        print("WARN", w)
    for e in errors:
        print("FAIL", e)
    print(f"{len(names)} nodes, {sum(len(v) for v in pre.values())} links, "
          f"{max(col.values()) + 1} columns, widest column {max(len(v) for v in per.values())}: "
          f"{len(errors)} failures, {len(warnings)} warnings")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
