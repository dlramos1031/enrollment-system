import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-white font-bold text-lg mb-4">Hello, Dave!</h1>
        <nav className="space-y-2">
          <Link to="/Admission" className="text-white hover:bg-gray-700 px-4 py-2 rounded block">Admission</Link>
          <Link to="/Enrollment" className="text-white hover:bg-gray-700 px-4 py-2 rounded block">Enrollment</Link>
          <Link to="/Profile" className="text-white hover:bg-gray-700 px-4 py-2 rounded block">Profile</Link>
          <a href="../Login"></a>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <p className="text-gray-300 text-sm">&copy; 2024 My Dashboard</p>
      </div>
    </div>
  );
};

export default Sidebar;
