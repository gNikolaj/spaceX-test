import React from 'react';
import styled from "styled-components";
import ButtonR from "../../../assets/img/buttons/rightbutton.png";

const Button = styled.button`
  border: none;
  width: 44px;
  height: 44px;
  margin-left: 16px;
  :hover {
    cursor: pointer;
  }
  :active{
    width: 43px;
    height: 43px;
  }
`

const RightButton = ({currentIndex, changeIndex, maxIndex}: any) => {
    return (
        <Button onClick={() => {if (currentIndex <= maxIndex - 4) changeIndex(currentIndex + 1)}}>
            <img src={ButtonR} alt="rightButton"/>
        </Button>
    );
};

export default RightButton;
