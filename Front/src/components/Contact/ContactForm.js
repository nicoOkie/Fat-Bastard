/* eslint-disable react/no-unused-state */
/**
 * NPM import
 */
import React from 'react';
import axios from 'axios';

/**
 * Local import
 */
// Styles

/**
 * Code
 */
class ContactForm extends React.Component {
  state = {
    contactSelect: '',
    inputName: '',
    inputMail: '',
    inputSubject: '',
    inputText: '',
    newsletterCheck: false,
    mailSent: false,
    error: null,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'http://92.243.8.90/fat/back/api/contact/index.php',
      headers: { 'content-type': 'application/json' },
      data: this.state,
    })
      .then((result) => {
        this.setState({
          mailSent: result.data.sent,
          contactSelect: '',
          inputName: '',
          inputMail: '',
          inputSubject: '',
          inputText: '',
          newsletterCheck: '',
        });
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    return (
      <div id="contact-form">
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <h3 id="title-form">Vous pouvez contacter le groupe ici :</h3>
          {/* <select id="contact-choice" required value={this.state.contactSelect} onChange={e => this.setState({ contactSelect: e.target.value })}>
            <option value="">Motif</option>
            <option value="pro">Je suis un pro</option>
            <option value="fan">Je suis un fan</option>
    </select> */}
          <input type="text" name="name" id="name" placeholder="Name" required value={this.state.inputName} onChange={e => this.setState({ inputName: e.target.value })} />
          <input type="email" name="email" id="email" placeholder="Email" required value={this.state.inputMail} onChange={e => this.setState({ inputMail: e.target.value })} />
          <input type="text" name="subject" id="subject" placeholder="Subject" value={this.state.inputSubject} onChange={e => this.setState({ inputSubject: e.target.value })} />
          <textarea id="form-text" name="form-text" rows="10" cols="33" placeholder="Ecrire ici" value={this.state.inputText} onChange={e => this.setState({ inputText: e.target.value })} />
          {/* <div>
            <input type="checkbox" id="newsletter-check" name="newsletter-check" value={this.state.newsletterCheck} onChange={e => this.setState({ newsletterCheck: e.target.value })} />
            <label id="newsletter-check" htmlFor="newsletter-check">Souscrire à la newsletter</label>
          </div> */}
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    );
  }
}

/**
 * Export
 */
export default ContactForm;
