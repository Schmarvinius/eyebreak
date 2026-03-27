const notifier = require("node-notifier");

function sendNotification() {
  const timestamp = new Date().toISOString();
  notifier.notify({
    title: "eyebreak",
    message: "Time to look out the window!",
    sound: true,
  });
  console.log(`[${timestamp}] Notification sent: "Time to look out the window!"`);
}

module.exports = { sendNotification };
