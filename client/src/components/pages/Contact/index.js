import React from "react";
import axios from "axios";
import "./index.css";

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

  handleSubmit(event){
    event.preventDefault();
    axios.post("/send",{
      data: this.state
    })
    .then(function (response) {
      console.log(response);
      this.resetForm();
    })
    .catch(function (error) {
      console.log(error);
    });
  };
    
  //   axios({
  //     method: "POST", 
  //     url:"http://localhost:3001/send", 
  //     data:  this.state
  //   }).then((response)=>{
  //     if (response.data.status === "success"){
  //       alert("Message Sent."); 
  //       this.resetForm();
  //     }else if(response.data.status === "fail"){
  //       alert("Message failed to send.")
  //     }
  //   })
  // }

  resetForm(){
    this.setState({ name: "", company: "", email: "", message: ""})
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
            Name:<input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
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
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    );
  };

  onNameChange(event){
    this.setState({name: event.target.value})
    // console.log(this.state);
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
}

export default ContactForm;