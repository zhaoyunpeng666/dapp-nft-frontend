import { AuthenticationStatus } from '@rainbow-me/rainbowkit';
import { ValueOf } from 'next/dist/shared/lib/constants';
import { proxy } from 'valtio';

export interface IGlobalStore {
  rainbowKitAuthStatus: AuthenticationStatus;
  isOgPass: boolean;
}

type AccessTokenType = {
  [key: string]: { token: string };
};

export const store = proxy<IGlobalStore>({
  rainbowKitAuthStatus: 'unauthenticated',
  isOgPass: false,
});

export const initRainbowKitAuthStatus = (address: string) => {
  const accessTokens: AccessTokenType[] = JSON.parse(localStorage.getItem('accessTokens') ?? '[]');

  const accessToken: ValueOf<AccessTokenType> = accessTokens.find((item) => item[address])?.[address] ?? { token: '' };

  if (accessToken?.token.trim() !== '') {
    localStorage.setItem('token', accessToken?.token);
    store.rainbowKitAuthStatus = 'authenticated';
  } else {
    localStorage.removeItem('token');
    store.rainbowKitAuthStatus = 'unauthenticated';
  }
};

export const setRainbowKitAuthStatus = (status: AuthenticationStatus, address: string, token: string) => {
  let accessTokens: AccessTokenType[] = JSON.parse(localStorage.getItem('accessTokens') ?? '[]');
  if (status === 'authenticated') {
    accessTokens.push({ [address]: { token } });
    localStorage.setItem('token', token);
    localStorage.setItem('accessTokens', JSON.stringify(accessTokens));
  } else if (status === 'unauthenticated') {
    localStorage.removeItem('token');
    accessTokens = accessTokens.map((item) => {
      return item[address] ? { [address]: { token: '' } } : item;
    });
    localStorage.setItem('accessTokens', JSON.stringify(accessTokens));
  }

  store.rainbowKitAuthStatus = status;
};

export const setIsOGPass = (flag: boolean) => {
  store.isOgPass = flag;
};
