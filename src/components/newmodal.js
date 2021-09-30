import React from "react";

class NewModal extends React.Component {
    constructor(props) {
        super(props);

        this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
        this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
    }

    handleSubmitButtonClick(e) {
        e.preventDefault();

        let formData = new FormData(document.querySelector('#new-application-form'));
        
        console.log(formData.getAll("files"))
    }

    handleCloseButtonClick(e) {
        this.props.closeModal("new-modal");
    }

  render() {
      return (
        <form id="new-application-form" className={this.props.toggle + " modal input-form outline"} name="newApplicationForm" >
        <div id="new-modal-content" className="modal-content">
          <button id="close-new-modal-btn" type="button" onClick={this.handleCloseButtonClick}>&times;</button>
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
          <input id="new-upload" type="file" name="files" multiple/>
          <div id="fileNameOutput"></div>
          <label htmlFor="notes">Notes</label>
          <textarea id="new-notes" name="notes">THIS IS A TEST</textarea>
          <button id="new-submit-btn" onClick={this.handleSubmitButtonClick}>Create</button>
        </div>
      </form> 
      )
  }
}

export default NewModal;