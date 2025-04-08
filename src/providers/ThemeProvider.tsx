// providers/ThemeProvider.tsx
'use client'

import { ReactNode, createContext, useState } from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme, Box } from '@mui/material'
import {
  alpha,
} from '@mui/material/styles';

export const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {}
})

// Augment the palette to include a violet color
declare module '@mui/material/styles' {
  interface Palette {
    violet: Palette['primary'];
  }

  interface PaletteOptions {
    violet?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include a violet option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    violet: true;
  }
}

const violetBase = '#6c63ff';
const violetMain = alpha(violetBase, 0.7);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true)
  
  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      violet: {
        main: violetBase,
        light: violetBase,
        dark: violetBase,
        contrastText: '#fff',
      },
      success: {
        main: '#4CAF50',
        light: '#81C784',
        dark: '#388E3C',
        contrastText: '#fff',
      },
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: violetMain
          },
          root: {
            '& .MuiTabs-indicator': {
              backgroundColor: violetMain,
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          // root: {
          //   color: isDark ? '#fff' : '#000',
          // },
          // h6: {
          //   color: isDark ? '#fff' : '#000',
          // },
          // caption: {
          //   color: isDark ? '#fff' : '#000',
          // },

        },
      },
    },
  })

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark(!isDark) }}>
      <MuiThemeProvider theme={theme}>
        <Box className={isDark ? 'dark' : 'light'}>
          {children}
        </Box>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}