import React, {useState} from 'react';
import {Slider, ToursContainer} from "./PopularToursSlider";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {favouriteTours} from "../../atoms";
import Tour from "../Tour";
import LeftButton from "../Buttons/Slider/LeftButton";
import RightButton from "../Buttons/Slider/RightButton";
import ClearAllButton from "../Buttons/ClearAllButton";

const HeaderContext = styled.div`
  display: flex;
  justify-content: space-between;
`

const FavouritesSlider = () => {
    const [favourites, setFavourites] = useRecoilState(favouriteTours);

    const [firstIndex, setFirstIndex] = useState(0);
    const currentSlides = favourites.slice(firstIndex, firstIndex+3);

    return (
        <Slider>
            <HeaderContext>
                <ClearAllButton />
                <div>
                    <LeftButton currentIndex={firstIndex} changeIndex={setFirstIndex}/>
                    <RightButton currentIndex={firstIndex} changeIndex={setFirstIndex} maxIndex={favourites.length}/>
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

export default FavouritesSlider;
