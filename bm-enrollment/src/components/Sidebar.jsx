import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '250px', minHeight: '100vh', position: 'fixed' }}>
      <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4">Dashboard</span>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/Enrollment"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'link-dark'}`}
          >
            Enrollment
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/Application"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'link-dark'}`}
          >
            Application
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Profile"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'link-dark'}`}
          >
            Profile
          </NavLink>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <NavLink to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://via.placeholder.com/40" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>Username</strong>
        </NavLink>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li><NavLink className="dropdown-item" to="#">Settings</NavLink></li>
          <li><NavLink className="dropdown-item" to="#">Profile</NavLink></li>
          <li><hr className="dropdown-divider" /></li>
          <li><NavLink className="dropdown-item" to="#">Sign out</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;