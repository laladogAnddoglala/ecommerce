import { useState } from "react";
import { Container, CssBaseline, createTheme, ThemeProvider, Typography} from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode? 'dark' : 'light';
  const theme = createTheme(
    {
      palette: {
        mode: paletteType,
        background: {
          default: paletteType === 'light'? '#eaeaea' : '#121212'
        }
      }
    }
  )
  
  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Outlet />
      </Container>
      <Typography variant="h1"> Testing </Typography>
    </ThemeProvider>
  );
}


