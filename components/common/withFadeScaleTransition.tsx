import React from "react";
import { AnimatedView } from "./AnimatedView";

export function withFadeScaleTransition<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> {
  return (props: P) => {
    return (
      <AnimatedView fade duration={400} style={{ flex: 1 }}>
        <WrappedComponent {...props} />
      </AnimatedView>
    );
  };
}
