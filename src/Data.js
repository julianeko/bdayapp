import React, { useRef, useEffect } from "react";
import "./App.css";
import { MdEmojiPeople } from "react-icons/md";

// var person = [{ name: "Seba", gift: "present" }];

function Data({ persons, setPersons }) {
  const input = useRef();

  let oneperson = persons.map((element) => (
    <div>
      <li>{element.name}</li>
      <li>{element.date}</li>
      <li>{element.present}</li>
      <li>{element.postcard}</li>
      <li>{element.message}</li>
    </div>
  ));
  // console.log(oneperson);

  useEffect(() => {
    const storage = localStorage.getItem("persons");
    if (storage) {
      setPersons(JSON.parse(localStorage.getItem("persons")));
    }
  }, []);
  useEffect(() => {
    // Ausführung bei Änderung des todos-State ([todos])

    localStorage.setItem("todos", JSON.stringify(persons));
  }, [persons]);

  function newFind(objectToFind) {
    var objectFound = persons.filter(
      (element) => element.name === objectToFind
    );

    console.log(objectFound);
  }
  function newSearch() {
    newFind(input.current.value);
  }

  // function deleteItem(idtobedeleted) {
  //   var filtered = value.todos.filter(
  //     (element) => element.id !== idtobedeleted
  //   );
  // }

  return (
    <div>
      <h1>Your Friends</h1>
      <input ref={input} type="text" placeholder="Search name"></input>
      <span className="btn" onClick={newSearch}>
        <MdEmojiPeople /> Search
      </span>

      <ul>{oneperson}</ul>
    </div>
  );
}

export default Data;
