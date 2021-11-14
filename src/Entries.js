import React from "react";
import "./App.css";
import { MdCake } from "react-icons/md";
function Entries() {
  const eingabeFeld = useRef();

  function newEntry() {}

  return (
    <div>
      <div className="box">
        <h1>Test</h1>
        <input type="text" placeholder="Enter name"></input>{" "}
        <input type="date" placeholder="Enter Birthday-Date"></input>
        <span className="btn" onClick={newEntry} ref={eingabeFeld}>
          <MdCake /> Save
        </span>
      </div>
    </div>
  );
}

export default Entries;
