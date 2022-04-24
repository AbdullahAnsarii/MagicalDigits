import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#00478F',
        },
        secondary: {
          main: '#FF5D00',
        },
      },
      typography: {
        h5: {
          fontFamily: 'Dosis',
        },
        button: {
          fontFamily: 'Dosis',
        },
        body2: {
          fontFamily: 'Dosis',
        },
        body1: {
          fontFamily: 'Dosis',
        },
        subtitle2: {
          fontFamily: 'Dosis',
        },
        subtitle1: {
          fontFamily: 'Dosis',
        },
        fontFamily: 'Dosis',
      },
      overrides: {
        MuiAppBar: {
          colorInherit: {
            backgroundColor: '#f3f3f3bf',
        color: '#00478F',
          },
        },
      },
      props: {
        MuiAppBar: {
          color: 'inherit',
        },
      },
});

export default lightTheme;