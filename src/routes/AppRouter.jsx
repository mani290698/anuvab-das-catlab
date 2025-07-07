import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Contact from '../pages/Join Us/JoinUs';
import Team from '../pages/Team/Team';
import Research from '../pages/Research/Research';
import Publications from '../pages/Publications/Publications';
import FullProfile from '../pages/Profile/Profile';
import Resource from '../pages/Resources/Resource';
import JoinUs from '../pages/Join Us/JoinUs';

function AppRouter({ location }) {
  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/join us" element={<JoinUs />} />
      <Route path="/team" element={<Team />} />
      <Route path="/research" element={<Research />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/anuvab" element={<FullProfile />} />
      <Route path="/resources" element={<Resource />} />
    </Routes>
  );
}

export default AppRouter;