import type { FC } from 'react';
import { ChakraProvider, Heading } from '@chakra-ui/react';
import { configureStore } from '@reduxjs/toolkit';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { counterSlice } from 'stores/counter';
import { counterReducer, initialState } from 'stores/reducers';
import CharacterList from 'components/CharacterList';
import type { Character } from 'components/CharacterList';
import './App.css';
import CountDown from 'components/CountDown';
import Counter from 'components/Counter';
import SampleForm from 'components/SampleForm';
import SampleValidForm from 'components/SampleValidForm';
import CounterRedux from 'components/templates/CounterRedux';
import CounterReduxTK from 'components/templates/CounterReduxTK';
import DemoRouters from 'routes/DemoRoutes';
import UsersRoutes from 'routes/UsersRoutes';

const characters: Character[] = [
  {
    id: 1,
    name: '鈴木武',
    grade: 1,
    height: 190,
  },
  {
    id: 2,
    name: '木戸川猿',
    grade: 1,
    height: 230,
  },
  {
    id: 3,
    name: '牧村晴治',
    grade: 2,
    height: 160,
  },
  {
    id: 4,
    name: '小園三四郎',
    grade: 3,
  },
  {
    id: 5,
    name: '東正三',
    grade: 3,
    height: 198,
  },
];

const store = createStore(counterReducer, initialState);

const storeTK = configureStore({ reducer: counterSlice.reducer });

const appTitle = import.meta.env.VITE_APP_TITLE;

const App: FC = () => (
  <ChakraProvider>
    <HelmetProvider>
      <BrowserRouter>
        <UsersRoutes />
      </BrowserRouter>
    </HelmetProvider>
    <BrowserRouter>
      <DemoRouters />
    </BrowserRouter>
    <div className="container">
      <Heading as="h1" size="2xl" my={12}>
        山一商事じゃんけん大会
      </Heading>
      <CharacterList domain="業販第３本部" characters={characters} />
    </div>
    <Counter />
    <CountDown />
    <ReduxProvider store={store}>
      <CounterRedux pageTitle={appTitle} />
    </ReduxProvider>
    <ReduxProvider store={storeTK}>
      <CounterReduxTK pageTitle={appTitle} />
    </ReduxProvider>
    <SampleForm />
    <SampleValidForm />
  </ChakraProvider>
);

export default App;
