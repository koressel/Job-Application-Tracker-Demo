import React from "react";

class Applications extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      let apps = this.props.applications;
      return (
        <content id="applications-container">
        <div id="flex-container">
            {apps.map((a, i) => {
                return (
                    <div className="applications" data-id="">
                    <h2>a.position</h2>
                    <p className="company"></p>
                    <p className="date">
                        <span className="sub-text">&nbsp;Date Applied</span>
                    </p>
                    <div className="status-container">
                        <input type="checkbox" className="status-cb"  id="applied-status" name="applied-status" checked/>
                        <input type="checkbox" className="status-cb"  id="applied-status" name="applied-status" />
                        <label htmlFor="applied-status">Applied</label>
                        <input type="checkbox" className="status-cb"  id="response-status" name="response-status" checked/>
                        <input type="checkbox" className="status-cb"  id="response-status" name="response-status"/>
                        <label htmlFor="response-status">Response</label>
                        <input type="checkbox" className="status-cb"  id="interview-status" name="interview-status" checked/>
                        <input type="checkbox" className="status-cb"  id="interview-status" name="interview-status"/>
                        <label htmlFor="interview-status">Interview</label>
                    </div>
                    <div className="files-container">
                        <h3>Files</h3>
                    </div>
                    <h3>Notes</h3>
                    <div className="notes-container">
                        <p>&nbsp;</p>
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