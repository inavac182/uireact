import { UiAESDecrypt, UiAESEncrypt } from '../src';

describe('dateRange validation', () => {
  it('Should encrypt and decrypt correctly', () => {
    const phrase = "My secure phrase";
    const secret = "1234";

    const encrypted = UiAESEncrypt(phrase, secret);

    const decrypted = UiAESDecrypt(encrypted, secret);

    expect(decrypted).toEqual(phrase);
  });
});
