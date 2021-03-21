import { createMuiTheme, responsiveFontSizes, } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'Rpberto',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      light: '##0C2D48',
      main: '#0C2D48',
      dark: '#1b232b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
export default responsiveFontSizes(theme);
