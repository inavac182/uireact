import { MotionValue, useTransform } from "motion/react";

export const useParallax = (value: MotionValue<number>, distance: number | string, base: number | string) => {
  return useTransform(value, [0, 1], [base, distance]);
};
