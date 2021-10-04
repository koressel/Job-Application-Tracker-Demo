import React from "react";

class EditModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          id: 0,
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
        this.handleNotesTextarea = this.handleNotesTextarea.bind(this);
    }

    handleDeleteButtonClick(e) {
      this.props.deleteApplication(this.props.currentApplication.id);
    }

    handleCloseButtonClick(e) {
        this.props.closeModal('edit-modal');
    }

    handleSubmitButtonClick(e) {
      e.preventDefault();

      let formData = new FormData(document.querySelector('#edit-application-form'));
      let a = this.props.currentApplication;
      
      // convert checkbox values from 'on' and undefined to booleans
      if (!formData.get('applied')) {
        formData.append('applied', false);
      }
      else {
        formData.set('applied', true)
      }
      if (!formData.get('response')) {
        formData.append('response', false);
      }
      else {
        formData.set('response', true)
      }
      if (!formData.get('interview')) {
        formData.append('interview', false);
      }
      else {
        formData.set('interview', true);
      }

      formData.append('id', this.props.currentApplication.id)
      console.log(this.props.currentApplication)
      // formData.append('files', this.props.currentApplication.files);
      
      
      // compare formData to prop data and update if different
      if (formData.get('position').localeCompare(a.position) !== 0) {
        this.props.updateApplication(formData);
        this.props.closeModal('edit-modal');
      }
      if (formData.get('company').localeCompare(a.company) !== 0) {
        this.props.updateApplication(formData);
        this.props.closeModal('edit-modal');
      }
      if (formData.get('date').localeCompare(a.date) !== 0) {
        this.props.updateApplication(formData);
        this.props.closeModal('edit-modal');
      }
      if (formData.get('applied') === 'true' ? true : false, a.applied) {
        this.props.updateApplication(formData);
        this.props.closeModal('edit-modal');
      }
      if (formData.get('response') === 'true' ? true : false, a.response) {
        this.props.updateApplication(formData);
        this.props.closeModal('edit-modal');
      }
      if (formData.get('interview') === 'true' ? true : false, a.interview) {
        this.props.updateApplication(formData);
        this.props.closeModal('edit-modal');
      }
      if (formData.get('notes').localeCompare(a.notes) !== 0) {
        this.props.updateApplication(formData);
        this.props.closeModal('edit-modal');
      }

      this.props.closeModal('edit-modal');
    

      // switch(formData) {
      //   case (formData.get('position').localeCompare(a.position) !== 0):
      //   case (formData.get('company').localeCompare(a.company) !== 0):
      //   case (formData.get('date').localeCompare(a.date) !== 0):
      //   case (formData.get('applied') !== a.applied):
      //   case (formData.get('response') !== a.response):
      //   case (formData.get('interview') !== a.interview):
      //   case (formData.get('notes').localeCompare(a.notes) !== 0):
      //     this.props.updateApplication(formData);
      //     this.props.closeModal('edit-modal');
      //     break;
      //   default:
      //     this.props.closeModal('edit-modal');
      //     break;
      // }

      // log fd
      // for (let p of formData.entries()) {
      //   console.log(p[0], p[1])
      // }

      // console.log(a)
    }

    componentDidUpdate(prevProps) {
      if (this.props.toggle === 'show' && prevProps.toggle === 'hidden') {
        this.handlePreFillModalInputsOnOpen();
      }
    }

    handlePreFillModalInputsOnOpen() {
      this.setState({
        id: this.props.currentApplication.id,
        position: this.props.currentApplication.position,
        company: this.props.currentApplication.company,
        date: this.props.currentApplication.date,
        applied: this.props.currentApplication.applied,
        response: this.props.currentApplication.response,
        interview: this.props.currentApplication.interview,
        notes: this.props.currentApplication.notes
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

    handleNotesTextarea(e) {
      this.setState({
        notes: e.target.value
      })
    }

  render() {
      return (
        <form id="edit-application-form" className={this.props.toggle + " modal input-form outline"}>
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
            <input type="checkbox" className="status-cb"  id="edit-applied-status" name="applied" checked={this.state.applied} onChange={this.handleAppliedCheckbox}/>
            <label htmlFor="applied">Applied</label>
            <input type="checkbox" className="status-cb"  id="edit-response-status" name="response" checked={this.state.response} onChange={this.handleResponseCheckbox} />
            <label htmlFor="response">Response</label>
            <input type="checkbox" className="status-cb"  id="edit-interview-status" name="interview" checked={this.state.interview} onChange={this.handleInterviewCheckbox} />
            <label htmlFor="interview">Interview</label>
          </div>
          <label htmlFor="notes">Notes</label><br/>
          <textarea id="edit-notes" name="notes" value={this.state.notes} onChange={this.handleNotesTextarea}></textarea>
          <button id="edit-submit-btn" type="submit" onClick={this.handleSubmitButtonClick}>Save</button>
          <button id="delete-btn" type="button" onClick={this.handleDeleteButtonClick}>Delete</button>
        </div>
      </form>
      )
  }
}

export default EditModal;