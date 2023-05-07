import type { FC } from 'react';
// import { PostList, Post } from 'feature/blog';
import { Routes, Route, Navigate } from 'react-router-dom';

import About from 'components/templates/About';
import Home from 'components/templates/Home';
// import PostNotFound from 'components/templates/PostNotFound';
import SelfProfile from 'components/templates/SelfProfile';
import StaffProfile from 'components/templates/StaffProfile';
import User from 'components/templates/User';
import UserProfile from 'components/templates/UserProfile';
import Users from 'components/templates/Users';

const DemoRoutes: FC = () => (
  <Routes>
    <Route path="users" element={<Users />}>
      <Route path="me" element={<SelfProfile />} />
      <Route path=":userId" element={<UserProfile />} />
    </Route>
    <Route path="user">
      <Route path=":userId" element={<User />} />
    </Route>
    <Route path="about" element={<About />} />
    <Route path="staff">
      <Route path=":staffId" element={<StaffProfile />} />
    </Route>
    {/* <Route path="glog">
      <Route path="" element={<PostList />} />
      <Route path="post/*" element={<Post />} />
      <Route path="*" element={<PostNotFound />} />
    </Route> */}
    <Route path="" element={<Home />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default DemoRoutes;
