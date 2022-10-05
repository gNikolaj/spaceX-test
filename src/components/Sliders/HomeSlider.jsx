import React from 'react';
import styled from "styled-components";

import Slide1 from '../../assets/img/baner1.png';
import Slide2 from '../../assets/img/baner2.png';
import Slide3 from '../../assets/img/baner3.png';


const Slider = styled.ul`
  img {
    width: 100%;
    height: 740px;
    object-fit: cover;
    filter: brightness(0.4);
  }
  label {
    background: black;
  }
`

const Inputs = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Headline = styled.div`
  position: absolute;
  
  top: 232px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  width: 1200px;
  
  text-align: center;
  align-items: center;

  font-family: 'Syne',serif;
  font-style: normal;
  
  h1 {
    font-size: 310px;
    line-height: 310px;
    font-weight: 800;

  }
  
  h2 {
    height: 58px;
    font-size: 48px;
    line-height: 80px;
    font-weight: 800;
  }
`

const HomeSlider = () => {

    return (
            <Slider>
                <li>
                    <img src={Slide1} alt="slide1"/>
                </li>
                {/*<li>*/}
                {/*    <img src={Slide2} alt="slide2"/>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <img src={Slide3} alt="slide3"/>*/}
                {/*</li>*/}
                <Inputs>

                </Inputs>
                <Headline>
                    <h2>THE SPACE IS WAITING FOR</h2>
                    <h1>YOU</h1>
                </Headline>
            </Slider>

    );
};

export default HomeSlider;
