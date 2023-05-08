import type { FC, SyntheticEvent } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

type Props = {
  bulk?: number;
  count?: number;
  decrement?: () => void;
  increment?: () => void;
  add?: (amount: number) => void;
};

const CounterBoard: FC<Props> = ({
  bulk = 10,
  count = 0,
  decrement = () => undefined,
  increment = () => undefined,
  add = () => undefined,
}) => {
  const handleDecrement = (event: SyntheticEvent) => {
    event.stopPropagation();
    decrement();
  };
  const handleIncrement = (event: SyntheticEvent) => {
    event.stopPropagation();
    increment();
  };
  const handleAdd = (event: SyntheticEvent) => {
    event.stopPropagation();
    add(bulk);
  };

  return (
    <Box
      p={3}
      w="sm"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="base"
      textAlign="center"
    >
      <Stat mb={1} borderWidth="1px" borderRadius="lg" mx={8} my={4} p={4}>
        <StatLabel fontSize={18}>Counter</StatLabel>
        <StatNumber fontSize={42}>{count}</StatNumber>
      </Stat>
      <Box my={2}>
        <ButtonGroup maxW="xs" m={2} variant="contained" isAttached>
          <Button
            w="xs"
            colorScheme="red"
            variant="solid"
            onClick={handleDecrement}
          >
            -1
          </Button>
          <Button
            w="xs"
            colorScheme="blue"
            variant="solid"
            onClick={handleIncrement}
          >
            +1
          </Button>
        </ButtonGroup>
        <Button w="xs" colorScheme="green" variant="solid" onClick={handleAdd}>
          +{bulk}
        </Button>
      </Box>
    </Box>
  );
};

export default CounterBoard;
