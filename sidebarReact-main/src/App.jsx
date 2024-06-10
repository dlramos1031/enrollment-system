// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Enrollment from './components/Enrollment';
import Application from './components/Application';
import Login from './components/Login';
import Register from './components/Register';
import ApplicationList from './components/ApplicationList';
import { UserProvider } from './contexts/UserContext';
import './App.css'; // background
import DashboardMain from './components/DashboardMain';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="background"></div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<DashboardMain />} />
            <Route path="profile" element={<Profile />} />
            <Route path="main" element={<DashboardMain />} />
            <Route path="enrollment" element={<Enrollment />} />
            <Route path="application" element={<Application />} />
            <Route path="applist" element={<ApplicationList />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
