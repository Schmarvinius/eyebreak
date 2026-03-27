#!/usr/bin/env node

const { sendNotification } = require("../lib/notify");

const args = process.argv.slice(2);
const intervalIndex = args.indexOf("--interval");
const minutes =
  intervalIndex !== -1 && args[intervalIndex + 1]
    ? Number(args[intervalIndex + 1])
    : 30;

if (isNaN(minutes) || minutes <= 0) {
  console.error("Error: --interval must be a positive number (minutes).");
  process.exit(1);
}

console.log(
  `eyebreak running — reminding you every ${minutes}m. Press Ctrl+C to stop.`
);

sendNotification();

const timer = setInterval(sendNotification, minutes * 60 * 1000);

process.on("SIGINT", () => {
  clearInterval(timer);
  console.log("\nBye! Remember to look outside on your own now.");
  process.exit(0);
});
