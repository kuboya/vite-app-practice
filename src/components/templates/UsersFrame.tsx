import { type FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import HomeButton from 'components/organisms/HomeButton';

const UsersFrame: FC = () => {
  return (
    <Box maxW="3x1">
      <header>
        <Heading as="h1" size="xl" my={4}>
          Users
        </Heading>
      </header>
      <Outlet />
      <HomeButton my={16} />
    </Box>
  );
};

export default UsersFrame;
