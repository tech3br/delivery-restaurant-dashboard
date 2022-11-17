import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    white: '#FAFAFA',
    primary: '#7C0A02',
    secondary: '#B22222',
    tertiary: '#E25822',
    gray0: '#FFFFFF',
    gray100: '#F2F2F2',
    gray200: '#CCCCCC',
    gray300: '#999999',
    gray400: '#666666',
    gray500: '#333333'
  },
  typography: {
    heading: {
      display: {
        fontSize: '56px',
        fontWeight: 600,
        lineWeight: '120%'
      },
      h1: {
        fontSize: '48px',
        fontWeight: 600,
        lineWeight: '120%'
      },
      h2: {
        fontSize: '40px',
        fontWeight: 600,
        lineWeight: '120%'
      },
      h3: {
        fontSize: '32px',
        fontWeight: 600,
        lineWeight: '120%'
      },
      h4: {
        fontSize: '24px',
        fontWeight: 600,
        lineWeight: '120%'
      },
      h5: {
        fontSize: '20px',
        fontWeight: 600,
        lineWeight: '120%'
      },
      h6: {
        fontSize: '16px',
        fontWeight: 600,
        lineWeight: '120%'
      }
    },
    bodyText: {
      small: {
        fontSize: '14px',
        fontWeight: 400,
        lineWeight: '150%'
      },
      medium: {
        fontSize: '16px',
        fontWeight: 400,
        lineWeight: '150%'
      },
      large: {
        fontSize: '18px',
        fontWeight: 400,
        lineWeight: '150%'
      }
    }
  }
};
