# eyebreak

CLI that sends a macOS notification every 30 minutes reminding you to look out the window.

## Setup

```bash
npm install
```

## Usage

```bash
node bin/eyebreak.js
```

Custom interval (in minutes):

```bash
node bin/eyebreak.js --interval 15
```

Install globally:

```bash
npm link
eyebreak
```

`Ctrl+C` to stop.

## Troubleshooting

If you see the log messages in the terminal but no notification appears, check that notifications are enabled for the app in **System Settings → Notifications**. Make sure the terminal or Node.js is allowed to send notifications.
