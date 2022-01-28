import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineFileSearch,
  AiOutlineForm,
} from "react-icons/ai";
function PrivacyPolice() {
  const navigate = useNavigate();
  function onClickHome() {
    navigate("/");
  }
  function onClickForm() {
    navigate("/entries/");
  }
  function onClickSortier() {
    navigate("/data/");
  }
  return (
    <div className="container">
      <div className="box">
        <PPStyle>
          As this app has no backend yet, all data will remain in the
          localstorage of the used device. No one else has access to the data.
          If you access the app via{" "}
          <a href="https://www.netlify.com/">netlify</a> it might be possible,
          that netlify collects additional data. Please check out the{" "}
          <a href="https://www.netlify.com/privacy">privacy police</a> for
          further information.
        </PPStyle>
        <LinkIconStyles>
          <LinkStyle onClick={onClickHome} />
          <LinkStyle2 onClick={onClickForm} />
          <LinkStyle3 onClick={onClickSortier} />
        </LinkIconStyles>
      </div>
    </div>
  );
}

export default PrivacyPolice;

const PPStyle = styled.p`
  margin: 10px;
  padding: 10px;
  background-color: #eee8d5;
  box-shadow: 2px 2px 4px -1px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
`;
const LinkIconStyles = styled.div`
  display: flex;
`;
const LinkStyle = styled(AiOutlineHome)`
  color: #2aa198;
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
