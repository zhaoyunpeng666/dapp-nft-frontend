'use client';

import { Fragment, useEffect, useCallback } from 'react';
import * as dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useAccount, useChainId, useSignMessage } from 'wagmi';
// import * as GlobalStore from '@/stores/GlobalStore';
import services from '@/services';

dayjs.extend(duration);

export function ProvidersMiddleware({ children }: { children: React.ReactNode }) {
  const { address } = useAccount();
  const chainId = useChainId();
  const { signMessageAsync } = useSignMessage();

  const getDiDUserInfo = useCallback(async () => {
    const response = await services.did.getAuthNonce((address as string) ?? '');
    if (response?.code == 200) {
      if (response.data.address) {
        // GlobalStore.setIsOGPass(true);
        const signature = await signMessageAsync({ message: response.data.message });
        const res = await services.did.postUserLogin({
          address: address as string,
          message: response.data.message,
          signature,
          chain_id: chainId,
        });
        if(res.code === 200) {
          // GlobalStore.setRainbowKitAuthStatus('authenticated', response.data.address, res.data.result?.token ?? '');
          localStorage.setItem('token', res.data.result?.token ?? '');
          return;
        }
        localStorage.removeItem('token');
        // GlobalStore.setRainbowKitAuthStatus('unauthenticated', response.data.address, '');
      } else {
        // GlobalStore.setIsOGPass(false);
        // GlobalStore.setRainbowKitAuthStatus('unauthenticated', address as string, '');
        localStorage.removeItem('token');
      }
    }
  }, [address, chainId, signMessageAsync]);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if(isDisconnected && token) {
  //     localStorage.removeItem('token');
  //   }
  // }, [isDisconnected])

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!address || !chainId || token) {
      // GlobalStore.setIsOGPass(false);
      // GlobalStore.setRainbowKitAuthStatus('unauthenticated', '', '');
      return
    };
    if(!token) {
      getDiDUserInfo();
    }
  }, [address, chainId, getDiDUserInfo]);

  return <Fragment>{children}</Fragment>;
}
