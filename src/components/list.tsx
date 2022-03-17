import React from "react";
import Header from "./header";
import Reminder from "./reminder";
import { useState, useEffect } from "react";
import Modal from "./modal";
import axios from "axios";
// FIXME: these extra div tags r a mess lol
// INT-QUESTION: its better to have a todo and a done table vs checking a boolean all the time.

interface ReminderProps {
  _id: number;
  text: string;
  date: string;
  completed: number;
}

export const List = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  //const items = GetItems(); // TODO useEffect
  const [reminders, setReminders] = useState([]);

  // Fetch all reminders on initial render
  useEffect(() => {
    fetchReminders();
  }, []);

  function onClickSubmit() {
    alert(currentMessage);
    setCurrentMessage(""); // P-QUESTION: this is a good bug, you get the same message if empty
  }

  const fetchReminders = async () => {
    // Send GET request to 'reminders/all' endpoint
    axios
      .get("http://localhost:4001/reminders/all")
      .then((response) => {
        // Update the reminders state
        setReminders(response.data);

        // // Update loading state
        // setLoading(false)
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the reminders list: ${error}`
        )
      );
  };

  // const handleReminderCreate = () => {
  //   // Send POST request to 'reminders/create' endpoint
  //   axios
  //     .post('http://localhost:4001/reminders/create', {
  //       text: author,
  //       date: date,
  //       completed: completed
  //     })
  //     .then(res => {
  //       console.log(res.data)
  //       // Fetch all reminders to refresh
  //       // the reminders in the list
  //       fetchReminders()
  //     })
  //     .catch(error => console.error(`There was an error creating the ${title} reminder: ${error}`))
  // }

  return (
    <div className="h-full bg-yellow-50 pt-12 px-8">
        <Header
          onClickNew={() => {
            setShowModal(true);
          }}
          onClickSort={() => {}}
        ></Header>

        <div>
          {reminders.length > 0 ? (
            reminders.map((reminder: ReminderProps) => (
              <Reminder
                key={reminder._id}
                onClickCompleted={() => {}} // FIXME connect this up
                message={reminder.text}
                date={reminder.date}
              />
            ))
          ) : (
            <Reminder
              key={-1}
              onClickCompleted={() => {}}
              message="...There are no reminders to show, kupo!"
              date={"00-00-00"}
            />
          )}
        </div>

        {showModal ? (
          <Modal
            setShowModal={setShowModal}
            setCurrentMessage={setCurrentMessage}
            currentMessage={currentMessage}
            onClickSubmit={onClickSubmit}
          ></Modal>
        ) : null}
    </div>
  );
};

export default List;
