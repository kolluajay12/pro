import React,{useState} from 'react'
import IncidentItem from './IncidentItem';
import ReportIncidentForm from './ReportIncidentForm';
const IncidentDashboard = ({initialIncidents}) => {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const filtered = incidents.filter((i) => 
    filter === "All" || i.severity === filter
  );

  const sorted = [...filtered].sort((a,b) => {
    return sortOrder === "Newest" ? new Date(b.reported_at) - new Date(a.reported_at)
    : new Date(a.reported_at) - new Date(b.reported_at);
  });

  const addIncident = (newIncident) => {
    setIncidents([{...newIncident,id: Date.now()},...incidents]);
  };

  return (
    <div className='dashboard-container'>
      <h1>AI Safety Incident Dashboard</h1>
      <div className="controls">
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>
      {sorted.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
      <ReportIncidentForm onSubmit={addIncident} />
    </div>
  )
}

export default IncidentDashboard
