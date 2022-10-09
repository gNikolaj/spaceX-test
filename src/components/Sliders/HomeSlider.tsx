import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import Slide1 from '../../assets/img/baner1.png';
import Slide2 from '../../assets/img/baner2.png';
import Slide3 from '../../assets/img/baner3.png';

const slidesArr = [Slide1, Slide2, Slide3];

const Slider = styled.ul`
  img {
    width: 100%;
    height: 740px;
    object-fit: cover;
    filter: brightness(0.4);
  }
`

const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 8px;
  
  position: absolute;

  width: 88px;
  height: 24px;
  top: 430px;
  
  left: 47.5%;
  transform: translateX(-50%);
  
  
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
    const [sliderImg, setSliderImg] = useState(slidesArr[0]);

    const handleClick = (e:any) => {
        setSliderImg(slidesArr[+e.target.value]);
        console.log(+e.target.value);
    }

    return (
            <Slider>
                <li>
                    <img src={sliderImg} alt="slide1"/>
                </li>
                <Headline>
                    <h2>THE SPACE IS WAITING FOR</h2>
                    <h1>YOU</h1>
                </Headline>
                <Inputs>
                    <label htmlFor="">
                        <input type="radio" value="0" name="firstSlider" defaultChecked onClick={handleClick}/>
                        <span/>
                    </label>
                    <label htmlFor="">
                        <input type="radio" value="1" name="firstSlider" onClick={handleClick}/>
                        <span/>
                    </label>
                    <label htmlFor="">
                        <input type="radio" value="2" name="firstSlider" onClick={handleClick}/>
                        <span/>
                    </label>
                </Inputs>
            </Slider>

    );
};

export default HomeSlider;
