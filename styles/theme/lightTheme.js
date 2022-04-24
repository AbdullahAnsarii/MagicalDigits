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
          color: '#606f7b'
        },
        button: {
          fontFamily: 'Dosis',
          color: '#606f7b'
        },
        body2: {
          fontFamily: 'Dosis',
          color: '#606f7b'
        },
        body1: {
          fontFamily: 'Dosis',
          color: '#606f7b'
        },
        subtitle2: {
          fontFamily: 'Dosis',
          color: '#606f7b'
        },
        subtitle1: {
          fontFamily: 'Dosis',
          color: '#606f7b'
        },
        fontFamily: 'Dosis',
        color: '#606f7b'
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