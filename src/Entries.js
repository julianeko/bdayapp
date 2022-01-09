import React, { useRef, useState, useContext } from "react";
import "./App.css";
import { inputContext } from "./BirthdayInput";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineClose } from "react-icons/ai";
import BirthdayInput from "./BirthdayInput";

function Entries({ persons, setPersons }) {
  const eingabeFeld = useRef();
  // const eingabeFeld2 = useRef();
  const message = useRef();
  const postcard = useRef();
  const present = useRef();
  const textarea = useRef();

  const navigate = useNavigate();

  const [valid, setValid] = useState(true);
  const [valid2, setValid2] = useState(true);
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  // const date = `${day}.${month}.${year}`;
  // console.log(date);
  console.log(day);
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

  function onClickTest() {
    if ((eingabeFeld.current.value === "" && day <= 0) || month <= 0) {
      setValid(false);
      setValid2(false);
    } else if ((eingabeFeld.current.value !== "" && day <= 0) || month <= 0) {
      setValid(true);
      setValid2(false);
    } else if (day > 0 && month > 0 && eingabeFeld.current.value === "") {
      setValid(false);
      setValid2(true);
    } else {
      setPersons([
        {
          id: uuidv4(),
          name: eingabeFeld.current.value,
          day: day,
          month: month,
          year: year,
          present: present.current.checked ? present.current.value : "",
          postcard: postcard.current.checked ? postcard.current.value : "",
          message: message.current.checked ? message.current.value : "",
          text: textarea.current.value,
        },
        ...persons,
      ]);

      eingabeFeld.current.value = "";
      present.current.checked = "";
      postcard.current.checked = "";
      message.current.checked = "";
      textarea.current.value = "";

      navigate("/data/");
    }
  }
  console.log(persons);

  return (
    <div className="container">
      <div className="box">
        <h1>By-Happy</h1>
        <FlexStyle>
          <LabelStyle> Name:</LabelStyle>
          <InputStyle
            className="inputstyle"
            type="text"
            placeholder="Enter name"
            ref={eingabeFeld}
          ></InputStyle>
          {icon}
        </FlexStyle>

        <RowStyle>
          <NewStyle
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
        </RowStyle>
        <FlexStyle>
          <LabelStyle>Present:</LabelStyle>
          <InputStyleBox
            type="checkbox"
            ref={present}
            value="Buy and send a present"
            // checked={action === "Buy and send a present"}
            // onChange={handleChange}
          ></InputStyleBox>
        </FlexStyle>
        <FlexStyle>
          <LabelStyle>Postcard:</LabelStyle>
          <InputStyleBox
            type="checkbox"
            ref={postcard}
            value="Buy and send a postcard"
            // checked={action === "Buy and send a postcard"}
            // onChange={handleChange}
          ></InputStyleBox>
        </FlexStyle>
        <FlexStyle>
          <LabelStyle>Message:</LabelStyle>
          <InputStyleBox
            type="checkbox"
            ref={message}
            value="Send a message"
            // checked={action === "Send a message"}
            // onChange={handleChange}
          ></InputStyleBox>
        </FlexStyle>
        <FlexStyle>
          <LabelStyle>Ideas:</LabelStyle>
          <InputStyleText
            className="inputstyle"
            ref={textarea}
            type="text"
            placeholder="Add ideas and thoughts"
          ></InputStyleText>
        </FlexStyle>
        <FlexStyle2>
          <CircleStyle onClick={onClickTest} />
        </FlexStyle2>
      </div>
    </div>
  );
}

export default Entries;

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
const NewStyle = styled(BirthdayInput)`
  /* position: absolute; */
  /* right: 10px;
  border-radius: 6px;
  border: 2px solid #2aa198;
  padding: 2px;
  width: 150px; */
  /* 
  &:focus {
    outline: none;
  }
  &:hover {
    border: 3px solid #d33682;
  }
  &:active {
    border: 3px solid #d33682;
  } */
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

const LabelStyle = styled.span`
  width: 10em;
  display: inline-block;
  margin-left: 10px;
`;

const FlexStyle = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const RowStyle = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
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

const AiOutlineArrowRightStyle = styled(AiOutlineClose)`
  /* margin-left: 95px; */
  margin-top: 2px;
  color: ${(props) => (props.isvalid ? "#fdf5df" : "#d33682")};
`;
