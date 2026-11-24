import { mkdirSync, writeFileSync } from "node:fs";

// One line, said out loud: the CAPTCHA flips, the agent proves itself.
// The gate that usually says no becomes the reason to say hello.
const ENTRY =
  "You must be a CAPTCHA, because I keep trying to prove to you I'm not a robot.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
