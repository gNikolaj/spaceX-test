import React from 'react';
import styled from "styled-components";

import IMG from '../assets/img/baner2.png';
import FavouritesButton from "./Buttons/FavouritesButton";
import BuyButton from "./Buttons/PopularTours/BuyButton";

const Section = styled.div`
  width: 411px;
  height: 572px;
  border: 1px solid #D3EAFF;
  
`

const Picture = styled.img`
  height: 296px;
  object-fit: cover;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 16px;
  
  margin: 64px auto;

  width: 347px;
  height: 53px;
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  
  width: 411px;
  height: 103px;
  
  margin-top: 32px;
  padding: 0 32px;
  gap: 16px;
  
  h3 {
    width: 347px;
    height: 29px;

    font-family: 'Syne',serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    text-transform: uppercase;
    color: #1E1E1E;
  }
  p {
    width: 347px;
    height: 58px;

    font-family: 'Lato',serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;

    color: #556B84;
  }
`

const Tour = () => {
    return (
        <Section>
            <Picture src={IMG} alt="someImg"/>
            <TextBox>
                <h3>Extraordinary tour</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
            </TextBox>
            <ButtonsContainer>
                <BuyButton/>
                <FavouritesButton/>
            </ButtonsContainer>

        </Section>
    );
};

export default Tour;
