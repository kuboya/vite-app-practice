import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

const About: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>About</div>
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

export default About;
