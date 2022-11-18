import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    background: '#E5E5E5',
    white: '#FAFAFA',
    primary: '#7C0A02',
    secondary: '#B22222',
    tertiary: '#E25822',
    yellow: '#FA9500',
    blue: '#00B7FA',
    green: '#38b000',
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
        fontSize: '3.5rem',
        fontWeight: 600,
        lineWeight: '120%'
      },
      h1: {
        fontSize: '3rem',
        fontWeight: 600,
        lineWeight: '120%'
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
        lineWeight: '120%'
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        lineWeight: '120%'
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineWeight: '120%'
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineWeight: '120%'
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
        lineWeight: '120%'
      }
    },
    bodyText: {
      small: {
        fontSize: '0.875rem',
        fontWeight: 300,
        lineWeight: '150%'
      },
      medium: {
        fontSize: '1rem',
        fontWeight: 400,
        lineWeight: '150%'
      },
      large: {
        fontSize: '1.125rem',
        fontWeight: 600,
        lineWeight: '150%'
      }
    }
  }
};
