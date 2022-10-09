import React, {useState} from 'react';

import {useRecoilValue} from "recoil";
import {favouriteTours} from "../../atoms";

import styled from "styled-components";
import {Slider, ToursContainer} from "./PopularToursSlider";

import Tour from "../Tour";
import LeftButton from "../Buttons/Slider/LeftButton";
import RightButton from "../Buttons/Slider/RightButton";
import ClearAllButton from "../Buttons/ClearAllButton";

const HeaderContext = styled.div`
  display: flex;
  justify-content: space-between;
`

const FavouritesSlider = () => {
    const favourites = useRecoilValue(favouriteTours);

    const [firstIndex, setFirstIndex] = useState(0);
    const currentSlides = favourites.slice(firstIndex, firstIndex + 3);

    return (
        <Slider>
            <HeaderContext>
                <ClearAllButton/>
                <div>
                    <LeftButton currentIndex={firstIndex} changeIndex={setFirstIndex}/>
                    <RightButton currentIndex={firstIndex} changeIndex={setFirstIndex} maxIndex={favourites.length}/>
                </div>
            </HeaderContext>
            <ToursContainer>
                {currentSlides.map((item: any) => (
                    <Tour tourCard={item} key={item.id}/>
                ))}
            </ToursContainer>
        </Slider>
    );
};

export default FavouritesSlider;
