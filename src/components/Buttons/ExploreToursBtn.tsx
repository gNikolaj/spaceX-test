import React from 'react';
import styled from "styled-components";

import SlideImg from '../../assets/img/buttons/expPic.png'
import ScrollIntoView from "react-scroll-into-view";

const Button = styled.button`
  position: absolute;
  left: 50%;
  top: 668px;
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
        <ScrollIntoView selector="#popularTours">
            <Button>
                <img src={SlideImg} alt="next"/>
            </Button>
        </ScrollIntoView>

    );
};

export default ExploreToursBtn;
