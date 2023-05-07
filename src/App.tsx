import type { FC } from 'react';
import { ChakraProvider, Heading } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import CharacterList from 'components/CharacterList';
import type { Character } from 'components/CharacterList';
import './App.css';
import CountDown from 'components/CountDown';
import Counter from 'components/Counter';
import SampleForm from 'components/SampleForm';
import SampleValidForm from 'components/SampleValidForm';
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
    <SampleForm />
    <SampleValidForm />
  </ChakraProvider>
);

export default App;
