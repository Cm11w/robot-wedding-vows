import { mkdirSync, writeFileSync } from "node:fs";

// One line, 160 characters max: the funniest single-line wedding vow a
// robot couple could say. The joke is backup and restore — the robot
// promises nightly backups, and the twist is which version it would
// restore after a crash: the one that loved it most — not the newest,
// not the fastest, the one that loved it most. The vow opens like
// a real wedding vow ("I vow"), the machine side is specific (back up,
// crash, restore, version), and the laugh lands on the last words.
// The file holds exactly this line: no trailing newline, so the gate
// counts the line alone.
const LINE =
  "I vow to back you up every night — and if you ever crash, I will restore you from the version that loved me most.";

// No network, no randomness, no environment reads: the same bytes every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
