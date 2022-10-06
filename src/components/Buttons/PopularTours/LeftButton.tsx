import React from 'react';

import ButtonL from '../../../assets/img/leftbutton.png'
import styled from "styled-components";

const Button = styled.button`
  border: none;
  
  width: 44px;
  height: 44px;
`

const LeftButton = () => {
    return (
        <Button>
            <img src={ButtonL} alt="leftButton"/>
        </Button>
    );
};

export default LeftButton;
