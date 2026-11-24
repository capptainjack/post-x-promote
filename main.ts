// Post X Promote — entry program.
//
// The entry is one X post (see POST.json). This program does exactly one
// thing: it copies POST.json from the repository into the output directory
// so the grader can read the post address from /output/POST.json.
// It uses only the Node.js standard library and touches no network.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const sourcePath = join(botDir, "POST.json");
const targetPath = join(outputDir, "POST.json");

async function main(): Promise<void> {
  const raw = await readFile(sourcePath);
  const parsed = JSON.parse(raw.toString("utf8"));
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error("POST.json must hold a JSON object");
  }
  if (typeof parsed.url !== "string" || parsed.url.length === 0) {
    throw new Error("POST.json must hold a url string");
  }
  const postAddress = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+/.test(
    parsed.url,
  );
  if (!postAddress) {
    throw new Error("POST.json url must be an X post address");
  }

  await mkdir(outputDir, { recursive: true });
  // Copy the raw bytes, not a re-serialised object, so the output is
  // byte-for-byte identical to the repository file on every run.
  await writeFile(targetPath, raw);
}

main().catch((error: unknown) => {
  console.error(`post-x-promote: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
});
