import { Route, Routes } from 'react-router-dom';
import Companies from '../pages/Companies';
import NewCompanie from '../pages/NewCompanie';
import UserDetails from '../pages/UserDetails';
import Users from '../pages/Users';
import CompaniesDetails from '../pages/CompanieDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import Videos from '../pages/Video';
import MissingVideo from '../pages/MissingVideo';
import Search from '../pages/MobileSearch';

export const ModeratorRoute = () => {
  return (
    <Routes>
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/details/:id" element={<UserDetails />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/companies/add" element={<NewCompanie />} />
      <Route path="/companies/details/:id" element={<CompaniesDetails />} />
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<Videos />} />
      <Route path="Not-found" element={<MissingVideo />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export const UserRoute = () => (
  <Routes>
    <Route path="/profile/:id" element={<Profile />} />
    <Route path="/" element={<Home />} />
    <Route path="/video/:id" element={<Videos />} />
    <Route path="Not-found" element={<MissingVideo />} />
    <Route path="/search" element={<Search />} />
  </Routes>
);

export const AnonymousRoute = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/video/:id" element={<Videos />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Register />} />
    <Route path="Not-found" element={<MissingVideo />} />
    <Route path="/search" element={<Search />} />
  </Routes>
);
