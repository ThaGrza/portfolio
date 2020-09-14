import React from "react";
import Axios from "axios";
import "./index.css";
import { useForm } from "react-hook-form";

const { register, handlesubmit } = useForm();

class ContactForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      name: '',
      company: '',
      email: '',
      message: '',
      emailSent: null,
    };
  }

  onNameChange(event){
    this.setState({name: event.target.value})
  };

  onCompanyChange(event){
    this.setState({company: event.target.value})
  };

  onEmailChange(event){
    this.setState({email: event.target.value})
  };

  onMessageChange(event){
    this.setState({message: event.target.value})
  };

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
  };

  resetForm(){
    this.setState({ name: '', company: '', email: '', message: ''})
  }


  render() {
    return(
      <div className="contact-container">
        <div className="contact-intro">
          <p>Hey travelers! If you liked a project or had questions feel free to fill out the below form to get in contact with me!</p>
        </div>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label>
            Name:<input type="text" className="form-control" id="name" ref={register({ required: true, maxLength: 20 })} value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </label>
          </div>
          <div className="form-group">
            <label>
            Company: <input type="text" className="form-control" id="company" value={this.state.company} onChange={this.onCompanyChange.bind(this)} />
            </label>
          </div>
          <div className="form-group">
            <label>
            Email: <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </label>
          </div>
          <div className="form-group">
            <label>
            Message: <textarea className="form-control" id="message" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
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