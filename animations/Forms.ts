import { interpolateColor, SharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';

export const borderColorInterpolation = (progress: SharedValue<number>, color_01: string, color_02: string) => {
  return useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(progress.value, [0, 1], [color_01, color_02]),
    };
  });
};

export const verticalTranslation = (
  progress: SharedValue<number>,
  start: number,
  end: number,
  isLock: boolean,
  lockedValue: number
) => {
  return useAnimatedStyle(() => {
    if (isLock) {
      return {
        top: lockedValue,
      };
    }
    return {
      top: withSpring(start + (end - start) * progress.value),
    };
  });
};

export const fadeToggle = (
  progress: SharedValue<number>,
  start: number = 0,
  end: number = 1,
  isLock: boolean,
  lockedValue: number
) => {
  return useAnimatedStyle(() => {
    if (isLock) {
      return {
        opacity: withTiming(lockedValue, {
          duration: 200,
        }),
      };
    }
    return {
      opacity: withTiming(start + (end - start) * progress.value, {
        duration: 300,
      }),
    };
  });
};
