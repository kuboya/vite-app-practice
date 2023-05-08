import { Navigate, Route, Routes } from 'react-router-dom';
import AllUsers from 'components/ecosystems/AllUsers';
import UsersListByArea from 'components/ecosystems/UsersListByArea';
import UsersFrame from 'components/templates/UsersFrame';
import UsersHome from 'components/templates/UsersHome';

const UsersRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="users" element={<UsersFrame />}>
        <Route path="" element={<AllUsers my={12} />} />
        <Route path=":areaId" element={<UsersListByArea my={12} />} />
      </Route>
      <Route path="/" element={<UsersHome />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default UsersRoutes;
