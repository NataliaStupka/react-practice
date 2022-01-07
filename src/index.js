import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react'; // для темизации, обернем в него App; передадим туда один проп (замена переменным var)
import './index.css';
import App from './components/App/App';
import { theme } from 'constans/theme'; // для переменныч вместо var

// можно пренести в отдельный файл
//для темы вместо var, используем в пропс ниже (ThemeProvider)
// const theme = {
//   colors: {
//     green: '#5ddf6f',
//     blue: '#7e75ff',
//     red: '#f74e4e',
//     primaryText: '#212121',
//   secondaryText: '#757575',
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
