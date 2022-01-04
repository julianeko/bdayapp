import React, { useContext } from "react";
import { Context } from "./App";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";
import distanceToBirthday from "./distanceToBirthday";
// import { pathExists } from "path-exists";

function ListofEntries({ personslist, showcountdown }) {
  const { persons, setPersons } = useContext(Context);

  function deleteItem(idtobedeleted) {
    var filtered = persons.filter((element) => element.id !== idtobedeleted);
    // localStorage.setItem("todos", JSON.stringify(filtered));
    console.log(filtered);
    setPersons(filtered);
  }
  console.log(personslist);

  let view = personslist.map((element) => {
    if (showcountdown === true) {
      const msToBday = distanceToBirthday(element.date);
      const daysToBday = Math.round(msToBday / (60 * 60 * 24 * 1000));
      var countdown = <div>Days to go: {daysToBday}</div>;
    } else {
      var countdown = undefined;
    }
    return (
      <div>
        <EntryBoxStyle key={element.id} deleteItem={deleteItem}>
          <BinStyle>
            <div>
              <LinkStyle to={"/change/" + element.id}>{element.name}</LinkStyle>
              <IoMdTrashStyle onClick={() => deleteItem(element.id)} />
            </div>
          </BinStyle>
          <div>{element.date}</div>
          <div>{element.present}</div>
          <div>{element.postcard}</div>
          <div>{element.message}</div>
          <div>{element.text}</div>
          {countdown}
        </EntryBoxStyle>
      </div>
    );
  });

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
