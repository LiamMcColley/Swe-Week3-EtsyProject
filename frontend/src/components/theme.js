import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCardHeader: {
      styleOverrides: {
        root: {
          "padding-top": 2,
          "padding-bottom": 2,
        },
      },
    },
  },

  palette: {
    type: "light",
    primary: {
      main: "#8B4513",
    },
    secondary: {
      main: "#ffa726",
    },
    error: {
      main: "#d20303",
    },
    background: {
      paper: "#F3E4C7",
    },
  },
});

export default theme;
