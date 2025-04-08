import type { Metadata } from "next";
import React from 'react';
import { WalletProvider } from '@/providers/WalletProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { I18nProvider } from '@/providers/I18nProvider'
import Header from '@/components/Header'
import "./globals.css";
import { ProvidersMiddleware } from '@/providers/providerMiddleware';


export const metadata: Metadata = {
  title: "NFT拍卖平台",
  description: "基于Web3.0技术的NFT拍卖交易平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className="min-h-screen">
        <I18nProvider>
          <ThemeProvider>
            <WalletProvider>
              <Header />
              <ProvidersMiddleware>
                {children}
              </ProvidersMiddleware>
            </WalletProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
