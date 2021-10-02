import React from 'react';
import './App.css';
import Applications from './components/applications';
import EditModal from './components/editmodal';
import NewModal from './components/newmodal';

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
    this.closeModal = this.closeModal.bind(this);
    this.openNewModal = this.openNewModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.createApplication = this.createApplication.bind(this);
  }

  openNewModal() {
    this.setState({
      newModalToggle: 'show'
    })
  }

  openEditModal(applicationId) {
    // TODO: this breaks when using strict equality 
    const applicationData = this.state.applications.find(a => a.id == applicationId);
      this.setState({
        editModalToggle: 'show',
        currentApplication: applicationData
      });
  }

  closeModal(name) {
    if (name === 'edit-modal') {
      this.setState({editModalToggle: 'hidden'});
    }
    if (name === 'new-modal') {
      this.setState({newModalToggle: 'hidden'})
    }
  }

  createApplication(data) {
    const applications = this.state.applications;
    applications.push(data);
    this.setState({
      applications: applications
    })
    console.log(this.state.applications)

  }

  render() {
  
    return (
      <div className="App">
      <header>
        <h1>Job Applications</h1>
        <button id="open-new-modal-btn"className="nav-item" onClick={this.openNewModal}>Create New</button>
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
     
     <NewModal
        toggle={this.state.newModalToggle}
        closeModal={this.closeModal}
        createApplication={this.createApplication}
     ></NewModal>
      <EditModal
        toggle={this.state.editModalToggle}
        currentApplication={this.state.currentApplication}
        applications={this.state.applications}
        closeModal={this.closeModal}
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
