// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Enrollment from './components/Enrollment';
import Application from './components/Application';
import Login from './components/Login';
import Register from './components/Register';
import ApplicationList from './components/ApplicationList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/application" element={<Application />} />
        <Route path="/applist" element={<ApplicationList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
