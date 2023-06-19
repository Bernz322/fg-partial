import React, { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Tooltip from "@mui/material/Tooltip";

import {
  defaultIconStyles,
  StyledTogglerContainer,
} from "./style";
import { ThemeModeContext } from "./ThemeProvider";

const ThemeToggler = () => {
  const { theme, themeToggler } = useContext(
    ThemeModeContext
  );
  return (
    <StyledTogglerContainer
      onClick={themeToggler}
    >
      {theme === "light" ? (
        <Tooltip title="Dark Mode">
          <DarkModeIcon
            sx={{
              color: "#001a88",
              ...defaultIconStyles,
            }}
          />
        </Tooltip>
      ) : (
        <Tooltip title="Light Mode">
          <LightModeIcon
            sx={{
              color: " #fccf3e",
              ...defaultIconStyles,
            }}
          />
        </Tooltip>
      )}
    </StyledTogglerContainer>
  );
};

export default ThemeToggler;
