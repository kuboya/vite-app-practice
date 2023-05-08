import { type FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { userData } from 'data';
import { Helmet } from 'react-helmet-async';
import UsersList from 'components/organisms/UsersList';

const SORT = {
  ascending: 'ascending',
  descending: 'descending',
};

type Props = { sortType?: keyof typeof SORT; my?: number | string };

const AllUsers: FC<Props> = ({ sortType = 'ascending', my = 0 }) => {
  const users = userData.sort((a, b) => {
    if (sortType === SORT.ascending) {
      return a.id - b.id;
    }

    return b.id - a.id;
  });

  return (
    <Box my={my} w="2xl">
      <Helmet>
        <title>Users|All|List</title>
      </Helmet>
      <Heading as="h2" size="lg">
        All Users|{SORT[sortType]}
      </Heading>
      <UsersList users={users} color={''} />
    </Box>
  );
};

export default AllUsers;
