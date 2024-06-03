import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Enrollment from '../components/Enrollment';
import Application from '../components/Application';
import Profile from '../components/Profile';

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3" style={{ marginLeft: '250px' }}>
        <Routes>
          <Route path="/Enrollment" element={<Enrollment />} />
          <Route path="/Application" element={<Application />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
