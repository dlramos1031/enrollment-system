// Dashboard.jsx
import { StickyNote, LogOut, CircleUserRound } from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useUser } from '../contexts/UserContext';

function Dashboard() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  useEffect(() => {
    if (!user || !user.user_id) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<CircleUserRound size={20} />} text="Profile" alert to="/dashboard/profile" />
        <SidebarItem icon={<StickyNote size={20} />} text="Enrollment" alert to="/dashboard/enrollment" />
        <SidebarItem icon={<StickyNote size={20} />} text="Application" alert to="/dashboard/application" />
        <SidebarItem icon={<StickyNote size={20} />} text="Application List" alert to="/dashboard/applist" />
        <hr className="my-3" />
        <SidebarItem icon={<LogOut size={20} />} text="Log Out" to="/login" onClick={handleLogout} />
      </Sidebar>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;