import React,{useState} from 'react';

const ReportIncidentForm = ({onSubmit}) => {
  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !description || !severity) return;
    onSubmit({title,description,severity, reported_at: new Date().toISOString()});
    setTitle("");
    setDescription("");
    setSeverity("");
  }
  return (
    <form className='report-form' onSubmit={handleSubmit}>
      <h2>Report New Incident</h2>
      <div className="form-group">
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Severity</label>
        <select value={severity} onChange={(e) => setSeverity(e.target.value)} required>
          <option value="">Select Severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
    <button type="submit">Submit Incident</button>
    </form>
  )
}

export default ReportIncidentForm
