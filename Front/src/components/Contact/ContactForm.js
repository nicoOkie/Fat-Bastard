/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Styles

/**
 * Code
 */
const ContactForm = () => (
  <div id="Contact-Form">
    <form action="" method="post">
      <h3 id="title-form">Vous pouvez contacter le groupe ici :</h3>
      <select id="contact-choice" required>
        <option value="">Motif</option>
        <option value="pro">Je suis un pro</option>
        <option value="fan">Je suis un fan</option>
      </select>
      <input type="text" name="name" id="name" placeholder="Name" required></input>
      <input type="email" name="email" id="email" placeholder="Email" required></input>
      <input type="text" name="subject" id="subject" placeholder="Subject"></input>
      <textarea id="form-text" name="form-text" rows="10" cols="33"></textarea>
      <div>
      <input type="checkbox" id="newsletter-check" name="newsletter-check"></input>
      <label htmlFor="newsletter-check">Souscrire à la newsletter</label>
      </div>
      <input type="submit" value="Envoyer"></input>
    </form>
  </div>
);

/**
 * Export
 */
export default ContactForm;