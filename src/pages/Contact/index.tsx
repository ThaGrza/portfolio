import React from "react";
import Axios from "axios";
import "./style.css";
interface Details {
  name: string;
  company: string;
  email: string;
  message: string;
  emailSent: boolean | null;
}

class ContactForm extends React.Component<{}, Details> {
  constructor(details: Details) {
    super(details);
    this.state = {
      name: " ",
      company: " ",
      email: " ",
      message: " ",
      emailSent: null,
    };
  }

  onNameChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ name: event.currentTarget.value });
  }

  onCompanyChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ company: event.currentTarget.value });
  }

  onEmailChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ email: event.currentTarget.value });
  }

  onMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ message: event.currentTarget.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Post request for sendgrid.
    Axios.post("/send", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            emailSent: true,
          });
        } else {
          this.setState({
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        this.setState({
          emailSent: false,
        });
      });
    this.resetForm();
  }

  resetForm() {
    this.setState({ name: "", company: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="contact-container">
        <div className="form-container">
          <div>
            <h1 className="contact-header">Get in Touch</h1>
          </div>
          <div className="contact-intro">
            <p>
              Feel free to use the form below to send an email to me with any
              questions, concerns or opportunities! I'll get back to you as soon
              as possible.{" "}
            </p>
          </div>
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <label>
                Name:
                <input
                  type="text"
                  required
                  className="form-control"
                  id="name"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Company:{" "}
                <input
                  type="text"
                  required
                  className="form-control"
                  id="company"
                  value={this.state.company}
                  onChange={this.onCompanyChange.bind(this)}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Email:{" "}
                <input
                  type="email"
                  required
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Message:{" "}
                <textarea
                  className="form-control"
                  required
                  id="message"
                  rows={5}
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                />
              </label>
            </div>
            {this.state.emailSent === true && (
              <p className="email1-alert">Email Sent!</p>
            )}
            {this.state.emailSent === false && (
              <p className="email2-alert">Email not sent.</p>
            )}
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
