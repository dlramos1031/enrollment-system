import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Admission from './pages/Admission';
import Enrollment from './pages/Enrollment';
import Profile from './pages/Profile';
import Login from './Login';

export default function Dashboard() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-10">
          <Routes location={location} key={location.pathname}>
            <Route path="/Admission" element={<Admission />} />
            <Route path="/Enrollment" element={<Enrollment />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
