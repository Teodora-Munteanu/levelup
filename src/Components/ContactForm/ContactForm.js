import './ContactForm.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

init('user_id');

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('Send');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      const serviceId = 'service_olmt36i';
      const templateId = 'template_bvpd0yd';
      const userId = 'ZFFcTCgGpsD_VTArv';
      const templateParams = { name, email, message };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log(response);
          setEmailSent(true);
          setFormStatus('Sent');
        })
        .catch((error) => {
          console.error(error);
        });

      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Let's get in touch</h2>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="btn btn-success" type="submit">
          {formStatus}
        </button>
        {emailSent && (
          <div>
            <span>Thank you for your message, we will be in touch in no time!</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
