import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'components/theme/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <App />
      <ToastContainer autoClose={3000} position="top-center" />
    </BrowserRouter>
  </ChakraProvider>
);
