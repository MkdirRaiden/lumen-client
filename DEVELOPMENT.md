# 👨‍💻 Lumen Developer Guide

Welcome to the Lumen client codebase! This guide is for contributors and developers working on the mobile app.

---

## 🚀 Getting Started

```bash
git https://github.com/MkdirRaiden/lumen-client.git
cd lumen-client
npm install
```

Requires:

- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (for emulator)
- Physical Android device (if using real-device scripts)

---

## 🧪 Basic Development (Expo Go)

For standard UI/UX development using Expo Go:

```bash
npx expo start
```

Run this and scan the QR code with the Expo Go app on your device.

---

## 📲 Custom Dev Client Workflows

For deeper development and native module testing, use Expo Dev Client.

### Real Device (Wi-Fi)

```bash
npm run dev:connect:device
```

Make sure your `.env` has your device IP:

```env
LUMEN_DEVICE_IP=<your device IP>
```

### Emulator

Start your emulator (AVD) and run:

```bash
npm run dev:connect
```

---

## 🛠 Full Build + Install Workflows

| Script         | Description                            |
| -------------- | -------------------------------------- |
| `dev:connect`  | Connecting to custom dev-client        |
| `dev:install`  | Build + install APK on device/emulator |
| `dev:prebuild` | Clean + regenerate native folders      |

---

## 📁 Environment Config

`.env`:

```env
LUMEN_DEVICE_IP=<your device IP>
ANDROID_SDK_ROOT=<Your android SDK ROOT path>
LUMEN_PACKAGE_NAME=<lumen package name if any>
```

---

## 🧼 Before You Commit

- Use `npm run lint` to check code quality
- Ensure you’ve tested on at least **one platform** (web or device)
- Follow token-based theming patterns and use semantic class names

---

## ❤️ Thank You

Thanks for contributing to Lumen's Ark — where truth, clarity, and code meet.
