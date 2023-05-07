import { type FC } from 'react';
import { Heading, Box } from '@chakra-ui/react';
import { areaData } from 'data';
import { Helmet } from 'react-helmet-async';
import UsersIndex from 'components/organisms/UsersIndex';

const title = 'UsersHome';

const UsersHome: FC = () => (
  <Box maxW="3x1">
    <Helmet>{title}</Helmet>
    <Heading as="h1" size="xl" my={4}>
      {title}
    </Heading>
    <UsersIndex areas={areaData} my={16} />
  </Box>
);

export default UsersHome;
