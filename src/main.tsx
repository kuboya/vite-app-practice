import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from 'App';
import CountDown from 'components/CountDown';
import Counter from 'components/Counter';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <Counter />
      <CountDown />
    </ChakraProvider>
  </React.StrictMode>
);
