'use client';

import { Fragment, useEffect } from 'react';
import * as dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useAccount, useChainId, useSignMessage } from 'wagmi';
import * as GlobalStore from '@/stores/GlobalStore';
import services from '@/services';

dayjs.extend(duration);

export function ProvidersMiddleware({ children }: { children: React.ReactNode }) {
  const { address } = useAccount();
  console.log('ZYP-dev 📍 providerMiddleware.tsx 📍 ProvidersMiddleware 📍 address:', address);
  const chainId = useChainId();
  console.log('ZYP-dev 📍 providerMiddleware.tsx 📍 ProvidersMiddleware 📍 chainId:', chainId);
  const { signMessageAsync } = useSignMessage();

  async function getDiDUserInfo() {
    const response = await services.did.getAuthNonce((address as string) ?? '');
    if (response?.code == 200) {
      if (response.data.address) {
        GlobalStore.setIsOGPass(true);
        const signature = await signMessageAsync({ message: response.data.message });
        console.log('ZYP-dev 📍 providerMiddleware.tsx 📍 getDiDUserInfo 📍 signature:', signature);
        const res = await services.did.postUserLogin({
          address: address as string,
          message: response.data.message,
          signature,
          chain_id: chainId,
        });
        console.log('ZYP-dev 📍 providerMiddleware.tsx 📍 getDiDUserInfo 📍 res:', res);
        if(res.code === 200) {
          GlobalStore.setRainbowKitAuthStatus('authenticated', response.data.address, res.data.result.token);
          return;
        }
        GlobalStore.setRainbowKitAuthStatus('unauthenticated', response.data.address, '');
      } else {
        GlobalStore.setIsOGPass(false);
        GlobalStore.setRainbowKitAuthStatus('unauthenticated', address as string, '');
      }
    }
  }

  useEffect(() => {
    if(!address) {
      GlobalStore.setIsOGPass(false);
      GlobalStore.setRainbowKitAuthStatus('unauthenticated', '', '');
      return
    };
    getDiDUserInfo();
  }, [address, chainId]);

  return <Fragment>{children}</Fragment>;
}
