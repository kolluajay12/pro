import { useState } from "react";
import IncidentDashboard from "./components/IncidentDashboard";
import {mockIncidents} from './mockData';
import { FaMoon, FaSun } from "react-icons/fa";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`app ${darkMode ? "dark": ""}`}>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <IncidentDashboard initialIncidents={mockIncidents} />
    </div>
  );
}

export default App;
