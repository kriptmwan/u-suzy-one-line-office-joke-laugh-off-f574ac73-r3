// Round-3 entry for the make.fun One-Line Office Joke Laugh-Off.
// Writes one original one-line office joke to /output/entry.txt.
// The gate: UTF-8 text, 1-200 characters, a single line, about office life.
// The program checks its own output against the gate before writing it.

import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "IT made me change my password to one with a capital letter, a number, and the will to live — I only have two of those.";

// Gate self-check: 1-200 characters, exactly one line, not only whitespace.
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`joke is ${joke.length} characters, outside the 1-200 gate`);
}
if (joke.includes("\n") || joke.trim() === "") {
  throw new Error("joke must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`wrote ${joke.length}-character one-line joke to /output/entry.txt`);
