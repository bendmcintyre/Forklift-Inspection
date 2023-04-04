import React, {
} from 'react';
import { FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Contact.module.scss';

function Contact() {
  return (
    <div className={styles.container}>
      <div>
        <form>
          <div className={styles['form-item']}>
            <label htmlFor="name" className={styles['form-label']}>Name:</label>
            <br />
            <input className={styles['form-text']} type="text" id="name" name="name" required maxLength="40" pattern="[A-Za-z ]+" />
          </div>
          <div className={styles['form-item']}>
            <label htmlFor="email" className={styles['form-label']}>Email:</label>
            <br />
            <input className={styles['form-text']} type="email" id="email" name="email" required />
          </div>
          <div className={styles['form-item']}>
            <label htmlFor="subject" className={styles['form-label']}>Subject:</label>
            <br />
            <input className={styles['form-text']} type="text" id="subject" name="subject" required maxLength="50" />
          </div>
          <div className={styles['form-item']}>
            <label htmlFor="message" className={styles['form-label']}>Message:</label>
            <br />
            <textarea className={styles['message-input-box']} id="message" name="message" required maxLength="500" />
          </div>
          <div>
            <button type="submit" className={styles['submit-button']}>Submit</button>
          </div>
        </form>
      </div>
      <div className={styles['contact-info']}>
        <a href="mailto:bendmcintyre@gmail.com" className={styles['contact-link']}>
          <FaEnvelope className={styles['contact-icon']} />
          name@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
