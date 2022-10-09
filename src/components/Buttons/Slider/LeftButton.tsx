import React from 'react';

import ButtonL from '../../../assets/img/buttons/leftbutton.png'
import styled from "styled-components";

const Button = styled.button`
  border: none;
  width: 44px;
  height: 44px;
  :hover {
    cursor: pointer;
  }
  :active{
    width: 43px;
    height: 43px;
  }
`

const LeftButton = ({ currentIndex, changeIndex}: any) => {
    return (
        <Button onClick={() => {if (currentIndex !== 0)changeIndex(currentIndex - 1)}}>
            <img src={ButtonL} alt="leftButton"/>
        </Button>
    );
};

export default LeftButton;
