import { Button } from "./button";
import MoogleIcon from "./moogle.png";
import Header from "./header";
import Item from "./item";
import { useState } from "react";
import Modal from "./modal";
//FIXME these extra div tags r a mess lol

interface ListItem {
  idx: number;
  message: string;
  date: string;
}

// TODO below fn needs to get and make reqs to backend.
function GetItems() {

  function DeleteItem({idx, message, date} : ListItem)  {
    alert(`DELETING ${idx}: ${message}, ${date}`)
  }

  // function createItem({idx, message, date} : ListItem)  {
  //   alert(`CREATING ${idx}: ${message}, ${date}`)
  // }


  const itemsList = [
    {
      idx: 1,  // NOTE this would be unique identifier key in db
      message: "Got some super special wares, kupo.",
      date: "2022-01-01",
    },
    {
      idx: 2,
      message: "Get some munny in my pocket, kupo.",
      date: "2022-01-02",
    },
    {
      idx: 3,
      message: "420:69, kupo.",
      date: "2022-01-08",
    },
    {
      idx: 4,
      message: "Who shot hannibal?, kupo.",
      date: "2022-01-02",
    },
    {
      idx: 5,
      message: "Buy ranch, kupo.",
      date: "2022-01-02",
    },
    {
      idx: 6,
      message: "Who shot hannibal?, kupo.",
      date: "2022-01-02",
    },
    {
      idx: 7,
      message: "Buy ranch, kupo.",
      date: "2022-02-03",
    },
    {
      idx: 8,
      message: "Get some munny in my pocket, kupo.",
      date: "2022-01-02",
    },
    {
      idx: 9,
      message: "420:69, kupo.",
      date: "2022-01-02",
    },
    {
      idx: 10,
      message: "Who shot hannibal?, kupo.",
      date: "2022-03-02",
    },
    {
      idx: 11,
      message: "Buy ranch, kupo.",
      date: "2022-03-01",
    },
    {
      idx: 12,
      message: "Who shot hannibal?, kupo.",
      date: "2022-01-02",
    },
    {
      idx: 13,
      message: "Buy ranch, kupo.",
      date: "2022-01-02",
    },
    {
      idx: 14,
      message: "Buy ranch, kupo.",
      date: "2022-01-02",
    },
  ];

  return (
    <div>
      {itemsList.map((item) => {
        return (
          <Item
            onClickCompleted={(e) => {DeleteItem(item)}} // FIXME connect this up
            message={item.message}
            date={item.date}
          ></Item>
        );
      })}
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const items = GetItems(); // TODO useEffect

  function onClickSubmit() {
    alert(currentMessage)
    setCurrentMessage(""); // NOTE: this is a good bug, you get the same message if empty
  }

  return (
    <body className="h-full bg-yellow-50 pt-12 px-8">
      <Header
        onClickNew={() => {
          setShowModal(true);
        }}
        onClickSort={() => {}}
      ></Header>
      {items}
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          setCurrentMessage={setCurrentMessage}
          currentMessage={currentMessage}
          onClickSubmit={onClickSubmit}
        ></Modal>
      ) : null}
    </body>
  );
}

export default App;
