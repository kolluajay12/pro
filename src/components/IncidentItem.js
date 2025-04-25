import React, { useState } from 'react'

const IncidentItem = ({incident}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className='incident-car'>
      <div className="incident-summary">
        <strong>{incident.title}</strong>
        <p>
          Severity: <span className={`severity ${incident.severity}`}>{incident.severity}</span>
        </p>
        <p>
          Reported: {new Date(incident.reported_at).toLocaleString()}
        </p>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide Details" : "View Details"}
        </button>
      </div>
      {
        expanded && <p className='incident-description'>{incident.description}</p>
      }
    </div>
  )
}

export default IncidentItem
