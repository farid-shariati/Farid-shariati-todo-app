import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material'
import { PropsWithChildren } from 'react'

export default function ThemeConfig({ children }: PropsWithChildren) {
  const lightTheme = createTheme({
    direction: 'ltr',
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            boxShadow: 'none',
            color: '#fff',
            ':hover': {
              boxShadow: 'none',
            },
          },
          sizeLarge: {
            borderRadius: '16px',
          },
          sizeMedium: {
            height: '32px',
            borderRadius: '12px',
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontWeight: 400,
            fontSize: '14px',
            input: {
              color: '#92a1b6',
            },
            fieldset: {
              border: '2px solid',
              borderColor: 'gray',
            },
          },
        },
      },
    },
    palette: {
      background: {
        default: '#282727',
      },
      mode: 'light',
      primary: {
        main: '#0b7b29',
        50: '#16d449',
      },
      secondary: {
        main: '#92a1b6',
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
      },
      success: {
        main: '#1be264',
      },
      warning: {
        main: '#efc108',
      },
      error: {
        main: '#f21e1e',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1920,
      },
    },
  })

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
