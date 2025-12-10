import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primary, // Orange-red
      contrastText: colors.text.white,
    },
    secondary: {
      main: colors.secondary, // Orange-yellow
      contrastText: colors.text.white,
    },
    background: {
      default: colors.background.white,
      paper: colors.background.white,
    },
    text: {
      primary: colors.text.primary,
    },
  },
  typography: {
    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
  },
});

// Export colors for use in components
export { colors };

