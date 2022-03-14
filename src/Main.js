import React, { useState } from "react";
import ListofEntries from "./ListofEntries";
import "./App.css";
import distanceToBirthday from "./distanceToBirthday";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineFileSearch,
  AiOutlineForm,
} from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
function Main({ persons, setPersons }) {
  console.log(persons);
  const navigate = useNavigate();
  const personscopy = [...persons];
  const [show, setShow] = useState(false);

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
  console.log(find);
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

  if (show === true) {
    var list = <ListofEntries personslist={ausschnitt} />;
    var icon = <IoIosArrowDown />;
    var more = "Less";
  } else {
    list = [];
    icon = <IoIosArrowForward />;
    more = "More";
  }

  function ShowMore() {
    setShow(!show);
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Upcoming Birthdays</h1>
        <ListofEntries personslist={personscopy} showcountdown={true} />
        <KlappLeiste onClick={ShowMore}>
          <Box>
            <Icon> {icon}</Icon>
            <More>{more}</More>
          </Box>
          {list}
        </KlappLeiste>
        <LinkIconStyles>
          <LinkStyle onClick={onClickHome} />

          <LinkStyle2 onClick={onClickForm} />
          <LinkStyle3 onClick={onClickSortier} />
        </LinkIconStyles>
        <PrivStyle onClick={() => navigate("/pp/")}>Privacy notice</PrivStyle>
      </div>
    </div>
  );
}

export default Main;
const Box = styled.div`
  display: flex;
  &:hover {
    color: #d33682;
  }
  &:active {
    color: #d33682;
  }
  align-items: center;
`;
const More = styled.span`
  font-size: 12px;
  align-items: center;
  display: flex;
`;
const Icon = styled.span`
  font-size: 30px;
  margin-left: 5px;
  align-items: center;
  display: flex;
`;
const KlappLeiste = styled.div`
  color: #2aa198;
`;
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
const PrivStyle = styled.p`
  font-size: 7px;
  margin-top: 2px;
  margin-left: 16px;

  color: #2aa198;
  &:hover {
    color: #d33682;
  }
  &:active {
    color: #d33682;
  }
`;
