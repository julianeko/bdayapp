import React, { useRef } from "react";
import "./App.css";
import { MdEmojiPeople } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// var person = [{ name: "Seba", gift: "present" }];

function Data({ persons, setPersons }) {
  const input = useRef();
  const { search } = useParams();
  const { changedentry } = useParams();

  const navigate = useNavigate();
  console.log(persons);

  function deleteItem(idtobedeleted) {
    var filtered = persons.filter((element) => element.id !== idtobedeleted);
    // localStorage.setItem("todos", JSON.stringify(filtered));
    console.log(filtered);
    setPersons(filtered);
  }

  let oneperson = persons.map((element) => (
    <div key={element.id}>
      <div>
        <Link to={"/change/" + element.id}> {element.name}</Link>
        <IoMdTrash onClick={() => deleteItem(element.id)} />
      </div>
      <div>{element.date}</div>
      <div>{element.present}</div>
      <div>{element.postcard}</div>
      <div>{element.message}</div>
      <div>{element.text}</div>
    </div>
  ));
  var objectFound = persons.filter((element) => element.name == search);
  console.log(objectFound);

  let newArray = objectFound.map((element) => (
    <div key={element.id}>
      <div>
        <Link className="link" to={"/change/" + element.id}> {element.name}</Link>
        <IoMdTrash onClick={() => deleteItem(element.id)} />
      </div>
      <div>{element.date}</div>
      <div>{element.present}</div>
      <div>{element.postcard}</div>
      <div>{element.message}</div>
      <div>{element.text}</div>
    </div>
  ));
  console.log(newArray);

  let result = oneperson;
  if (search == undefined) {
    result = oneperson;
  } else {
    result = newArray;
  }

  

  function onClick() {
    let nameSearch = input.current.value;
    navigate("/data/" + nameSearch);
  }

  return (
    <div className="box">
      <h1>Your Friends</h1>
      <input ref={input} type="text" placeholder="Search name"></input>

      <span className="btn2" onClick={onClick}>
        <MdEmojiPeople /> Search
      </span>
      <div>{result}</div>
    </div>
  );
}

export default Data;
