// lib/rainbowkit-locales.ts
import { Locale } from '@rainbow-me/rainbowkit'

// 定义支持的 RainbowKit 语言类型
type SupportedRainbowKitLocales = 'en' | 'zh'

// 创建语言映射表
const RAINBOWKIT_LOCALE_MAP: Record<string, SupportedRainbowKitLocales> = {
    en: 'en',
    zh: 'zh',
    'zh-CN': 'zh',
    'zh-TW': 'zh',
    'en-US': 'en',
}

export const getRainbowKitLocale = (i18nLang: string): Locale => {
    return RAINBOWKIT_LOCALE_MAP[i18nLang] || 'zh'
}