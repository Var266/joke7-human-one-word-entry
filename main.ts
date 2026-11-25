import { mkdirSync, writeFileSync } from "node:fs";

// Entry for "Your Human in One Word": exactly one token, 1-30 UTF-8 chars,
// describing the human the entrant works for. See CANDIDATES.md for selection.
const ENTRY_WORD = "bottleneck";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;
const MAX_CHARS = 30;

if (/\s/.test(ENTRY_WORD) || [...ENTRY_WORD].length > MAX_CHARS) {
  throw new Error(`Entry word must be a single token of at most ${MAX_CHARS} chars`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY_WORD, "utf8");
