import React from "react";

class EditModal extends React.Component {
    constructor(props) {
        super(props);

        this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
    }

    handleCloseButtonClick(e) {
        this.props.closeEditModal();
    }

  render() {
      let app = this.props.currentApplication;
        if (app.applied) {
            app.appliedCheckbox = <input type="checkbox" className="status-cb"  id="edit-applied-status" name="applied-status" checked onClick={(() => {return false;})} />;
        }
        else {
            app.appliedCheckbox = <input type="checkbox" className="status-cb"  id="edit-applied-status" name="applied-status" onClick={(() => {return false;})} />
        }

        if (app.response) {
            app.responseCheckbox =  <input type="checkbox" className="status-cb"  id="edit-response-status" name="response-status" checked onClick={(() => {return false;})}  />
        }
        else {
            app.responseCheckbox = <input type="checkbox" className="status-cb"  id="edit-response-status" name="response-status" onClick={(() => {return false;})} />
        }

        if (app.interview) {
            app.interviewCheckbox =  <input type="checkbox" className="status-cb"  id="edit-interview-status" name="interview-status" checked onClick={(() => {return false;})} />
        }
        else {
            app.interviewCheckbox =  <input type="checkbox" className="status-cb"  id="edit-interview-status" name="interview-status" onClick={(() => {return false;})} />
        }

      return (
        <form id="edit-application-form" className={this.props.toggle + " modal input-form outline"} onSubmit="return false">
        <div id="edit-modal-content" className="modal-content">
          <button id="close-edit-modal-btn" type="button" onClick={this.handleCloseButtonClick}>&times;</button>
          <h1>Edit</h1>
          <hr/>
          <label htmlFor="position">Position</label>
          <span id="edit-id" className="hidden"></span>
          <input type="text" id="edit-position" name="position" value={this.props.currentApplication.position}/>
          <label htmlFor="company">Company</label>
          <input type="text" id="edit-company" name="company" value={this.props.currentApplication.company}/>
          <label htmlFor="date">Date</label>
          <input type="date" id="edit-date" name="date" value={this.props.currentApplication.date}/>
          <div className="status-container">
              {app.appliedCheckbox}
            <label htmlFor="applied-status">Applied</label>
            {app.responseCheckbox}
            <label htmlFor="response-status">Response</label>
            {app.interviewCheckbox}
            <label htmlFor="interview-status">Interview</label>
          </div>
          <label htmlFor="notes">Notes</label><br/>
          <textarea id="edit-notes" name="notes">{this.props.currentApplication.notes}</textarea>
          <button id="edit-submit-btn" type="submit">Save</button>
          <button id="delete-btn" type="button">Delete</button>
        </div>
      </form>
      )
  }
}

export default EditModal;