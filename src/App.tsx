import React, { useEffect } from "react";
import { ThemeProvider, CssBaseline, createTheme, Container } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import getDesignTokens from "./theme/theme";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ComponentProps from "./pages/ComponentProps";
import SXProps from "./pages/SXProps";
import CSSFunctions from "./pages/CSSFunctions";
import Theming from "./pages/Theming";
import BestPractice from "./pages/BestPractice";
import GettingStarted from "./pages/GettingStarted";
import Introduction from "./pages/Introduction";

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
        <Container sx={{ paddingTop: "16px" }}>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="getting-started" element={<GettingStarted />} />
            <Route path="component-props" element={<ComponentProps />} />
            <Route path="sx-props" element={<SXProps />} />
            <Route path="css-functions" element={<CSSFunctions />} />
            <Route path="theming" element={<Theming />} />
            <Route path="best-practice" element={<BestPractice />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
