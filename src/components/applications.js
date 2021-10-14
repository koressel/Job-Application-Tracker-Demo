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

    // TODO : Fix application rendering errors
      let apps = this.props.applications;
      console.log("Apps",apps, Object.prototype.toString.call(apps) == '[object Array]')
      if (this.props.applicationOrder === 'asc') {
        apps = apps.sort((a, b) => new Date (b.date) - new Date (a.date)).reverse();
      }
      if (this.props.applicationOrder === 'desc') {
        apps = apps.sort((a, b) => new Date (b.date) - new Date (a.date));
      }

      let appElements = apps.map((app, index) => {
        let fileElems = [];

        if (app.files == null) {
            fileElems = <div className="files-container">
            <h3>Files</h3>
            <a href="./files/Resume.pdf" target="_blank">Resume.pdf</a>
            <a href="./files/coverletter.pdf" target="_blank">CoverLetter.pdf</a>
        </div>;
        }
        else {
            fileElems = <div className="files-container">
                <h3>Files</h3>
                {app.files.map((f, i) => {
                    return <a href={URL.createObjectURL(f)} target="_blank">{f.name}</a>
                })}
            </div>
        }
        return (
            <div className="col col-sm-12 col-md-5 col-lg-3">
            <div className="applications" data-id={app.id}>
                <h2>{app.position}</h2>
                <p className="company">{app.company}</p>
                <p className="date">
                    {app.date}<span className="sub-text">&nbsp;Date Applied</span>
                </p>
                <div className="status-container">
                <input type="checkbox" className="status-cb"  id="applied-status" name="applied-status" checked={JSON.parse(app.applied)}/>;
                    <label htmlFor="applied-status">Applied</label>
                    <input type="checkbox" className="status-cb"  id="response-status" name="response-status" checked={JSON.parse(app.response)}/>;
                    <label htmlFor="response-status">Response</label>
                    <input type="checkbox" className="status-cb"  id="interview-status" name="interview-status" checked={JSON.parse(app.interview)}/>;
                    <label htmlFor="interview-status">Interview</label>
                </div>
                {fileElems}
                <h3>Notes</h3>
                <div className="notes-container">
                    <p>{app.notes}&nbsp;</p>
                </div>
                <button id="open-edit-modal-btn" className="edit-application-btn" onClick={this.handleEditButtonClick}>Edit</button>
            </div>
        </div>
        )
      });
      console.log("App Elements",appElements, Object.prototype.toString.call(appElements) == '[object Array]')
      return (
        appElements
       )
  }
}

export default Applications;