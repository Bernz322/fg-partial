import React, {
  createContext,
  useMemo,
} from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import {
  createTheme,
  CssBaseline,
} from "@mui/material";
import { useDarkMode } from "../hooks";
import { lightTheme } from "./light";
import { darkTheme } from "./dark";
import { componentOverrides } from "./componentOverrides";

export const ThemeModeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, themeToggler] = useDarkMode();
  const currentTheme =
    theme === "light" ? lightTheme : darkTheme;
  // Memoize context value for performance as this will wrap the entire component
  const globalContextValue = useMemo(
    () => ({
      theme,
      themeToggler,
      defaultTheme: currentTheme,
    }),
    [theme, themeToggler]
  );

  // MUI recommends to memoize the creation of a theme
  const customTheme = useMemo(
    () =>
      createTheme({
        ...currentTheme,
        components: { ...componentOverrides },
      }),
    [theme]
  );

  return (
    <ThemeModeContext.Provider
      value={globalContextValue}
    >
      <MUIThemeProvider theme={customTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeProvider;
