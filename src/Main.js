import React, { useRef } from "react";
import ListofEntries from "./ListofEntries";
import "./App.css";
import distanceToBirthday from "./distanceToBirthday";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineFileSearch,
  AiOutlineForm,
} from "react-icons/ai";
function Main({ persons, setPersons }) {
  console.log(persons);
  const navigate = useNavigate();
  const personscopy = [...persons];

  const currDate = new Date();

  personscopy.sort(function (a, b) {
    return (
      distanceToBirthday(a.day, a.month, a.year) -
      distanceToBirthday(b.day, b.month, b.year)
    );
  });
  console.log(personscopy);

  var find = personscopy.filter(
    (element) =>
      (element.month - 1 === currDate.getMonth() &&
        element.day >= currDate.getDate()) ||
      element.month - 1 === currDate.getMonth() + 1 ||
      element.month - 1 === currDate.getMonth() - 11
  );

  let newarr = find.length;
  let ausschnitt = personscopy.splice(newarr);

  console.log(newarr);
  console.log(ausschnitt);
  function onClickHome() {
    navigate("/");
  }
  function onClickForm() {
    navigate("/entries/");
  }
  function onClickSortier() {
    navigate("/data/");
  }
  return (
    <div className="container">
      <div className="box">
        <h1>Upcoming Birthdays</h1>
        <ListofEntries personslist={personscopy} showcountdown={true} />
        <ListofEntries personslist={ausschnitt} showcountdown={false} />

        <LinkIconStyles>
          <LinkStyle onClick={onClickHome} />
          <LinkStyle2 onClick={onClickForm} />
          <LinkStyle3 onClick={onClickSortier} />
        </LinkIconStyles>
      </div>
    </div>
  );
}

export default Main;
const LinkIconStyles = styled.div`
  display: flex;
`;
const LinkStyle = styled(AiOutlineHome)`
  color: #d33682;
  font-size: 40px;
  display: inline-block;
  margin-left: 10px;
  &:hover {
    color: #d33682;
  }
  &:active {
    color: #d33682;
  }
`;
const LinkStyle2 = styled(AiOutlineForm)`
  color: #2aa198;
  font-size: 40px;
  display: inline-block;

  &:hover {
    color: #d33682;
  }
  &:active {
    color: #d33682;
  }
`;
const LinkStyle3 = styled(AiOutlineFileSearch)`
  color: #2aa198;
  font-size: 40px;
  display: inline-block;
  /* margin: 20px; */
  &:hover {
    color: #d33682;
  }
  &:active {
    color: #d33682;
  }
`;
