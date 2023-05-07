import type { FC } from 'react';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import type { IAreaCode } from 'domains';
import { Link } from 'react-router-dom';

type Props = { areas: IAreaCode[]; my?: number | string };

const UsersIndex: FC<Props> = ({ areas, my = 0 }) => (
  <Box my={my}>
    <Heading as="h2" size="lg">
      Users
    </Heading>
    <UnorderedList mt={8} spacing={2}>
      {areas.map((area) => (
        <ListItem key={area.id}>
          <Link to={`/users/${area.id}`}>AREA:{area.name}</Link>
        </ListItem>
      ))}
      <ListItem>
        <Link to={`/users`}>All Users</Link>
      </ListItem>
    </UnorderedList>
  </Box>
);

export default UsersIndex;
