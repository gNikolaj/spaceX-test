import React from 'react';
import styled from "styled-components";
import Tour from "../Tour";
import LeftButton from "../Buttons/PopularTours/LeftButton";
import RightButton from "../Buttons/PopularTours/RightButton";

const Slider = styled.div`
  
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 40px;
  margin: 103px auto;
  
  width: 1281px;
  height: 720px;
  
`

const HeaderContext = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 712px;
`

const PopularHeadline = styled.h3`
  width: 465px;
  height: 38px;

  font-family: 'Syne',serif;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
`

const ToursContainer = styled.div`
  display: flex;
  justify-content: center;
  
  padding: 0;
  gap: 24px;
  
  height: 572px;
  
`


const PopularToursSlider = () => {

    return (
        <Slider>
            <HeaderContext>
                <PopularHeadline>popular tours</PopularHeadline>
                <div>
                    <LeftButton/>
                    <RightButton/>
                </div>
            </HeaderContext>
            <ToursContainer>
                <Tour/>
                <Tour/>
                <Tour/>
            </ToursContainer>
            <div>

            </div>
        </Slider>
    );
};

export default PopularToursSlider;
