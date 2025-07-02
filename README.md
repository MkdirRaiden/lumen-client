# 🌟 Lumen: Explore Truth Without Bias

Lumen is a truth-based religious exploration app that empowers users to critically and spiritually explore religious quotes, founders, key concepts, scientific facts, and myths — all without bias. Think. Question. Discover. Powered by Lumen AI.

---

## ✨ Features

- 🧠 Explore religious teachings critically
- 📜 Learn from historical + mythical figures
- 🧪 See scientific facts alongside belief systems
- ⚡ Powered by Expo Router, NativeWind, Lottie, and Custom Dev Client
- 📲 Optimized for both emulator and physical device workflows

---

## 🧪 Local Development

```bash
git clone https://github.com/MkdirRaiden/lumen-client.git
cd lumen-client
npm install
npx expo start
```

To test on web:

```bash
npm run web
```

📘 See the full [Developer Guide → DEVELOPMENT.md](./DEVELOPMENT.md)

> ⚠️ Requires `Node.js 18+`, `Expo CLI`, and Android/iOS/Web environment

---

## 📁 Scripts & CLI Tools

| Script               | Description                              |
| -------------------- | ---------------------------------------- |
| `dev:connect`        | Start dev client for emulator            |
| `dev:connect:device` | Connect to physical device via ADB + run |
| `dev:emulator`       | Build + install APK on emulator          |
| `dev:device`         | Build + install APK on real device       |
| `prebuild`           | Clean + regenerate native folders        |
| `prebuild:device`    | Prebuild + install to real device        |
| `prebuild:emulator`  | Prebuild + install to emulator           |

---

## 📂 Environment Config

Create a `.env` file at the root:

```bash
cp .env.example .env
```

You’ll need:

```env
LUMEN_DEVICE_IP=<your device>
```

---

## 🤝 Contributing

Please read the [Code of Conduct](./CODE_OF_CONDUCT.md) before contributing.  
Open a pull request or issue and we'll get back to you.

---

## 🧠 Philosophy

> Truth doesn't fear scrutiny.  
> With Lumen, you don't just follow — you understand.

---

## 📜 License

MIT
