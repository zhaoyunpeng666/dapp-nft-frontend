import { ReactNode } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: {
        children?: ReactNode;
        [key: string]: unknown;
      };
    }
  }
} 