import React, { useRef } from "react";
import ListofEntries from "./ListofEntries";
import "./App.css";
import distanceToBirthday from "./distanceToBirthday";

function Main({ persons, setPersons }) {
  console.log(persons);

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

  return (
    <div className="container">
      <div className="box">
        <h1>Upcoming Birthdays</h1>
        <ListofEntries personslist={personscopy} showcountdown={true} />
        <ListofEntries personslist={ausschnitt} showcountdown={false} />
      </div>
    </div>
  );
}

export default Main;
