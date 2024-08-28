import { RefObject, useCallback, useEffect } from "react"

export const useClickOutside = (
  ref: RefObject<HTMLElement | undefined>,
  callback: () => void,
  addEventListener: boolean,
) => {
  const handleClick = useCallback((event: MouseEvent) => {
    if (ref.current && !isChild(event.target as HTMLElement, ref.current)) {
      console.log('Closing menu');
      callback();
    }
  }, [callback, ref]);

  useEffect(() => {
    if (addEventListener) {
      document.body.addEventListener('click', handleClick)
    }

    return () => {
      document.body.removeEventListener('click', handleClick)
    }
  }, [addEventListener, handleClick]);
};

const isChild = (obj: HTMLElement, parentObj: HTMLElement) => {
  while (obj && obj.tagName.toUpperCase() != 'BODY'){
      if (obj === parentObj){
          return true;
      }

      obj = obj.parentNode as HTMLElement;
  }

  return false;
}