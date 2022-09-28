import Header from "./components/Header/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#211E1C',
      },
      secondary: {
        main: '#463F3A',
      },
      white: {
        main: '#F4F3EE',
      },
      offWhite: {
        main: '#BCB8B1',
      },
      error: {
        main: "#e63946"
      }
    },
    typography: {
      fontFamily: [
        'IBM Plex Mono',
        "monospace",
        'Tiro Telugu',
        'serif',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <Header/>
      </>
    </ThemeProvider>
  );
}

export default App;
