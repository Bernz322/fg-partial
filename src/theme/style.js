import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const defaultIconStyles = {
  width: 30,
  height: 30,
};

export const StyledTogglerContainer = styled(Box)(
  (theme) => ({
    cursor: "pointer",
    height: "30px",
    width: "30px",
  })
);
