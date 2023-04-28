import type { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import CharacterList from 'components/CharacterList';
import type { Character } from 'components/CharacterList';
import './App.css';

const App: FC = () => {
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

  return (
    <div className="container">
      <Heading as="h1" size="2xl" my={12}>
        山一商事じゃんけん大会
      </Heading>
      <CharacterList domain="業販第３本部" characters={characters} />
    </div>
  );
};

export default App;
