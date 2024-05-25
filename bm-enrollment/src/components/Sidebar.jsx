import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-white font-bold text-lg mb-4">Hello, Dave!</h1>
        <nav className="space-y-2">
          <Link to="/" className="text-white hover:bg-gray-700 px-4 py-2 rounded block">Dashboard</Link>
          <Link to="/page1" className="text-white hover:bg-gray-700 px-4 py-2 rounded block">Page 1</Link>
          <Link to="/page2" className="text-white hover:bg-gray-700 px-4 py-2 rounded block">Page 2</Link>
          <Link to="/page3" className="text-white hover:bg-gray-700 px-4 py-2 rounded block">Page 3</Link>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <p className="text-gray-300 text-sm">&copy; 2024 My Dashboard</p>
      </div>
    </div>
  );
};

export default Sidebar;
