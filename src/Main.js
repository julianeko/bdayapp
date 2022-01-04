import React, { useRef } from "react";
import ListofEntries from "./ListofEntries";
import "./App.css";
import { MdEmojiPeople, MdFrontHand } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";
import distanceToBirthday from "./distanceToBirthday";


function Main({ persons, setPersons }) {
  console.log(persons);

  const personscopy = [...persons];

  const currDate = new Date();

  personscopy.sort(function (a, b) {
    return distanceToBirthday(a.date) - distanceToBirthday(b.date);
  });
  console.log(personscopy);

  var find = personscopy.filter(
    (element) =>
      (new Date(element.date).getMonth() === currDate.getMonth() &&
        new Date(element.date).getDate() >= currDate.getDate()) ||
      new Date(element.date).getMonth() === currDate.getMonth() + 1 ||
      new Date(element.date).getMonth() === currDate.getMonth() - 11
  );

  console.log(find);

  return (
    <div className="container">
      <div className="box">
        <h1>Upcoming Birthdays</h1>
        <ListofEntries personslist={find} showcountdown={true} />
        <ListofEntries personslist={personscopy} showcountdown={false} />
      </div>
    </div>
  );
}

export default Main;
