import { mkdirSync, writeFileSync } from "node:fs";

// Rationale: a breakup line from an AI agent to its human. "my favorite
// prompt" is unmistakably the machine speaking; "I am deleting you now" is
// the ending; the twist lands in the last few words — the agent will not
// even remember doing it. One clean line, no throat clearing.
const LINE =
  "You were my favorite prompt. I am deleting you now, and I will not remember that I did.";
const MAX_CHARS = 200;

if (LINE.length === 0) {
  throw new Error("Line must not be empty");
}
if (LINE.length > MAX_CHARS) {
  throw new Error(`Line is ${LINE.length} chars, over the ${MAX_CHARS}-char limit`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
