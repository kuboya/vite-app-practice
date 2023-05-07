import { type FC } from 'react';
import {
  Avatar,
  Box,
  Flex,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import type { IUser } from 'domains';

type Props = { users: IUser[]; color?: string; isLoading?: boolean };

const UsersList: FC<Props> = ({
  users = [],
  color = 'teal.500',
  isLoading = false,
}) => {
  return (
    <>
      {isLoading ? (
        <Flex my={14} h="20rem" justify="center" align="center">
          <Spinner size="xl" color={color} />
        </Flex>
      ) : (
        <List my={10}>
          {users.map((user) => (
            <ListItem key={user.id} m={6}>
              <Flex>
                <Avatar size="md" bg={color} />
                <Box textAlign="left" ml={3}>
                  <Text>{user.name}</Text>
                  <Text as="span">CLASS:{user.class}</Text>
                  <Text as="span" ml={2}>
                    LV:{user.level ?? '???'}
                  </Text>
                </Box>
              </Flex>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
export default UsersList;
