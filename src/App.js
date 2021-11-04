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
          date: "2021-01-15",
          files: null,
          applied: true,
          response: true, 
          interview: false,
          notes: ""
        },
        {
          id: 2,
          position: "Software Engineer",
          company: "Comma.ai",
          date: "2021-01-18",
          files: null,
          applied: true,
          response: false, 
          interview: true,
          notes: "- Finish online assessment"
        },
        {
          id: 3,
          position: "Vulnerability Analyst",
          company: "YouTube",
          date: "2019-02-11",
          files: null,
          applied: true,
          response: true, 
          interview: false,
          notes: ""
        },
        {
          id: 4,
          position: "Scrum Master",
          company: "Cardano",
          date: "2018-06-22",
          files: null,
          applied: true,
          response: true, 
          interview: true,
          notes: "- Email CV to hiring manager"
        },
        {
          id: 5,
          position: "Full Stack Developer",
          company: "Honda Motor Company",
          date: "2018-03-10",
          files: null,
          applied: true,
          response: true, 
          interview: true,
          notes: "- Video call at 11am on Thursday"
        },
        {
          id: 6,
          position: "Back End Developer II",
          company: "Amazon Web Services Inc.",
          date: "2018-01-29",
          files: null,
          applied: true,
          response: true, 
          interview: false,
          notes: ""
        }
      ],
      currentApplication: {},
      newModalToggle: 'hidden',
      editModalToggle: 'hidden',
      applicationOrder: 'desc'
    };
    this.closeModal = this.closeModal.bind(this);
    this.openNewModal = this.openNewModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.createApplication = this.createApplication.bind(this);
    this.deleteApplication = this.deleteApplication.bind(this);
    this.updateApplication = this.updateApplication.bind(this);
    this.handleOrderSelectChange = this.handleOrderSelectChange.bind(this);
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
    data.id = this.state.applications.length + 1;
    const applications = this.state.applications;
    applications.push(data);
    this.setState({
      applications: applications,
      newModalToggle: 'hidden'
    })
  }

  deleteApplication(id) {
    let applications = this.state.applications;
    delete applications[id - 1];
    this.setState({
      editModalToggle: 'hidden',
      applications: applications
    });
  }

  updateApplication(data) {
    console.log(data)
    let applications = this.state.applications;
    let result = applications.map(obj => {
      if (Number(data.id) === Number(obj.id)) {
        return data;
      }
      return obj;
    });
    console.log("new State: ", result)
    this.setState({
      applications: result
    })
  }

  handleOrderSelectChange(e) {
    console.log('changed')
    this.setState({
      applicationOrder: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div id="demo-note">
          <p>This is just a demo. Go to <a href="https://github.com/koressel/Job-Application-Tracker" target="_blank">github.com/koressel/job-application-tracker</a> to download and learn more.</p>
        </div>
        {
          // TODO : Containerize header
        }
      <header>
        <h1>Job Applications</h1>
        <button id="open-new-modal-btn"className="nav-item" onClick={this.openNewModal}>Create New</button>
        <p className="nav-item">Order By <select id="filter" onChange={this.handleOrderSelectChange}>
          <option value="desc">Date (Newest)</option>
          <option value="asc">Date (Oldest)</option>
        </select>
      </p>
      </header>
     
     <NewModal
        toggle={this.state.newModalToggle}
        closeModal={this.closeModal}
        createApplication={this.createApplication}
     ></NewModal>
      <EditModal
        toggle={this.state.editModalToggle}
        currentApplication={this.state.currentApplication}
        closeModal={this.closeModal}
        deleteApplication={this.deleteApplication}
        updateApplication={this.updateApplication}
      ></EditModal> 
      <div className="container">
        <div className="row">
        <Applications 
          applications={this.state.applications}
          openEditModal={this.openEditModal}
          applicationOrder={this.state.applicationOrder}
      ></Applications>
        </div>
      </div>
   

    </div>
    )
  }
}

export default Dashboard;
