import React, { useRef } from "react";
import "./App.css";
import { MdCake } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Entries({ persons, setPersons }) {
  const eingabeFeld = useRef();
  const eingabeFeld2 = useRef();
  const message = useRef();
  const postcard = useRef();
  const present = useRef();
  const textarea = useRef();

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
        text: textarea.current.value,
      },
      ...persons,
    ]);

    eingabeFeld.current.value = "";
    eingabeFeld2.current.value = "";
    present.current.checked = "";
    postcard.current.checked = "";
    message.current.checked = "";
    textarea.current.value = "";
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
        <h1>By-Happy</h1>
        <FlexStyle>
          <LabelStyle> Name:</LabelStyle>
          <InputStyle
            className="inputstyle"
            type="text"
            placeholder="Enter name"
            ref={eingabeFeld}
          ></InputStyle>
        </FlexStyle>
        <FlexStyle>
          <LabelStyle>Date of birth:</LabelStyle>
          <InputStyle
            className="inputstyle"
            ref={eingabeFeld2}
            type="date"
            placeholder="Enter Birthday-Date"
          ></InputStyle>
        </FlexStyle>
        <div>
          <label>Present:</label>
          <InputStyleBox
            type="checkbox"
            ref={present}
            value="Buy and send a present"
            // checked={action === "Buy and send a present"}
            // onChange={handleChange}
          ></InputStyleBox>
        </div>
        <div>
          <label>Postcard:</label>
          <input
            type="checkbox"
            ref={postcard}
            value="Buy and send a postcard"
            // checked={action === "Buy and send a postcard"}
            // onChange={handleChange}
          ></input>
        </div>
        <label>Message:</label>
        <input
          type="checkbox"
          ref={message}
          value="Send a message"
          // checked={action === "Send a message"}
          // onChange={handleChange}
        ></input>
        <div>
          Ideas:
          <InputStyleText
            className="inputstyle"
            ref={textarea}
            type="text"
            placeholder="Add ideas and thoughts"
          ></InputStyleText>
        </div>
        <span className="btn" onClick={newEntry}>
          <MdCake /> Save
        </span>
        <div>
          <Link to={"/data/"}>Your Friends</Link>
        </div>
        <CircleStyle />
      </div>
    </div>
  );
}

export default Entries;

const InputStyle = styled.input`
  position: absolute;
  right: 10px;
  border-radius: 6px;
  border: 2px solid #2aa198;
  padding: 2px;
  margin-top: 10px
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
  &:hover {
    border: 3px solid #2aa198;
  }
  &:active {
    border: 3px solid #2aa198;
  }
`;

const InputStyleText = styled.textarea`
  position: absolute;
  right: 10px;
  border-radius: 6px;
  border: 2px solid #2aa198;
  padding: 2px;
  &:focus {
    outline: none;
  }
  &:hover {
    border: 3px solid #2aa198;
  }
  &:active {
    border: 3px solid #2aa198;
  }
`;
const InputStyleBox = styled.input`
  border: 2 px solid #2aa198;
`;

const LabelStyle = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FlexStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const CircleStyle = styled(AiOutlinePlusCircle)`
  top: 300px;
  right: 20px;
  position: absolute;
  color: #d33682;
  font-size: 60px;
  &:hover {
    color: #2aa198;
    font-size: 65px;
  }
  &:active {
    color: #2aa198;
  }
`;
