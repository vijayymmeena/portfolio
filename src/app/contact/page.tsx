"use client";

import type { FormEventHandler } from "react";

import ContactCode from "./contact-code";
import styles from "./page.module.css";
import { SendEmail } from "./send-email";

const ContactPage: React.FC = () => {
  const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    const subject = data.get("subject")?.toString();
    const message = data.get("message")?.toString();
    if (!name || !email || !subject || !message) {
      alert("All field required");
      return;
    }

    SendEmail({
      name,
      email,
      subject,
      message,
    })
      .then(() => {
        alert("Your response has been received!");
      })
      .catch(() => {
        alert("There was an error. Please try again in a while.");
      });
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={5} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
