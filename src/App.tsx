import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header/Header';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

export function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
