import React from "react";

class Applications extends React.Component {
  render() {
      let apps = this.props.applications;
      apps.map((a, i) => {
        if (a.applied) {
            a.applied = <input type="checkbox" className="status-cb"  id="applied-status" name="applied-status" checked/>;
        }
        else {
            a.applied = <input type="checkbox" className="status-cb"  id="applied-status" name="applied-status"/>;
        }

        if (a.response) {
            a.response =   <input type="checkbox" className="status-cb"  id="response-status" name="response-status" checked/>;
        }
        else {
            a.response = <input type="checkbox" className="status-cb"  id="response-status" name="response-status"/>;
        }

        if (a.interview) {
            a.interview =   <input type="checkbox" className="status-cb"  id="interview-status" name="interview-status" checked/>;
        }
        else {
            a.interview = <input type="checkbox" className="status-cb"  id="interview-status" name="interview-status"/>;
        }
      });
      return (
        <content id="applications-container">
        <div id="flex-container">
            {apps.map((a, i) => {
                return (
                    <div className="applications" data-id="">
                    <h2>{a.position}</h2>
                    <p className="company">{a.company}</p>
                    <p className="date">
                        {a.date}<span className="sub-text">&nbsp;Date Applied</span>
                    </p>
                    <div className="status-container">
                       {a.applied}
                        <label htmlFor="applied-status">Applied</label>
                        {a.response}
                        <label htmlFor="response-status">Response</label>
                        {a.interview}
                        <label htmlFor="interview-status">Interview</label>
                    </div>
                    <div className="files-container">
                        <h3>Files</h3>
                        <a href="#">{a.filenames.substr(0, a.filenames.indexOf(","))}</a>
                        <a href="#">{a.filenames.substring(a.filenames.indexOf(","))}</a>
                    </div>
                    <h3>Notes</h3>
                    <div className="notes-container">
                        <p>{a.notes}&nbsp;</p>
                    </div>
                    <button id="open-edit-modal-btn" className="edit-application-btn">Edit</button>
                    </div>
                )
            })}
            
        </div>
      </content>
      )
  }
}

export default Applications;