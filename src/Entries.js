import React, { useRef, useState } from "react";
import "./App.css";
import { MdCake } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function Entries({ persons, setPersons }) {
  const eingabeFeld = useRef();
  const eingabeFeld2 = useRef();
  const message = useRef();
  const postcard = useRef();
  const present = useRef();

  // const [action, setAction] = useState([]);

  function newEntry() {
    setPersons([
      {
        id: uuidv4(),
        name: eingabeFeld.current.value,
        date: eingabeFeld2.current.value,
        present: present.current.checked ? present.current.value : "",
        postcard: postcard.current.checked ? postcard.current.value : "",
        message: message.current.checked ? message.current.value : "",
      },
      ...persons,
    ]);
    console.log(present.current.value);
    eingabeFeld.current.value = "";
    eingabeFeld2.current.value = "";
    present.current.checked = "";
    postcard.current.checked = "";
    message.current.checked = "";
  }

  // const handleChange = (event) => {
  //   setAction(event.target.value);
  // };
  // const handleChange2 = (event) => {
  //   setAction(event.target.value);
  // };
  // const handleChange3 = (event) => {
  //   setAction(event.target.value);
  // };
  return (
    <div>
      <div className="box">
        <h1>Test</h1>
        <input type="text" placeholder="Enter name" ref={eingabeFeld}></input>
        <input
          ref={eingabeFeld2}
          type="date"
          placeholder="Enter Birthday-Date"
        ></input>
        <div>
          <input
            type="checkbox"
            ref={present}
            value="Buy and send a present"
            // checked={action === "Buy and send a present"}
            // onChange={handleChange}
          ></input>
          <label>Present</label>
        </div>
        <div>
          <input
            type="checkbox"
            ref={postcard}
            value="Buy and send a postcard"
            // checked={action === "Buy and send a postcard"}
            // onChange={handleChange}
          ></input>
          <label>Postcard</label>
        </div>
        <input
          type="checkbox"
          ref={message}
          value="Send a message"
          // checked={action === "Send a message"}
          // onChange={handleChange}
        ></input>
        <label>Message</label>
        <span className="btn" onClick={newEntry}>
          <MdCake /> Save
        </span>

        
      </div>
    </div>
  );
}

export default Entries;
