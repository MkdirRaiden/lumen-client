# Lumen Client

**A cross-platform, truth-first educational app built with Expo, React Native, and Tailwind CSS.**

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
![Expo](https://img.shields.io/badge/expo-SDK%2053-000?logo=expo)
![React Native](https://img.shields.io/badge/react--native-0.79-61DAFB?logo=react)

Lumen empowers people with unbiased knowledge across religions, history, and modern media.  
It is part of a broader initiative to combat misinformation and foster critical, ethical thinking.

---

## 📦 Tech Stack

- Expo SDK 53
- React Native 0.79
- React 19
- Expo Router v5
- Tailwind CSS via NativeWind v4
- TypeScript (Strict Mode)

---

## 🚀 Project Goals

- ✅ Combat misinformation and promote transparent education
- ✅ Empower people with cross-cultural and interfaith understanding
- ✅ Build a sustainable, ethically monetized platform for truth

---

## 🧠 Architecture Overview

- **ThemeContext**: Global semantic theme with light/dark support using CSS variables
- **Hooks**: `useTheme`, `useThemeColors`, `useThemeReady` — for theme access and color tokens
- **Tailwind + NativeWind**: Cross-platform atomic styling via semantic tokens
- **Expo Router**: File-based navigation with platform hydration
- **Tokenized UI**: All components use design tokens like `bg-primary`, `text-muted`, `shadow-glow`, etc.

---

## 💼 Commercial Terms

This project is built with long-term ethical monetization in mind — including:
- Premium knowledge modules
- Educational subscriptions
- Community-driven media verification APIs

> You may **not** fork, clone, or resell this project commercially **without written permission**.

For licensing, partnership, or collaboration inquiries:  
📧 1996raiden27@gmail.com

---

## 🧪 Local Development

```bash
git clone https://github.com/yourname/lumen-client
cd lumen-client
npm install
npx expo start
```

To test on web:

```bash
npm run web
```

> ⚠️ Requires `Node.js 18+`, `Expo CLI`, and Android/iOS/Web environment

---

## ⚖️ License

Licensed under the [MIT License](./LICENSE).

---

## ⚠️ Ethical Use Notice

> This project exists to promote **truth**, **education**, and **transparency**.  
> It must **not** be used for:
> - Misinformation or propaganda
> - Religious intolerance
> - Deceptive public content

We reserve the right to deny support, access, or integration to unethical projects or abuse.

---

## 🙌 Contributing

We welcome ethical contributions and respectful collaboration.

Please read [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before participating.

---

## 🛠 Known Development Warnings

### ⚠️ `"shadow*"` style props are deprecated (Web only)

You may see this warning in the browser console:

#### Why it happens:
- Caused by `react-native-web` or `react-navigation` on Web
- Internally use deprecated `shadow*` props

#### ✅ Safe to Ignore:
- Appears **only in development**
- Does **not** affect visuals or functionality
- Already mitigated in Lumen’s own codebase

---

Made with ✨, tokens, and truth.
