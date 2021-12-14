import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams, useNavigate } from "react-router-dom";

function Change({ persons, setPersons }) {
  const { change } = useParams();
  const navigate = useNavigate();

  const textarea = useRef();
  const textarea2 = useRef();
  const datum = useRef();
  const nachricht = useRef();
  const postkarte = useRef();
  const geschenk = useRef();

  var changePerson = persons.find((element) => element.id === change);
  console.log(changePerson);

  const [name, setName] = useState([]);
  const [date, setDate] = useState([]);
  const [present, setPresent] = useState([]);
  const [postcard, setPostcard] = useState([]);
  const [message, setMessage] = useState([]);

  function changeEntry() {
    setPersons([
      {
        id: uuidv4(),
        name: textarea.current.value,
        date: textarea2.current.value,
        present: geschenk.current.checked ? geschenk.current.value : "",
        postcard: postkarte.current.checked ? postkarte.current.value : "",
        message: nachricht.current.checked ? nachricht.current.value : "",
      },
      ...persons,
    ]);

    textarea2.current.value = "";
    geschenk.current.checked = "";
    postkarte.current.checked = "";
    nachricht.current.checked = "";
    textarea.current.value = "";

    let changedentry = textarea.current.value;
    navigate("/data/" + changedentry);
  }

  return (
    <div>
      <input
        className="textchange"
        ref={textarea}
        type="text"
        value={changePerson.name}
      ></input>
      <div>
        <input
          type="checkbox"
          ref={geschenk}
          value="Buy and send a present"
          checked={changePerson.present}
          // onChange={handleChange}
        ></input>
        <label>Present</label>
      </div>
      <div>
        <input
          type="checkbox"
          ref={postkarte}
          value="Buy and send a postcard"
          checked={changePerson.postcard}
          // checked={action === "Buy and send a postcard"}
          // onChange={handleChange}
        ></input>
        <label>Postcard</label>
      </div>
      <input
        type="checkbox"
        ref={nachricht}
        value="Send a message"
        checked={changePerson.message}
        // checked={action === "Send a message"}
        // onChange={handleChange}
      ></input>
      <label>Message</label>
      <div>
        <textarea
          className="textchange"
          ref={textarea2}
          type="text"
          value={changePerson.text}
        ></textarea>
      </div>

      <div>
        <input
          ref={datum}
          type="date"
          placeholder="Enter Birthday-Date"
          value={changePerson.date}
        ></input>
      </div>
      <span className="btn" onClick={changeEntry}>
        Save
      </span>
    </div>
  );
}

export default Change;
