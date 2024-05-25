import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardPage from './components/DashboardPage';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';

export default function Dashboard() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-10">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
