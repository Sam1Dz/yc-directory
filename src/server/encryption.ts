import CryptoJS from 'crypto-js';
import { createServerFn } from '@tanstack/react-start';

import { env } from '~/configs/env';

export const encryptData = createServerFn({
  method: 'POST',
})
  .validator((data: string) => data)
  .handler(({ data }) => {
    return CryptoJS.AES.encrypt(data, env.ENCRYPTION_KEY).toString();
  });

export const decryptData = createServerFn({
  method: 'GET',
})
  .validator((data: string) => data)
  .handler(({ data }) => {
    try {
      const bytes = CryptoJS.AES.decrypt(data, env.ENCRYPTION_KEY);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);

      return decrypted ? decrypted : null;
    } catch {
      return null;
    }
  });
