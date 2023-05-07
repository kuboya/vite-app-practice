import { type FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home: FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Top Page</Link>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { textDecoration: 'underline' } : undefined
          }
        >
          About this site.
        </NavLink>
      </li>
      <li>
        <Link
          to={{
            pathname: 'contact',
            search: '?from=here',
            hash: '#subject',
          }}
          state={{ secretCode: '8yUfa)KECH' }}
        >
          Contact Form
        </Link>
      </li>
      <li>
        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          FAQ
        </NavLink>
      </li>
      <li>
        <Link to="/anywhere" replace>
          Other
        </Link>
      </li>
    </ul>
  </nav>
);

export default Home;
