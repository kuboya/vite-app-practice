import { type FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Users: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h2>Profile</h2>
        <Outlet />
      </div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </>
  );
};

export default Users;
