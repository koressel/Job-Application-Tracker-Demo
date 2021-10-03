import React from "react";

class EditModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          position: '',
          company: '',
          date: '',
          applied: false,
          response: false,
          interview: false,
          notes: ''
        }

        this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
        this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
        this.handlePositionInput = this.handlePositionInput.bind(this);
        this.handleCompanyInput = this.handleCompanyInput.bind(this);
        this.handleDateInput = this.handleDateInput.bind(this);
        this.handleAppliedCheckbox = this.handleAppliedCheckbox.bind(this);
        this.handleResponseCheckbox = this.handleResponseCheckbox.bind(this);
        this.handleInterviewCheckbox = this.handleInterviewCheckbox.bind(this);
        
    }

    handleDeleteButtonClick(e) {
      this.props.deleteApplication(this.props.currentApplication.id);
    }

    handleCloseButtonClick(e) {
        this.props.closeModal('edit-modal');
    }

    handleSubmitButtonClick(e) {
      e.preventDefault();

      // check for a difference, return, and close edit modal
      let formData = new FormData(document.querySelector('#edit-application-form'));
      let a = this.props.currentApplication;
      
      console.log(formData.get('position'));
      console.log(a)
    }

    componentDidUpdate(prevProps) {
      if (this.props.toggle === 'show' && prevProps.toggle === 'hidden') {
        this.handlePreFillModalInputsOnOpen();
      }
    }

    handlePreFillModalInputsOnOpen() {
      this.setState({
        position: this.props.currentApplication.position,
        company: this.props.currentApplication.company,
        date: this.props.currentApplication.date,
        applied: this.props.currentApplication.applied,
        response: this.props.currentApplication.response,
        interview: this.props.currentApplication.interview
      })
    }

    handlePositionInput(e) {
      this.setState({
        position: e.target.value
      })
    }

    handleCompanyInput(e) {
      this.setState({
        company: e.target.value
      })
    }

    handleDateInput(e) {
      this.setState({
        date: e.target.value
      })
    }

    handleAppliedCheckbox(e) {
      this.setState({
        applied: e.target.checked
      })
    }

    handleResponseCheckbox(e) {
      this.setState({
        response: e.target.checked
      })
    }

    handleInterviewCheckbox(e) {
      this.setState({
        interview: e.target.checked
      })
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
          <input type="text" id="edit-position" name="position" value={this.state.position} onChange={this.handlePositionInput}/>
          <label htmlFor="company">Company</label>
          <input type="text" id="edit-company" name="company" value={this.state.company} onChange={this.handleCompanyInput}/>
          <label htmlFor="date">Date</label>
          <input type="date" id="edit-date" name="date" value={this.state.date} onChange={this.handleDateInput}/>
          <div className="status-container">
            <input type="checkbox" className="status-cb"  id="edit-applied-status" name="applied-status" checked={this.state.applied} onChange={this.handleAppliedCheckbox}/>
            <label htmlFor="applied-status">Applied</label>
            <input type="checkbox" className="status-cb"  id="edit-response-status" name="response-status" checked={this.state.response} onChange={this.handleResponseCheckbox} />
            <label htmlFor="response-status">Response</label>
            <input type="checkbox" className="status-cb"  id="edit-interview-status" name="interview-status" checked={this.state.interview} onChange={this.handleInterviewCheckbox} />
            <label htmlFor="interview-status">Interview</label>
          </div>
          <label htmlFor="notes">Notes</label><br/>
          <textarea id="edit-notes" name="notes" value={this.props.currentApplication.notes}></textarea>
          <button id="edit-submit-btn" type="submit" onClick={this.handleSubmitButtonClick}>Save</button>
          <button id="delete-btn" type="button" onClick={this.handleDeleteButtonClick}>Delete</button>
        </div>
      </form>
      )
  }
}

export default EditModal;