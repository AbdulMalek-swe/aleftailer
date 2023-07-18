import React, { useEffect } from 'react';
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
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import './i18n'
function App() {
  const [, , removeCookie] = useCookies(["token"]);
  useEffect(()=>{
     getUser(); 
  },[removeCookie])
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <>
    
    <RouterProvider router={route}/>
  <div className="App">
      <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
        <button onClick={()=>handleClick('en')} >
          English
        </button>
        <button onClick={()=>handleClick('ko')} >
          Korean
        </button>
        <button onClick={()=>handleClick('chi')} >
          Chinese
       </button>
      </nav>
      <header className="App-header">
      
        <p>
          <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3> 
        </p>
      </header>
  </div>
  
    </>
    // 
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
