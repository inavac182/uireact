import { MotionValue, useTransform } from "framer-motion";

export const useParallax = (value: MotionValue<number>, distance: number | string, base: number | string) => {
  return useTransform(value, [0, 1], [base, distance]);
};
