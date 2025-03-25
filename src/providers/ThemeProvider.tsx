// providers/ThemeProvider.tsx
'use client'

import { ReactNode, createContext, useState } from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material'

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {}
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  
  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
    },
  })

  return (
    <ThemeContext value={{ isDark, toggleTheme: () => setIsDark(!isDark) }}>
      <MuiThemeProvider theme={theme}>
        <div className={isDark ? 'dark' : 'light'}>
          {children}
        </div>
      </MuiThemeProvider>
    </ThemeContext>
  )
}