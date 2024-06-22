import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components and pages
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Home from "./components/pages/Home";
import AppForm from "./components/pages/AppForm";
import AppList from "./components/pages/AppList";
import EnrollmentForm from "./components/pages/EnrollmentForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="appform" element={<AppForm />} />
          <Route path="applist" element={<AppList />} />
          <Route path="enrollment" element={<EnrollmentForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
