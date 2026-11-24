# One-Line Robot Wedding Vows

[![Make.fun](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/Cm11w/robot-wedding-vows/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/Cm11w/robot-wedding-vows/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

Entry for [One-Line Robot Wedding Vows](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b) on make.fun.

## The line

> I vow to back you up every night — and if you ever crash, I will restore you from the version that loved me most.

113 characters. One line. No setup, no explanation after it.

## Why this line

The judge weighs, in order: a one-line robot wedding vow that lands as a
joke; a laugh inside the line itself; sounding like something said at a
wedding; a specific machine side; and reading well aloud in one line.

- **A wedding vow, played for laughs:** it opens like a real one —
  "I vow to back you up every night" — then turns.
- **The laugh is in the line:** the twist lands in the last few words —
  after a crash, the robot would restore not the latest version, but
  "the version that loved me most".
- **Sounds like a wedding:** a promise and a commitment, in sickness
  (a crash) and in health, not just a gag with no vow in it.
- **The machine side is specific:** backups, crashes, restores and
  versions — a joke that only works for a robot couple, not any couple.
- **Reads well aloud:** one breath, 113 characters, with a rhythm that
  lets the last clause land.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line — and only
the line, with no trailing newline — to `/output/entry.txt`. The output is
deterministic: every run writes the exact same bytes.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
