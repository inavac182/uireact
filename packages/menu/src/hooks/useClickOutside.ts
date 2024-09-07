import { RefObject, useCallback, useEffect, useState } from "react"

const TIMEOUT_FOR_ANIMATION = 500;

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
      abortController.abort();
      document.body.removeEventListener('click', handleClick);
    }
  }, [abortController, callback, ref]);

  useEffect(() => {
    if (listen && !listening) {
      setTimeout(() => {
        const controller = new AbortController();

        document.body.removeEventListener('click', handleClick);
        document.body.addEventListener('click', handleClick, { signal: controller.signal });

        setAbortController(controller);
        setListening(true);
      }, TIMEOUT_FOR_ANIMATION);
    }
  }, [handleClick, abortController, listen, listening]);

  useEffect(() => {
    if (listening && !listen) {
      setListening(false);
      abortController.abort();
      document.body.removeEventListener('click', handleClick);
    }
  }, [abortController, handleClick, listen, listening]);
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