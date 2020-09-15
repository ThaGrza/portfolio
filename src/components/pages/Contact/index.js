import React from "react";
import Axios from "axios";
import "./index.css";

class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      company: '',
      email: '',
      message: '',
      emailSent: null,
      errors:  {name: ' ', company: '', message:''}
    };
  }

  onNameChange(event){
    let error = this.state.errors.name;
    let { value } = event.target;
    error = value.length < 5 ? 'Name must be atleast 5 characters long' : '';

    this.setState({name: event.target.value})
  };

  onCompanyChange(event){
    let error = this.state.errors.company;
    let { value } = event.target;
    error = value.length < 3 ? 'Company cannot be left blank' : '';

    this.setState({company: event.target.value})
  };

  onEmailChange(event){
    this.setState({email: event.target.value})
  };

  onMessageChange(event){
    let error = this.state.errors.message;
    let { value } = event.target;
    error = value.length < 5 ? 'Message cannot be left blank' : '';
    this.setState({message: event.target.value})
  };

  // validateForm = (errors) => {
  //   let valid = true;
  //   errors.value.forEach(
  //     (val) => val.length > 0 && (valid = false)
  //   );
  //   return valid;
  // };

  handleSubmit(event){
    event.preventDefault();

    // Post request for sendgrid.
    Axios.post('/send', this.state)
    .then(res => {
      if(res.data.success){
        this.setState({
          emailSent: true,
      });
    }else {
      this.setState({
        emailSent: false
      });
    }
  })
    .catch( err => {
      this.setState({
        emailSent: false
      });
    })
  this.resetForm();
  }
    


  resetForm(){
    this.setState({ name: '', company: '', email: '', message: ''})
  }

  render() {
    return(
      <div className="contact-container">
        <div ><h1 className="contact-header">Get in Touch</h1></div>
        <div className="contact-intro">
          <p>Feel free to use the form below to send an email to me with any questions, concerns or opportunities! I'll get back to you as soon as possible.  </p>
        </div>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label>
              <span className='input-error'>{this.state.errors.name}</span>
            Name:<input type="text" required className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </label>
          </div>
          <div className="form-group">
            <label>
            Company: <input type="text" required className="form-control" id="company" value={this.state.company} onChange={this.onCompanyChange.bind(this)} />
            </label>
          </div>
          <div className="form-group">
            <label>
            Email: <input type="email" required className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </label>
          </div>
          <div className="form-group">
            <label>
            Message: <textarea className="form-control" required id="message" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </label>
          </div>
          {this.state.emailSent === true && <p className="email1-alert">Email Sent!</p>}
          {this.state.emailSent === false && <p className="email2-alert">Email not sent.</p>}
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    );
  };
}

export default ContactForm;