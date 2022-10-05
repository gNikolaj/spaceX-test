import React from 'react';
import styled from "styled-components";
import ButtonR from "../../../assets/img/rightbutton.png";

const Button = styled.button`
  border: none;
  width: 44px;
  height: 44px;
  margin-left: 16px;
`

const RightButton = () => {
    return (
        <Button>
            <img src={ButtonR} alt="rightButton"/>
        </Button>
    );
};

export default RightButton;
