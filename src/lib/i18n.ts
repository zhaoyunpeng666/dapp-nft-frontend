// lib/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// 显式创建实例避免单例问题
const instance = i18n.createInstance()

// 初始化 i18n
instance.use(initReactI18next).init({
  lng: 'en', // 默认语言
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
        chinese: 'Chinese',
        profile: 'Profile',
        userInfo: 'User Information',
        wrongNetwork: 'Wrong network',
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
        wrongNetwork: '网络错误',
      }
    }
  }
})

// 在客户端初始化后设置语言
if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('i18nLang')
  if (savedLang) {
    instance.changeLanguage(savedLang)
  }
}

// 监听语言变化保存到本地存储
instance.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('i18nLang', lng)
  }
})

export default instance