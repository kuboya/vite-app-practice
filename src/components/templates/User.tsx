import { type FC } from 'react';
import { useMatch, useNavigate, useParams } from 'react-router-dom';

const User: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const match = useMatch('user/:userId');
  const unmatch = useMatch('user/ben');
  console.log(params);
  console.log(match);
  console.log(unmatch);

  return (
    <>
      <div>User</div>
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

export default User;
