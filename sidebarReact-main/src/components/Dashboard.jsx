import { StickyNote, LogOut, CircleUserRound } from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<CircleUserRound size={20} />} text="Profile" alert to="/profile" />
        <SidebarItem icon={<StickyNote size={20} />} text="Enrollment" alert to="/enrollment" />
        <SidebarItem icon={<StickyNote size={20} />} text="Application" alert to="/application" />
        <hr className="my-3" />
        <SidebarItem icon={<LogOut size={20} />} text="Log Out" to="/login" />
      </Sidebar>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
