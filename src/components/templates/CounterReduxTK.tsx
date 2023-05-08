import type { FC } from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import CounterTK from 'components/ecosystems/CounterTK';
import CountingBeadsTK from 'components/ecosystems/CountingBeadsTK';

type Props = { pageTitle: string };

const CounterReduxTK: FC<Props> = ({ pageTitle }) => (
  <>
    <Heading size="lg" as="h1" my={8}>
      {pageTitle}
    </Heading>
    <Center>
      <CounterTK />
    </Center>
    <Box w="3xl">
      <CountingBeadsTK />
    </Box>
  </>
);

export default CounterReduxTK;
