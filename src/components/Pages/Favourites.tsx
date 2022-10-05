import React from 'react';
import styled from "styled-components";

import IMG from '../../assets/img/baner3.png';
import PopularToursSlider from "../Sliders/PopularToursSlider";

const FavouritesPage = styled.div`
  position: relative;
`

const ImageContainer = styled.div`
  width: 100%;
  max-height: 440px;

  img {
    width: 100%;
    height: 440px;
    object-fit: cover;
    object-position: top;
    filter: brightness(0.4);
  }
`

const Headline = styled.h1`
  position: absolute;
  width: 513px;
  height: 58px;
  top: 220px;
  
  left: 50%;
  transform: translateX(-50%);

  font-family: 'Syne',serif;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  text-transform: uppercase;
  color: #FFFFFF;
`

const Favourites = () => {
    return (
        <FavouritesPage>
            <ImageContainer>
                <img src={IMG} alt="img"/>
                <Headline>favourites</Headline>
            </ImageContainer>
            <PopularToursSlider/>
        </FavouritesPage>
    );
};

export default Favourites;