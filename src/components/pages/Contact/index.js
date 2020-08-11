import React from "react";

class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      company: "",
      email: "",
      message: ""
    };
  }

  render() {
    return(
      <div className="contact-container">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" className="form-control" value={this.state.company} onChange={this.onCompanyChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input type="text" className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    );
  };

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
    // Fill Out
  };
}

export default ContactForm;