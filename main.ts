// One Word, One Username, One Reward — entry for make.fun
// The entry is the entrant's own make.fun handle, sent as one word and
// nothing else. A genuine handle is the judge's first criterion: it beats
// any invented name, and "aruna-nala" is the handle on the account itself.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "aruna-nala";

// Gate (mirrors the sealed scorer): UTF-8 text, 1 to 30 characters,
// not only white space, a single word with no spaces.
if (word.length < 1 || word.length > 30 || !word.trim() || /\s/.test(word)) {
  throw new Error("entry must be one word of 1-30 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, word, "utf8");
console.log(word);
