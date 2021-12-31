import React, { useRef } from "react";
import "./App.css";
import { MdEmojiPeople } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";
import ListofEntries from "./ListofEntries";

function Data({ persons, setPersons }) {
  const input = useRef();
  const { search } = useParams();

  const navigate = useNavigate();
  console.log(persons);

  // function deleteItem(idtobedeleted) {
  //   var filtered = persons.filter((element) => element.id !== idtobedeleted);
  //   // localStorage.setItem("todos", JSON.stringify(filtered));
  //   console.log(filtered);
  //   setPersons(filtered);
  // }

  // let oneperson = persons.map((element) => (
  //   <div>
  //     <EntryBoxStyle key={element.id} deleteItem={deleteItem}>
  //       <BinStyle>
  //         <div>
  //           <LinkStyle to={"/change/" + element.id}> {element.name}</LinkStyle>
  //           <IoMdTrashStyle onClick={() => deleteItem(element.id)} />
  //         </div>
  //       </BinStyle>
  //       <div>{element.date}</div>
  //       <div>{element.present}</div>
  //       <div>{element.postcard}</div>
  //       <div>{element.message}</div>
  //       <div>{element.text}</div>
  //     </EntryBoxStyle>
  //   </div>
  // ));
  // console.log(oneperson);
  // console.log(persons);
  // console.log(persons.name);

  persons.sort(function (a, b) {
    return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
  });

  // let newArray = objectFound.map((element) => (
  //   <div>
  //     <EntryBoxStyle key={element.id} deleteItem={deleteItem}>
  //       <BinStyle>
  //         <div>
  //           <LinkStyle className="link" to={"/change/" + element.id}>
  //             {element.name}
  //           </LinkStyle>
  //         </div>
  //         <IoMdTrashStyle onClick={() => deleteItem(element.id)} />
  //       </BinStyle>
  //       <div>{element.date}</div>
  //       <div>{element.present}</div>
  //       <div>{element.postcard}</div>
  //       <div>{element.message}</div>
  //       <div>{element.text}</div>
  //     </EntryBoxStyle>
  //   </div>
  // ));

  let result = persons;
  if (search === undefined) {
    result = persons;
  } else {
    var re = new RegExp(search, "gim");

    var objectFound = persons.filter((element) => re.test(element.name));
    result = objectFound;
  }

  function onClick() {
    let nameSearch = input.current.value;
    navigate("/data/" + nameSearch);
  }
  function pressEnter(event) {
    if (event.key === "Enter") {
      onClick();
      event.preventDefault();
    }
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Your Friends</h1>
        <RowStyle>
          <InputStyle
            ref={input}
            type="text"
            placeholder="Search name"
            onKeyPress={pressEnter}
          ></InputStyle>
          <AiOutlineSendStyle onClick={onClick} />
        </RowStyle>

        <div>
          <ListofEntries personslist={result} />
        </div>
      </div>
    </div>
  );
}

export default Data;

const EntryBoxStyle = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #eee8d5;
  box-shadow: 2px 2px 4px -1px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
`;

const LinkStyle = styled(Link)`
  color: #d33682;
  text-decoration: none;
  &:hover {
    font-size: 20px;
  }
  &:active {
    font-size: 20px;
  }
`;
const IoMdTrashStyle = styled(IoMdTrash)`
  position: absolute;
  color: red;
  right: 20px;
  font-size: 25px;
  color: #2aa198;
  &:hover {
    font-size: 30px;
  }
  &:active {
    font-size: 30px;
  }
`;

const InputStyle = styled.input`
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 6px;
  border: 2px solid #2aa198;
  padding: 2px;
  width: 350px;

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

const RowStyle = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;
const BinStyle = styled.div`
  position: relative;
`;

const AiOutlineSendStyle = styled(AiOutlineSend)`
  font-size: 20px;
  margin-right: 10px;
  margin-top: 2px;
  margin-bottom: 2px;
  right: 0px;
  position: relative;
`;
