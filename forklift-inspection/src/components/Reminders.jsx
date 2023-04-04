/* eslint-disable */
//
// NOTE: Disabled ESLint for this file until reminders are server-side
//
import {
  React
} from 'react';

import styles from '../styles/Reminders.module.scss';

export default function Reminder() {

  return (
    <div  className={styles['container']}>
      <form>
        <div className={styles['form-item']}>
          <label htmlFor="name" className={styles['form-label']}>
            Reminder:
          </label>
            <br />
          <input className={styles['form-text']} type="text" id="name" name="name" required maxLength="40" pattern="[A-Za-z ]+" />
        </div>
        <div className={styles['form-item']}>
          <label  className={styles['form-label']} htmlFor="time">
            Time:
          </label>
            <br />
          <input className={styles['form-text']} type="datetime-local" name="time" required />
        </div>
        <div>
          <button  className={styles['reminder-button']} type="submit">Add Reminder</button>
        </div>
      </form>
    </div>
  );
}
