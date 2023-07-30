import React, { Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, StyledEngineProvider,ThemeProvider ,createTheme} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import route from 'routes/Route';
import { Provider } from 'react-redux';
import store from 'rtk/store/store';
import "react-multi-carousel/lib/styles.css";
import { useCookies } from 'react-cookie';
import { getUser } from 'hooks/ProfileGet';
import spinnergf from 'assets/spinnerloading.gif'
//  import './i18n'
function App() {
  const [, , removeCookie] = useCookies(["token"]);
  useEffect(()=>{
   
   
     const t =  getUser(); 
     if(t!==undefined){
      removeCookie("token")
     }
  },[removeCookie])
  return (
    <Suspense fallback={<div className='flex justify-center items-center'> 
      <img src={spinnergf} alt='loading...' className='w-36 h-36'/>
    </div>}>
       <RouterProvider router={route}/>
    </Suspense>
    
  );
}

export default App;
const theme = createTheme({
   
  palette: {
   
    secondary: {
      main: "#FAEFB4", // replace with your desired secondary color
    },
    primary: {
      main:'#000000', // replace with your desired secondary color
    },
    
    
  },

});

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
      <App/>
      </Provider>  
    </ThemeProvider>
   </StyledEngineProvider>
  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
