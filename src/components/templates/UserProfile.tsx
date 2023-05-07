import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>User Profile</div>
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

export default UserProfile;
