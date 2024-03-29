import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewTicketForm(props) {
  
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
    });
  }
  
  return(
    <React.Fragment>
    <ReusableForm 
      formSubmissionHandler={handleNewTicketFormSubmission}
      buttonText="Help!" />
    </React.Fragment>
    );

// Previous form, replaced by reusable form
  // return(
  //   <React.Fragment>
  //     <hr />
  //     <form onSubmit={handleNewTicketFormSubmission}>
  //       <input
  //         type='text'
  //         name='names'
  //         placeholder='Pair Names' />
  //         <br />
  //       <input
  //         type='text'
  //         name='location'
  //         placeholder='Location' />
  //         <br />
  //       <textarea
  //         name='issue'
  //         placeholder='Describe your issue.' />
  //         <br/ >
  //         <button type='submit'>Help!</button>
  //     </form>
  //     <br/ >    
  //   </React.Fragment>
  // );

}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;