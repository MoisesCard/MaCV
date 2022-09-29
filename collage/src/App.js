
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter as Router} from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes";



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
        'Montserrat',
        'sans-serif',
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
      <Router>
        <AnimatedRoutes/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
