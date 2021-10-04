import React from "react";

class Applications extends React.Component {
    constructor(props) {
        super(props);

        this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
    }

    handleEditButtonClick(e) {
        const applicationId = e.target.parentElement.getAttribute("data-id");
        this.props.openEditModal(applicationId);
    }

  render() {
      let apps = this.props.applications;
      apps.map((a, i) => {
        if (a.applied) {
            a.appliedCheckbox = <input type="checkbox" className="status-cb"  id="applied-status" name="applied-status" checked/>;
        }
        else {
            a.appliedCheckbox = <input type="checkbox" className="status-cb"  id="applied-status" name="applied-status"/>;
        }

        if (a.response) {
            a.responseCheckbox =   <input type="checkbox" className="status-cb"  id="response-status" name="response-status" checked/>;
        }
        else {
            a.responseCheckbox = <input type="checkbox" className="status-cb"  id="response-status" name="response-status"/>;
        }

        if (a.interview) {
            a.interviewCheckbox =   <input type="checkbox" className="status-cb"  id="interview-status" name="interview-status" checked/>;
        }
        else {
            a.interviewCheckbox = <input type="checkbox" className="status-cb"  id="interview-status" name="interview-status"/>;
        }
      });
      return (
        <div id="applications-container">
        <div id="flex-container">
            {apps.map((a, i) => {
                let fileElems = [];
                if (a.files == null) {
                    fileElems = <div className="files-container">
                    <h3>Files</h3>
                    <a href="./files/Resume.pdf" target="_blank">Resume.pdf</a>
                    <a href="./files/coverletter.pdf" target="_blank">CoverLetter.pdf</a>
                </div>;
                }
                else {
                    fileElems = <div className="files-container">
                        <h3>Files</h3>
                        {a.files.map((f, i) => {
                            return <a href={URL.createObjectURL(f)} target="_blank">{f.name}</a>
                        })}
                    </div>
                }
                return (
                    <div className="applications" data-id={a.id}>
                    <h2>{a.position}</h2>
                    <p className="company">{a.company}</p>
                    <p className="date">
                        {a.date}<span className="sub-text">&nbsp;Date Applied</span>
                    </p>
                    <div className="status-container">
                       {a.appliedCheckbox}
                        <label htmlFor="applied-status">Applied</label>
                        {a.responseCheckbox}
                        <label htmlFor="response-status">Response</label>
                        {a.interviewCheckbox}
                        <label htmlFor="interview-status">Interview</label>
                    </div>
                    {fileElems}
                    <h3>Notes</h3>
                    <div className="notes-container">
                        <p>{a.notes}&nbsp;</p>
                    </div>
                    <button id="open-edit-modal-btn" className="edit-application-btn" onClick={this.handleEditButtonClick}>Edit</button>
                    </div>
                )
            })}
            
        </div>
      </div>
      )
  }
}

export default Applications;