const notifier = require("node-notifier");

function sendNotification() {
  notifier.notify({
    title: "eyebreak",
    message: "Time to look out the window!",
    sound: true,
  });
}

module.exports = { sendNotification };
