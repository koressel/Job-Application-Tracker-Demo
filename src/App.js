import React from 'react';
import './App.css';
import Applications from './components/applications';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      applications: [
        {
          position: "Tech Lead",
          company: "Dr. Martens",
          date: "2021-04-15",
          filenames: "Resume.pdf, CoverLetter.pdf",
          applied: true,
          response: true, 
          interview: false,
          notes: ""
        },
        {
          position: "Software Engineer",
          company: "Comma.ai",
          date: "2021-04-16",
          filenames: "Resume.pdf, CoverLetter.pdf",
          applied: true,
          response: false, 
          interview: true,
          notes: "- Finish online assessment"
        },
        {
          position: "Vulnerability Analyst",
          company: "YouTube",
          date: "2021-02-11",
          filenames: "Resume.pdf, CoverLetter.pdf",
          applied: true,
          response: true, 
          interview: false,
          notes: ""
        }
      ],

    }
  }

  render() {
  

    return (
      <div className="App">
      <header>
        <h1>Job Applications</h1>
        <button id="open-new-modal-btn"className="nav-item">Create New</button>
        <p className="nav-item">Filter By <select id="filter">
          <option>Date</option>
          <option>Position</option>
          <option>Applied</option>
          <option>Response received</option>
          <option>Interview offered</option>
        </select>
      </p>
      <div id="search-container">
          <input type="text" placeholder="Search"/>
          <i className="fas fa-search"></i>
      </div>
      </header>
      <form id="new-application-form" className="modal input-form outline" name="newApplicationForm" onSubmit="return false">
        <div id="new-modal-content" className="modal-content">
          <button id="close-new-modal-btn" type="button">&times;</button>
          <h1>Create New</h1>
          <hr/>
          <label htmlFor="position">Position</label>
          <input type="text" id="new-position" name="position" value="TEST"/>
          <label htmlFor="company">Company</label>
          <input type="text" id="new-company" name="company" value="TEST TEST"/>
          <label htmlFor="date">Date</label>
          <input type="date" id="new-date" name="date" value="2021-09-02"/>
          <div className="status-container">
            <input type="checkbox" className="status-cb"  id="new-applied-status" name="applied-status" />
            <label htmlFor="applied-status">Applied</label>
            <input type="checkbox" className="status-cb"  id="new-response-status" name="response-status"/>
            <label htmlFor="response-status">Response</label>
            <input type="checkbox" className="status-cb"  id="new-interview-status" name="interview-status"/>
            <label htmlFor="interview-status">Interview</label>
        </div>
          <label htmlFor="files">Files</label>
          <input id="new-upload" type="file" name="applicationFiles" multiple/>
          <div id="fileNameOutput"></div>
          <label htmlFor="notes">Notes</label>
          <textarea id="new-notes" name="notes">THIS IS A TEST</textarea>
          <button id="new-submit-btn" type="submit">Create</button>
        </div>
      </form>
      <form id="edit-application-form" className="modal input-form outline" onSubmit="return false">
        <div id="edit-modal-content" className="modal-content">
          <button id="close-edit-modal-btn" type="button">&times;</button>
          <h1>Edit</h1>
          <hr/>
          <label htmlFor="position">Position</label>
          <span id="edit-id" className="hidden"></span>
          <input type="text" id="edit-position" name="position"/>
          <label htmlFor="company">Company</label>
          <input type="text" id="edit-company" name="company"/>
          <label htmlFor="date">Date</label>
          <input type="date" id="edit-date" name="date"/>
          <div className="status-container">
              <input type="checkbox" className="status-cb"  id="edit-applied-status" name="applied-status" />
            <label htmlFor="applied-status">Applied</label>
              <input type="checkbox" className="status-cb"  id="edit-response-status" name="response-status"/>
            <label htmlFor="response-status">Response</label>
              <input type="checkbox" className="status-cb"  id="edit-interview-status" name="interview-status"/>
            <label htmlFor="interview-status">Interview</label>
          </div>
          <label htmlFor="notes">Notes</label><br/>
          <textarea id="edit-notes" name="notes"></textarea>
          <button id="edit-submit-btn" type="submit">Save</button>
          <button id="delete-btn" type="button">Delete</button>
        </div>
      </form>
      
      {/* <Searchbar></Searchbar>
      <CreateApplicationsModal></CreateApplicationsModal>
      <EditApplicationsModal></EditApplicationsModal> */}
      <Applications applications={this.state.applications}></Applications>

    </div>
    )
  }
}

export default Dashboard;
