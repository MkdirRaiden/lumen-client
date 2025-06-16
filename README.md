# Lumen Client

**A cross-platform, truth-first educational app built with Expo, React Native, and Tailwind CSS.**

Lumen empowers people with unbiased knowledge across religions, history, and modern media.  
It is part of a broader initiative to combat misinformation and foster critical, ethical thinking.

## 📦 Tech Stack

- Expo SDK 53
- React Native 0.79
- React 19
- Expo Router v5
- Tailwind CSS via NativeWind v4
- TypeScript

## 🚀 Project Goals

- Combat misinformation and promote transparent education
- Empower people with cross-cultural and interfaith understanding
- Build a sustainable, ethically monetized platform for truth

## 💰 Commercial Use

This project is developed with long-term monetization in mind — including premium modules, educational subscriptions, and media verification tools.  
**Please do not resell or repackage without permission.**

For licensing, commercial partnerships, or integration inquiries:  
📧 1996raiden27@gmail.com

## ⚖️ License

Licensed under the [MIT License](./LICENSE).

## ⚠️ Ethical Use Notice

> This project exists to promote truth, education, and transparency.  
> It must **not** be used for manipulative, harmful, or deceptive purposes — especially in relation to misinformation, religious intolerance, or abuse of public knowledge.  
> We reserve the right to deny support or integration to unethical projects.

## 🙌 Contributing

We welcome ethical contributions and respectful collaboration.

See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before participating.

---

## 🛠 Known Development Warnings

### ⚠️ `"shadow*"` style props are deprecated (Web only)

You may see this harmless warning in your browser console during development:

#### Why it happens:

This warning is emitted by `react-native-web` or `react-navigation` when rendering headers or views on Web. These libraries internally use deprecated `shadow*` props.

#### ✅ Safe to Ignore:

- Appears only during **development**
- Does **not** show in production
- Does **not** affect styles or behavior
- Cannot currently be fully suppressed due to how React Native Web logs deep lifecycle warnings

We’ve already:

- Replaced all `shadow-*` usage in our own code
- Tried `LogBox.ignoreLogs()` and manual `console.error` patching

If you contribute, **please ignore this warning — it has no effect**.
