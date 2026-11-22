#!/usr/bin/env python3
"""Compare data/history-tree.json with the game trees it was merged from.

Prints, for sign-off:
  - each game technology and what it became (kept, renamed, merged, dropped)
  - links in the merged tree that no game has (new)
  - game links between kept technologies that the merged tree leaves out

Game names are mapped through data/merge-synonyms.yaml.

Usage: python3 scripts/merge_report.py
"""
import json
from collections import defaultdict

import yaml

SOURCES = [
    ("Brave New World", "data/civs/civ5-brave-new-world.json"),
    ("Civ VI technology", "data/civs/civ6-technology.json"),
    ("Civ VI civics", "data/civs/civ6-civics.json"),
]


def main():
    syn = yaml.safe_load(open("data/merge-synonyms.yaml")) or {}
    tree = json.load(open("data/history-tree.json"))
    merged = {n["name"] for n in tree["nodes"]}
    ours = {(l["source"], l["target"]) for l in tree["links"]}

    game_links = defaultdict(set)  # merged link -> games
    fate = defaultdict(lambda: defaultdict(list))  # game -> fate -> names
    for game, path in SOURCES:
        d = json.load(open(path))
        for n in d["nodes"]:
            name = n["name"]
            to = syn.get(name, name)
            if to not in merged:
                fate[game]["dropped"].append(name)
            elif to != name:
                fate[game]["merged or renamed"].append(f"{name} → {to}")
            else:
                fate[game]["kept"].append(name)
        for l in d["links"]:
            s, t = syn.get(l["source"], l["source"]), syn.get(l["target"], l["target"])
            if s in merged and t in merged and s != t:
                game_links[(s, t)].add(game)

    print(f"# Merge report: {len(merged)} technologies, {len(ours)} links\n")
    for game, _ in SOURCES:
        print(f"## {game}\n")
        for k in ("kept", "merged or renamed", "dropped"):
            names = fate[game][k]
            print(f"- **{k}** ({len(names)}): {', '.join(names) or '—'}")
        print()

    new = sorted(ours - set(game_links))
    print(f"## Links no game has ({len(new)})\n")
    for s, t in new:
        print(f"- {s} → {t}")
    print()

    left = sorted(set(game_links) - ours)
    print(f"## Game links left out ({len(left)})\n")
    for s, t in left:
        print(f"- {s} → {t} ({', '.join(sorted(game_links[(s, t)]))})")
    print()

    added = sorted(merged - {syn.get(n, n) for _, p in SOURCES for n in (x["name"] for x in json.load(open(p))["nodes"])})
    if added:
        print(f"## Technologies no game has ({len(added)})\n")
        print(", ".join(added))


if __name__ == "__main__":
    main()
