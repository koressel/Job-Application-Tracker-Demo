import React from 'react';
import './App.css';
import Applications from './components/applications';
import EditModal from './components/editmodal';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      applications: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
      currentApplication: {},
      newModalToggle: 'hidden',
      editModalToggle: 'hidden',
    };

    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
  }

  openEditModal(applicationId) {
    const applicationData = this.state.applications.find(a => a.id == applicationId);
      this.setState({
        editModalToggle: 'show',
        currentApplication: applicationData
      });
  }

  closeEditModal() {
    this.setState({editModalToggle: 'hidden'});
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
      {/* <form id="new-application-form" className="modal input-form outline" name="newApplicationForm" onSubmit="return false">
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
      </form> */}
     
      
      {/* <Searchbar></Searchbar>
      <CreateApplicationsModal></CreateApplicationsModal>
     */}
      <EditModal
        toggle={this.state.editModalToggle}
        currentApplication={this.state.currentApplication}
        applications={this.state.applications}
        closeEditModal={this.closeEditModal}
      ></EditModal> 
      <Applications 
          applications={this.state.applications}
          openEditModal={this.openEditModal}
      ></Applications>

    </div>
    )
  }
}

export default Dashboard;
