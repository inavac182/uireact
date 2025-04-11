import { UiValidatorSecureLevel } from "types";

export const secureCheck = (level: UiValidatorSecureLevel, value?: string): boolean => {
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const symbols = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/g;

  if (!value) {
    return false;
  }

  const isWeak = (value.match(lowerCaseLetters) || value.match(upperCaseLetters)) && value.match(numbers);
  const isMid = isWeak && value.match(symbols);
  const isStrong = isWeak && isMid && value.match(upperCaseLetters) && value.match(lowerCaseLetters);

  if (level === 'strong' && isStrong) {
    return true;
  } else if (level === 'mid' && isMid) {
    return true;
  } else if (level === 'weak' && isWeak) {
    return true;
  } else {
    return false;
  }
}
