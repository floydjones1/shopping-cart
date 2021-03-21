import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

// import default style
import './main.css'

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);