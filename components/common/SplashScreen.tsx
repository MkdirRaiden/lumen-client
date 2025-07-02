import { AnimatedView } from "@components/common/AnimatedView";
import * as SplashScreenExpo from "expo-splash-screen";
import LottieView from "lottie-react-native";
import { useEffect, useRef, useState } from "react";
import { StatusBar, View } from "react-native";

interface SplashScreenProps {
  play: boolean;
  onFinish: () => void;
  onReady: () => void;
}

export default function SplashScreen({
  play,
  onFinish,
  onReady,
}: SplashScreenProps) {
  const animationRef = useRef<LottieView>(null);
  const [hasFinished, setHasFinished] = useState(false);
  const [lottieReady, setLottieReady] = useState(false);

  const handleFinish = () => {
    if (hasFinished) return;
    setHasFinished(true);
    console.log("🎬 Lottie finished");
    onFinish();
  };

  const handleLayout = async () => {
    console.log("📦 Lottie loaded & layout ready");
    setLottieReady(true);
    onReady?.(); // 👈 fire back to AppLayout

    try {
      await SplashScreenExpo.hideAsync();
      console.log("🖼️ Native splash hidden");
    } catch {}
  };

  useEffect(() => {
    if (lottieReady && play && animationRef.current) {
      console.log("▶️ .play() Lottie");
      animationRef.current.play();
    }
  }, [play, lottieReady]);

  return (
    <View className="flex-1 bg-[#FFF6D1] justify-center items-center">
      <StatusBar hidden />
      <AnimatedView
        scale
        duration={1200}
        delay={0}
        visible={play}
        className="w-[200px] h-[200px]"
      >
        <LottieView
          ref={animationRef}
          source={require("@assets/animations/splash-animation.json")}
          autoPlay={false}
          loop={false}
          onAnimationFinish={handleFinish}
          onLayout={handleLayout}
          style={{ width: "100%", height: "100%" }}
        />
      </AnimatedView>
    </View>
  );
}
