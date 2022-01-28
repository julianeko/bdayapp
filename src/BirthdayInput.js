import React, { useState, useEffect } from "react";
import styled from "styled-components";

function BirthdayInput({ day, month, year, onChange, icon2 }) {
  const [withyear, setWithyear] = useState(false);
  const [iday, setIDay] = useState(day || new Date().getDate());
  const [imonth, setIMonth] = useState(month || new Date().getMonth() + 1);
  const [iyear, setIYear] = useState(year || new Date().getFullYear());
  useEffect(() => {
    if (withyear === true) {
      onChange(iday, imonth, iyear);
    } else {
      onChange(iday, imonth, undefined);
    }
  }, [iday, imonth, iyear, withyear, onChange]);

  function changeToWithYear(event) {
    setWithyear(event.target.checked);
  }

  if (withyear === true) {
    console.log("checked");
    var showwithyear = (
      <FlexStyle>
        <LabelStyle>Date:</LabelStyle>
        <InputStyle1
          value={iday}
          onChange={(e) => setIDay(e.target.value)}
          type="number"
          placeholder="dd"
          min="1"
          max="31"
        ></InputStyle1>
        <InputStyle1
          value={imonth}
          onChange={(e) => setIMonth(e.target.value)}
          type="number"
          placeholder="mm"
          min="1"
          max="12"
        ></InputStyle1>
        <InputStyle
          value={iyear}
          onChange={(e) => setIYear(e.target.value)}
          type="number"
          placeholder="yyyy"
          min="1900"
        ></InputStyle>
        {icon2}

        <FlexStyle2>
          Day / Month /
          <InputStylecheckb
            type="checkbox"
            checked={withyear}
            onChange={changeToWithYear}
          ></InputStylecheckb>
          Year
        </FlexStyle2>
      </FlexStyle>
    );
  } else {
    var showwithoutyear = (
      <FlexStyle>
        <LabelStyle>Date:</LabelStyle>
        <InputStyle1
          value={iday}
          onChange={(e) => setIDay(e.target.value)}
          type="number"
          placeholder="dd"
          min="1"
          max="31"
        ></InputStyle1>
        <InputStyle1
          value={imonth}
          onChange={(e) => setIMonth(e.target.value)}
          type="number"
          placeholder="mm"
          min="1"
          max="12"
        ></InputStyle1>
        {icon2}

        <FlexStyle3>
          Day / Month /
          <InputStylecheckb
            type="checkbox"
            checked={withyear}
            onChange={changeToWithYear}
          ></InputStylecheckb>
          Year
        </FlexStyle3>
      </FlexStyle>
    );
  }

  return (
    <div>
      {showwithyear} {showwithoutyear}
    </div>
  );
}

export default BirthdayInput;

const InputStylecheckb = styled.input`
  right: 10px;
  border-radius: 6px;
  border: 2px solid #2aa198;
  padding: 2px;
  margin-right: 5px;
  margin-left: 5px;
  &:focus {
    outline: none;
  }
  &:hover {
    border: 2px solid #d33682;
  }
  &:active {
    border: 2px solid #d33682;
  }
`;

const InputStyle = styled.input`
  /* position: absolute; */
  right: 10px;
  border-radius: 6px;
  border: 2px solid #2aa198;
  padding: 2px;
  width: 55px;
  margin-right: 0px;

  &:focus {
    outline: none;
  }
  &:hover {
    border: 2px solid #d33682;
  }
  &:active {
    border: 2px solid #d33682;
  }
`;
const InputStyle1 = styled.input`
  /* position: absolute; */
  right: 10px;
  border-radius: 6px;
  border: 2px solid #2aa198;
  padding: 2px;
  width: 35px;
  margin-right: 0px;

  &:focus {
    outline: none;
  }
  &:hover {
    border: 2px solid #d33682;
  }
  &:active {
    border: 2px solid #d33682;
  }
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
  margin-top: 10px;
  margin-left: 150px;
  /* text-align: right;
  right: 10px; */
  /* left: 69px;
  right: 0; */
`;
const FlexStyle3 = styled.div`
  margin-top: 10px;
  margin-left: 150px;
  /* text-align: right;
  right: 10px; */

  /* left: 100.5px;
  right: 0; */
`;
