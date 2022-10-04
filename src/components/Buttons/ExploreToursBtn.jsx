import React from 'react';
import styled from "styled-components";

import SlideImg from '../../assets/img/expPic.png'

const Button = styled.button`
  position: absolute;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
  display: flex;
  width: 231px;

  background: none;
  border: none;
  
  :hover {
    cursor: pointer;
  }
`

const ExploreToursBtn = () => {
    return (
        <Button>
            <img src={SlideImg} alt="next"/>
        </Button>
    );
};

export default ExploreToursBtn;
