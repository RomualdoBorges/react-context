import { createTheme } from "@mui/material";

const useCustomTheme = () => {
  return createTheme({
    palette: {
      primary: {
        main: "#2A9F85",
      },
      secondary: {
        main: "#FF7070",
      },
    },
  });
};

export default useCustomTheme;
