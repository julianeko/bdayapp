import React, { useContext } from "react";
import { Context } from "./App";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";
import Countdown from "react-countdown";
import { MdNorthWest } from "react-icons/md";

function ListofEntries({ personslist, distanceToBirthday }) {
  const { persons, setPersons } = useContext(Context);

  function deleteItem(idtobedeleted) {
    var filtered = persons.filter((element) => element.id !== idtobedeleted);
    // localStorage.setItem("todos", JSON.stringify(filtered));
    console.log(filtered);
    setPersons(filtered);
  }
  console.log(personslist);

  let view = personslist.map((element) => (
    <div>
      <EntryBoxStyle key={element.id} deleteItem={deleteItem}>
        <BinStyle>
          <div>
            <LinkStyle to={"/change/" + element.id}> {element.name}</LinkStyle>
            <IoMdTrashStyle onClick={() => deleteItem(element.id)} />
          </div>
        </BinStyle>
        <div>{element.date}</div>
        <div>{element.present}</div>
        <div>{element.postcard}</div>
        <div>{element.message}</div>
        <div>{element.text}</div>
        <div>
          <Countdown date={distanceToBirthday(element.date)}></Countdown>
        </div>
      </EntryBoxStyle>
    </div>
  ));

  return <div>{view}</div>;
}

export default ListofEntries;

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
const BinStyle = styled.div`
  position: relative;
`;
