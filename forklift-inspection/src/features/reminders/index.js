/* eslint-disable */
//
// TODO: Split this into multiple components within a 'reminders' directory
// NOTE: Disabled ESLint for this file until reminders are server-side
//
import {
  useState,
  useEffect,
  React,
} from 'react';

export default function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [alertText, setAlertText] = useState('');

  useEffect(() => {
    // Set up timer to check for reminders every minute
    const interval = setInterval(() => {
      checkReminders();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  function addReminder(reminder) {
    // Add new reminder to array of reminders
    setReminders([...reminders, reminder]);
  }

  function removeReminder(index) {
    // Remove reminder from array of reminders
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
  }

  function editReminder(index) {
    const reminder = reminders[index];
    const newTime = prompt('Enter new time:', reminder.time);
    const newReminder = { text: reminder.text, time: newTime };
    const newReminders = [...reminders];
    newReminders[index] = newReminder;
    setReminders(newReminders);
  }

  function checkReminders() {
    reminders.forEach((reminder) => {
      const now = new Date();
      const reminderTime = new Date(reminder.time);
      if (now > reminderTime) {
        setAlertText(reminder.text);
        removeReminder(reminders.indexOf(reminder));
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = e.target.elements.reminder.value;
    const time = e.target.elements.time.value;
    addReminder({ text, time });
  }

  return (
    <div className="reminder-container">
      {alertText && (
        <div className="alert-container">
          <p className="alert-text">{alertText}</p>
          <button className="alert-dismiss" onClick={() => setAlertText('')}>
            Dismiss
          </button>
        </div>
      )}
      <h1 className="reminder-header">Reminders</h1>
      <form onSubmit={handleSubmit}>
        <label className="reminder-label" htmlFor="reminder">
          Reminder:
        </label>
        <input className="reminder-input" type="text" name="reminder" required />
        <br />
        <label className="reminder-label" htmlFor="time">
          Time:
        </label>
        <input className="reminder-input" type="datetime-local" name="time" required />
        <br />
        <button className="reminder-submit" type="submit">Add Reminder</button>
      </form>
      <ul className="reminder-list">
        {reminders.map((reminder, index) => (
          <li key={index}>
            {reminder.text}
            {' '}
            (
            {reminder.time}
            )
            <button className="reminder-remove" onClick={() => removeReminder(index)}>Remove</button>
            <button className="reminder-edit" onClick={() => editReminder(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
