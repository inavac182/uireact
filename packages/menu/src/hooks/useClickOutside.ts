import { RefObject, useCallback, useEffect, useState } from "react"

export const useClickOutside = (
  ref: RefObject<HTMLElement | undefined>,
  callback: () => void,
  listen: boolean,
) => {
  const [listening, setListening] = useState(false);
  const [abortController, setAbortController] = useState(new AbortController());

  const handleClick = useCallback((event: MouseEvent) => {
    if (ref.current && !isChild(event.target as HTMLElement, ref.current)) {
      callback();
      setListening(false);
      abortController.abort();
    }
  }, [abortController, callback, ref]);

  useEffect(() => {
    if (listen && !listening) {
      setTimeout(() => {
        const controller = new AbortController();

        document.body.addEventListener('click', handleClick, { signal: controller.signal });

        setAbortController(controller);
        setListening(true);
      }, 200);
    }
  }, [handleClick, abortController, listen, setAbortController, listening]);
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