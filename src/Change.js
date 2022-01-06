import React, { useRef, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Context } from "./App";
import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineClose } from "react-icons/ai";
import BirthdayInput from "./BirthdayInput";

function Change({ persons, setPersons }) {
  const { change } = useParams();
  const { search } = useParams();
  const navigate = useNavigate();
  // const value = useContext(Context);
  const textarea = useRef();
  const textarea2 = useRef();
  // const datum = useRef();
  const nachricht = useRef();
  const postkarte = useRef();
  const geschenk = useRef();

  var changePerson = persons.find((element) => element.id === change);
  console.log(changePerson);
  console.log(changePerson.name);

  const [name, setName] = useState(changePerson.name);
  // const [date, setDate] = useState(changePerson.date);
  const [day, setDay] = useState(changePerson.day);
  const [month, setMonth] = useState(changePerson.month);
  const [year, setYear] = useState(changePerson.year);
  const [present, setPresent] = useState(changePerson.present);
  const [postcard, setPostcard] = useState(changePerson.postcard);
  const [message, setMessage] = useState(changePerson.message);
  const [text, setText] = useState(changePerson.text);

  const [valid, setValid] = useState(true);
  const [valid2, setValid2] = useState(true);

  function onChangeName(event) {
    setName(event.target.value);
    console.log(event.target.value);
  }
  // function onChangeDate(event) {
  // setDate(event.target.value);
  // }
  // function onChange(day, month, year) {
  // setDay(day.target.value);
  // }
  // function onChangeMonth(event) {
  //   setMonth(event.target.value);
  // }
  function onChangePresent(event) {
    setPresent(event.target.checked ? event.target.value : "");
  }
  function onChangePostcard(event) {
    setPostcard(event.target.checked ? event.target.value : "");
  }
  function onChangeMessage(event) {
    setMessage(event.target.checked ? event.target.value : "");
  }
  function onChangeText(event) {
    setText(event.target.value);
  }
  if (valid === true) {
    var icon = (
      <AiOutlineArrowRightStyle isvalid={true}>
        <AiOutlineClose />
      </AiOutlineArrowRightStyle>
    );
  } else {
    var icon = (
      <AiOutlineArrowRightStyle isvalid={false}>
        <AiOutlineClose />
      </AiOutlineArrowRightStyle>
    );
  }

  if (valid2 === true) {
    var icon2 = (
      <AiOutlineArrowRightStyle isvalid={true}>
        <AiOutlineClose />
      </AiOutlineArrowRightStyle>
    );
  } else {
    var icon2 = (
      <AiOutlineArrowRightStyle isvalid={false}>
        <AiOutlineClose />
      </AiOutlineArrowRightStyle>
    );
  }

  function changeEntry() {
    if ((name === "" && day <= 0) || month <= 0) {
      setValid(false);
      setValid2(false);
    } else if ((name !== "" && day <= 0) || month <= 0) {
      setValid(true);
      setValid2(false);
    } else if (day > 0 && month > 0 && name === "") {
      setValid(false);
      setValid2(true);
    } else {
      //   (name != changePerson.name && name != "") ||
      //   (day != changePerson.day && day != "") ||
      //   (month != changePerson.month && month != "")
      //   present != changePerson.present ||
      //   postcard != changePerson.postcard ||
      //   message != changePerson.message ||
      //   text != changePerson.text
      // ) {
      console.log("Baeh");
      changePerson.name = name;
      // changePerson.date = date;
      changePerson.day = day;
      changePerson.month = month;
      changePerson.year = year;
      changePerson.present = present;
      changePerson.postcard = postcard;
      changePerson.message = message;
      changePerson.text = text;
      setPersons([...persons]);

      console.log(persons);
      navigate("/data/" + changePerson.name);
    }

    // textarea2.current.value = "";
    // geschenk.current.checked = "";
    // postkarte.current.checked = "";
    // nachricht.current.checked = "";
    // textarea.current.value = "";

    // let changedentry = textarea.current.value;
    // navigate("/data/" + changedentry);
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Change me</h1>
        <FlexStyle>
          <LabelStyle> Name:</LabelStyle>
          <InputStyle
            className="textchange"
            ref={textarea}
            type="text"
            value={name}
            onChange={onChangeName}
          ></InputStyle>
          {icon}
        </FlexStyle>
        <BirthdayInput
          day={day}
          month={month}
          year={year}
          icon2={icon2}
          onChange={(d, m, y) => {
            setDay(d);
            setMonth(m);
            setYear(y);
          }}
        />
        <FlexStyle>
          {/* <LabelStyle>Date:</LabelStyle>
          <InputStyle
            ref={datum}
            type="date"
            placeholder="Enter Birthday-Date"
            value={date}
            // onChange={onChangeDate}
          ></InputStyle>
          {icon2} */}
        </FlexStyle>
        <FlexStyle>
          <LabelStyle>Present:</LabelStyle>
          <InputStyleBox
            type="checkbox"
            ref={geschenk}
            value="Buy and send a present"
            checked={present}
            onChange={onChangePresent}
          ></InputStyleBox>
        </FlexStyle>
        <FlexStyle>
          <LabelStyle>Postcard:</LabelStyle>
          <InputStyleBox
            type="checkbox"
            ref={postkarte}
            value="Buy and send a postcard"
            checked={postcard}
            onChange={onChangePostcard}
            // checked={action === "Buy and send a postcard"}
            // onChange={handleChange}
          ></InputStyleBox>
        </FlexStyle>
        <FlexStyle>
          <LabelStyle>Message:</LabelStyle>

          <InputStyleBox
            type="checkbox"
            ref={nachricht}
            value="Send a message"
            checked={message}
            onChange={onChangeMessage}
            // checked={action === "Send a message"}
            // onChange={handleChange}
          ></InputStyleBox>
        </FlexStyle>
        <FlexStyle>
          <LabelStyle>Ideas</LabelStyle>

          <InputStyleText
            className="textchange"
            ref={textarea2}
            type="text"
            value={text}
            onChange={onChangeText}
          ></InputStyleText>
        </FlexStyle>
        <FlexStyle2>
          <CircleStyle className="btn" onClick={changeEntry} />
        </FlexStyle2>
      </div>
    </div>
  );
}

