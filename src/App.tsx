import React, { useEffect } from "react";
import { ThemeProvider, CssBaseline, createTheme, Container } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import getDesignTokens from "./theme/theme";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ComponentProps from "./pages/ComponentProps";
import SXProps from "./pages/SXProps";
import StyledComp from "./pages/StyledComp";
import CSSFunctions from "./pages/CSSFunctions";
import CSSStylesheet from "./pages/CSSStylesheet";
import CSSModules from "./pages/CSSModules";
import Theming from "./pages/Theming";
import BestPractice from "./pages/BestPractice";

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<"light" | "dark">(() =>
    prefersDarkMode ? "dark" : "light"
  );

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar mode={mode} toggleColorMode={toggleColorMode} />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="component-props" element={<ComponentProps />} />
            <Route path="sx-props" element={<SXProps />} />
            <Route path="styled-components" element={<StyledComp />} />
            <Route path="css-functions" element={<CSSFunctions />} />
            <Route path="css-stylesheet" element={<CSSStylesheet />} />
            <Route path="css-modules" element={<CSSModules />} />
            <Route path="theming" element={<Theming />} />
            <Route path="best-practice" element={<BestPractice />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
