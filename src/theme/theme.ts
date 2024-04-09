import { PaletteMode } from '@mui/material';
import { red } from '@mui/material/colors';


const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // primary: { main: '#ae0' },
        // secondary: { main: '#ae0' }, 
        // background: { default: '#ffffff' },
        // text: { primary: '#000000', secondary: '#757575' }, 
      }
      : {
        primary: { main: red[500] },
        background: { default: 'rgb(255,0,0)', paper: '#1e1e1e' },
        text: { primary: '#ffffff', secondary: '#aaaaaa' },
        info: { main: '#ae0' },
      }),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // textTransform: 'capitalize',
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor:'#d5d5d5',
          height:'2px',
          margin: '8px'
        }
      }
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: 'Noto Sans Mono, monospace',
    h1: {
      fontSize: '2.5rem',
      fontWeight: '700',
      textAlign: 'center',
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
  }
});

export default getDesignTokens;
