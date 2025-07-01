import { AnimatedView } from "@components/common/AnimatedView";
import { useStaggeredAnimations } from "@lib/hooks/animation";
import React from "react";
import { View } from "react-native";

export default function TypingDots() {
  const { animations: dots } = useStaggeredAnimations(3, {
    loop: true,
    delay: 150,
    loopDuration: 700,
  });

  return (
    <View
      style={{ flexDirection: "row", justifyContent: "center", marginTop: 16 }}
    >
      {dots.map((opacity, i) => (
        <AnimatedView
          key={i}
          fadeValue={opacity} // pass external opacity animated value here
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: "#ccc",
            marginHorizontal: 4,
          }}
        >
          {null}
        </AnimatedView>
      ))}
    </View>
  );
}
