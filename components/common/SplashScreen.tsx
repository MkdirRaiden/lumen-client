import { AnimatedView } from "@components/common/AnimatedView";
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
  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(false);

  const handleFinish = () => {
    if (done) return;
    setDone(true);
    onFinish();
  };

  const handleLayout = () => {
    setReady(true);
    onReady();
  };

  useEffect(() => {
    if (ready && play && animationRef.current) {
      animationRef.current.play();
    }
  }, [play, ready]);

  return (
    <View className="flex-1 bg-[#FFF6D1] justify-center items-center">
      <StatusBar hidden />
      <AnimatedView
        scale
        visible={play}
        duration={1200}
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
