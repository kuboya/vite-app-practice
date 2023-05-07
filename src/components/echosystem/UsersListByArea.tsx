import { useState, type FC, useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { areaData, userData } from 'data';
import { AREA_CODE } from 'domains';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList';

const UsersListByArea: FC<{ my?: number | string }> = ({ my = 12 }) => {
  const { areaId = '' } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('isLoading', true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('isLoading', false);
    }, 2000);
  }, []);

  if (AREA_CODE.includes(areaId)) {
    const users = userData.filter((user) => user.areaId === areaId);
    const area = areaData.find((area) => area.id === areaId);

    return (
      <Box my={my} w="2x1">
        <Helmet>
          <title>Users|{area?.name}|List</title>
        </Helmet>
        <Heading as="h2" size="lg">
          {area?.name}
        </Heading>
        <UsersList users={users} color={area?.color} isLoading={isLoading} />
      </Box>
    );
  }

  return <Navigate to="/" replace />;
};

export default UsersListByArea;
