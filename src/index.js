import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, StyledEngineProvider,ThemeProvider ,createTheme} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import route from 'routes/Route';
import { Provider } from 'react-redux';
import store from 'rtk/store/store';
 const theme = createTheme({

 })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ToastContainer
      position="top-right"
      autoClose={500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
      <Provider store={store}>
      <RouterProvider router={route}/>
      </Provider>
     
    </ThemeProvider>
   </StyledEngineProvider>
  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