export default Change;

const InputStyle = styled.input`
  /* position: absolute; */
  right: 10px;
  border-radius: 6px;
  border: 2px solid #2aa198;
  padding: 2px;
  width: 150px;

  &:focus {
    outline: none;
  }
  &:hover {
    border: 3px solid #d33682;
  }
  &:active {
    border: 3px solid #d33682;
  }
`;

const AiOutlineArrowRightStyle = styled(AiOutlineClose)`
  /* margin-left: 95px; */
  vertical-align: middle;
  margin-left: 5px;
  color: ${(props) => (props.isvalid ? "#fdf5df" : "#d33682")};
`;

const InputStyleText = styled.textarea`
  /* position: absolute; */
  right: 10px;
  border-radius: 6px;
  border: 2px solid #2aa198;
  padding: 2px;
  width: 150px;
  vertical-align: middle;
  &:focus {
    outline: none;
  }
  &:hover {
    border: 3px solid #d33682;
  }
  &:active {
    border: 3px solid #d33682;
  }
`;
const InputStyleBox = styled.input`
  /* position: absolute; */
  right: 145px;
  border-radius: 4px;
  width: 20px;
  height: 20px;
 
  &:checked, &:not(:checked) {
    border: solid red;
`;
const FlexStyle = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const LabelStyle = styled.span`
  width: 10em;
  display: inline-block;
  margin-left: 10px;
`;

const FlexStyle2 = styled.div`
  width: 100%;
  margin-top: 10px;
  text-align: right;
`;

const CircleStyle = styled(AiOutlinePlusCircle)`
  color: #d33682;
  font-size: 60px;
  display: inline-block;
  /* margin: 20px; */
  &:hover {
    color: #2aa198;
    font-size: 65px;
  }
  &:active {
    color: #2aa198;
  }
`;
