import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DndProvider backend={HTML5Backend}>
          <Home />
          <GlobalStyles />
        </DndProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
