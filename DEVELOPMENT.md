# 👨‍💻 Lumen Developer Guide

Welcome to the Lumen client codebase! This guide is for contributors and developers working on the mobile app.

---

## 🚀 Getting Started

```bash
git clone https://github.com/yourname/lumen-client
cd lumen-client
npm install
cp .env.example .env
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
LUMEN_DEVICE_IP=192.168.0.105:5555
```

### Emulator

Start your emulator (AVD) and run:

```bash
npm run dev:connect
```

---

## 🛠 Full Build + Install Workflows

| Script                  | Description                                  |
|-------------------------|----------------------------------------------|
| `dev:device`            | Build + install APK on real device           |
| `dev:emulator`          | Build + install APK on emulator              |
| `prebuild`              | Clean + regenerate native folders            |
| `prebuild:device`       | Prebuild + install to real device            |
| `prebuild:emulator`     | Prebuild + install to emulator               |

---

## 📁 Environment Config

`.env`:

```env
LUMEN_DEVICE_IP=192.168.0.105:5555
```

`.env.example` is provided for reference.

---

## 🧼 Before You Commit

- Use `npm run lint` to check code quality
- Ensure you’ve tested on at least **one platform** (web or device)
- Follow token-based theming patterns and use semantic class names

---

## ❤️ Thank You

Thanks for contributing to Lumen — where truth, clarity, and code meet.
