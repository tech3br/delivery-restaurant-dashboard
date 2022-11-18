// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      white: string;
      primary: string;
      secondary: string;
      tertiary: string;
      yellow: string;
      blue: string;
      green: string;
      gray0: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
    },
    typography: {
      heading: {
        display: {
          fontSize: string;
          fontWeight: number;
          lineWeight: string;
        }
        h1: {
          fontSize: string;
          fontWeight: number;
          lineWeight: string;
        }
        h2: {
          fontSize: string;
          fontWeight: number;
          lineWeight: string;
        }
        h3: {
          fontSize: string;
          fontWeight: number;
          lineWeight: string;
        }
        h4: {
          fontSize: string;
          fontWeight: number;
          lineWeight: string;
        }
        h5: {
          fontSize: string;
          fontWeight: number;
          lineWeight: string;
        }
        h6: {
          fontSize: string;
          fontWeight: number;
          lineWeight: string;
        }
      }
      bodyText: {
        small: {
          fontSize: string;
          fontWeight: number;
          lineWeight: string;
        }
        medium: {
          fontSize: string;
          fontWeight: number;
          lineWeight: string;
        }
        large: {
          fontSize: string;
          fontWeight: number;
          lineWeight: string;
        }
      }
    }
  }
}
