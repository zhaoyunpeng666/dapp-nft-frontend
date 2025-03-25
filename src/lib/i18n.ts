// lib/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// 显式创建实例避免单例问题
const instance = i18n.createInstance()

// 从本地存储获取保存的语言设置
const savedLang = typeof window !== 'undefined' ? localStorage.getItem('i18nLang') : null

instance.use(initReactI18next).init({
  lng: savedLang || navigator.language.split('-')[0] || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        welcome: 'Welcome to DApp',
        connectWallet: 'Connect Wallet',
        language: 'Language',
        english: 'English',
        chinese: '中文',
        profile: 'Profile',
        userInfo: 'User Information',
      }
    },
    zh: {
      translation: {
        welcome: '欢迎使用DApp',
        connectWallet: '连接钱包',
        language: '语言',
        english: '英文',
        chinese: '中文',
        profile: '个人中心',
        userInfo: '用户信息',
      }
    }
  }
})

// 监听语言变化保存到本地存储
instance.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('i18nLang', lng)
  }
})

export default instance