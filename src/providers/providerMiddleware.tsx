'use client';

import { Fragment, useEffect } from 'react';
import * as dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useAccount } from 'wagmi';

import * as GlobalStore from '@/stores/GlobalStore';
import services from '@/services';

dayjs.extend(duration);

export function ProvidersMiddleware({ children }: { children: React.ReactNode }) {
  const { address } = useAccount();

  async function getDiDUserInfo() {
    const response = await services.did.getAuthNonce((address as string) ?? '');
    if (response?.code == 200) {
      if (response.data.isOg) {
        GlobalStore.setIsOGPass(true);
      } else {
        GlobalStore.setIsOGPass(false);
      }
    }
  }

  useEffect(() => {
    getDiDUserInfo();
  }, [address]);

  return <Fragment>{children}</Fragment>;
}
