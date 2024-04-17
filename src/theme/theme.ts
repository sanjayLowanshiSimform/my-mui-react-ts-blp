import { PaletteMode } from '@mui/material';
import { themes } from './themes';


const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: { main: `rgb(${themes.default['primary-500']})`, dark: `rgb(${themes.default['primary-600']})`, contrastText: `rgb(${themes.default['textColor-900']})` },
        secondary: { main: `rgb(${themes.default['secondary-500']})`, dark: `rgb(${themes.default['secondary-600']})`, contrastText: `rgb(${themes.default['textColor-500']})` },
        error: { main: `rgb(${themes.default['error-500']})`, dark: `rgb(${themes.default['error-600']})`, contrastText: `rgb(${themes.default['textColor-500']})` },
        warning: { main: `rgb(${themes.default['warning-500']})`, dark: `rgb(${themes.default['warning-600']})`, contrastText: `rgb(${themes.default['textColor-500']})` },
        info: { main: `rgb(${themes.default['info-500']})`, dark: `rgb(${themes.default['info-600']})`, contrastText: `rgb(${themes.default['textColor-500']})` },
        success: { main: `rgb(${themes.default['success-500']})`, dark: `rgb(${themes.default['success-600']})`, contrastText: `rgb(${themes.default['textColor-500']})` },
        background: { default: `rgb(${themes.default['bgColor-500']})`, code: `rgb(${themes.default['bgColor-900']})` },
      }
      : {
        primary: { main: `rgb(${themes.dark['primary-500']})`, dark: `rgb(${themes.dark['primary-600']})`, contrastText: `rgb(${themes.dark['textColor-500']})` },
        secondary: { main: `rgb(${themes.dark['secondary-500']})`, dark: `rgb(${themes.dark['secondary-600']})`, contrastText: `rgb(${themes.dark['textColor-500']})` },
        error: { main: `rgb(${themes.dark['error-500']})`, dark: `rgb(${themes.dark['error-600']})`, contrastText: `rgb(${themes.dark['textColor-500']})` },
        warning: { main: `rgb(${themes.dark['warning-500']})`, dark: `rgb(${themes.dark['warning-600']})`, contrastText: `rgb(${themes.dark['textColor-500']})` },
        info: { main: `rgb(${themes.dark['info-500']})`, dark: `rgb(${themes.dark['info-600']})`, contrastText: `rgb(${themes.dark['textColor-500']})` },
        success: { main: `rgb(${themes.dark['success-500']})`, dark: `rgb(${themes.dark['success-600']})`, contrastText: `rgb(${themes.dark['textColor-500']})` },
        background: { default: `rgb(${themes.dark['bgColor-500']})`, code: `rgb(${themes.dark['bgColor-200']})` },
      }),
  },
  typography: {
    fontSize: 12,
    fontFamily: 'Noto Sans Mono, monospace',
    h1: {
      fontSize: '2.5rem',
      fontWeight: '700',
      textAlign: 'center',
      textDecoration: 'underline',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: '700',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: '700',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: '700',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: '700',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: '700',
    },
    subtitle1: {
      fontSize: '1rem',
    },
    subtitle2: {
      fontSize: '0.875rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      fontSize: '1rem',
      fontWeight: '600',
      textTransform: 'capitalize',
    },
    caption: {
      fontSize: '0.75rem',
    },
    overline: {
      fontSize: '0.625rem',
      textTransform: 'uppercase',
    },
  },
  spacing: [0, 4, 8, 16, 32, 64], 
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        // disableRipple: true,
        // disableElevation: true,
      },
      styleOverrides: {
        root: {
          // color: "#ae0",
          // padding: "32px"
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#fcfcfd',
          margin: '8px 0'
        }
      }
    },
  },
});

export default getDesignTokens;