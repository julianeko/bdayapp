import React, { useRef } from "react";
import ListofEntries from "./ListofEntries";
import "./App.css";
import { MdEmojiPeople, MdFrontHand } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";
import distanceToBirthday from "./distanceToBirthday";
function Main({ persons, setPersons }) {
  console.log(persons);

  const personscopy = [...persons];

  // ndate.forEach((element) => console.log(element));
  const currDate = new Date();
  // currDate.setHours(0, 0, 0, 0);

  // function distanceToBirthday(date) {
  //   let currYear = currDate.getFullYear();

  //   const offset = new Date(currDate);

  //   offset.setFullYear(currYear + 1);

  //   date = new Date(date);
  //   date.setFullYear(currYear);

  //   let diff = date - currDate;

  //   return diff < 0 ? diff + offset.getTime() : diff;
  // }

  personscopy.sort(function (a, b) {
    return distanceToBirthday(a.date) - distanceToBirthday(b.date);
  });
  console.log(personscopy);

  // const ndate = personscopy.map((e) => new Date(e.date).getDate());
  // console.log(ndate);
  // console.log(currDate);
  // var nextmonth = currDate.getDate();
  // console.log(nextmonth);

  // var find = personscopy.filter(
  //   (element) =>
  //     currDate.getDate() === new Date(element.date).getDate() &&
  //     currDate.getDate + 30 === new Date(element.date).getDate()
  // );
  // console.log(find);

  var find = personscopy.filter(
    (element) =>
      (new Date(element.date).getMonth() === currDate.getMonth() &&
        new Date(element.date).getDate() >= currDate.getDate()) ||
      new Date(element.date).getMonth() === currDate.getMonth() + 1 ||
      new Date(element.date).getMonth() === currDate.getMonth() - 11
  );

  console.log(find);

  // function nextbday() {
  //   var newtest = getMonth();
  //   var nextmonth = currDate.getMonth() + 1;
  //   return newtest + nextmonth;
  // }
  // console.log(test);

  // var todaymonth = new Date().getMonth();
  // var todayday = new Date().getDate();

  // var dateb = new Date(b.date);
  // var datea = new Date(a.date);

  // var datebmonth = dateb.getMonth();
  // var dateamonth = datea.getMonth();
  // var datebday = dateb.getDate();
  // var dateaday = datea.getDate();
  // console.log(dateb);
  // console.log(datea);
  // console.log(datebmonth);
  // console.log(dateamonth);
  // console.log(dateaday);
  // console.log(datebday);
  // console.log(todaymonth);
  // console.log(todayday);

  // return yearDifference(dateb) - yearDifference(datea);

  // } else if (
  //   todayday > datebday &&
  //   todayday > dateaday &&
  //   todayday === dateaday
  // ) {
  //   return todayday - dateaday;
  // }
  //   console.log(today);
  //   if (dateb.getMonth() !== datea.getMonth()) {
  //     return dateb.getMonth() - datea.getMonth();
  //   } else if (dateb.getMonth() === datea.getMonth()) {
  //     return dateb.getDay() - datea.getDay();
  //   }
  // });
  // persons.sort(function(a,b){
  //   var today = new Date();

  //   var dateb = new Date(b.date);
  //   var datea = new Date(a.date);

  return (
    <div className="container">
      <div className="box">
        <h1>Upcoming Birthdays</h1>
        <ListofEntries
          personslist={personscopy}
          distanceToBirthday={distanceToBirthday}
        />
      </div>
    </div>
  );
}

export default Main;
