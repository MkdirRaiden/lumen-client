export const error_check = () => {
  if (__DEV__) {
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === "string" &&
        args[0].includes(
          "Text strings must be rendered within a <Text> component"
        )
      ) {
        console.trace("🔥 Text Error Trace");
      }
      originalError(...args);
    };
  }
};
