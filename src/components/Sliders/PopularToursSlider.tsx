import React, {useState} from 'react';
import styled from "styled-components";
import Tour from "../Tour";
import LeftButton from "../Buttons/Slider/LeftButton";
import RightButton from "../Buttons/Slider/RightButton";

export const Slider = styled.div`
  
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 40px;
  margin: 103px auto;
  
  max-width: 1281px;
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

export const ToursContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  
  padding: 0;
  gap: 24px;
  
  height: 572px;
`

interface TourSliderProps {
    data: Array<object>
}

const PopularToursSlider = ({data}: TourSliderProps) => {
    const [firstIndex, setFirstIndex] = useState(0);
    const currentSlides = data.slice(firstIndex, firstIndex+3);

    return (
        <Slider id="popularTours">
            <HeaderContext>
                <PopularHeadline>popular tours</PopularHeadline>
                <div>
                    <LeftButton currentIndex={firstIndex} changeIndex={setFirstIndex}/>
                    <RightButton currentIndex={firstIndex} changeIndex={setFirstIndex} maxIndex={data.length}/>
                </div>
            </HeaderContext>
            <ToursContainer>
                {currentSlides.map((item:any) => (
                    <Tour tourCard={item} key={item.id}/>
                ))}
            </ToursContainer>
        </Slider>
    );
};

export default PopularToursSlider;
