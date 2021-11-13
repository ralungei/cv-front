import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  red: 'red',
};

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: 'red',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },

  typography: {
    // h1: {
    //     fontFamily: "NeflixSansMedium",
    //     fontSize: "16px",
    //     fontweight: "400",
    //     color: colors.red
    // }
  },

  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
  },
});

export default theme;
