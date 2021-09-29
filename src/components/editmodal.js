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
      return (
        <form id="edit-application-form" className={this.props.toggle + " modal input-form outline"} onSubmit="return false">
        <div id="edit-modal-content" className="modal-content">
          <button id="close-edit-modal-btn" type="button" onClick={this.handleCloseButtonClick}>&times;</button>
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
      )
  }
}

export default EditModal;