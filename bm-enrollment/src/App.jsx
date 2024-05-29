import './App.css'
import Sidebar from './components/Sidebar';
function App() {

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <h1>Welcome to the Dashboard</h1>
        <p>This is a simple dashboard layout with a sidebar using React, Vite, and Bootstrap.</p>
        {/* Add your dashboard content here */}
      </div>
    </div>
  )
}

export default App
