import React from 'react';
import styled from "styled-components";

import IMG from '../assets/img/baner2.png';
import FavouritesButton from "./Buttons/Tour/FavouritesButton";
import BuyButton from "./Buttons/Tour/BuyButton";
import {useRecoilState, useRecoilValue} from "recoil";
import {checkPage} from "../atoms";
import DeleteButton from "./Buttons/Tour/DeleteButton";

const Section = styled.div`
  width: 411px;
  height: 572px;
  border: 1px solid #D3EAFF;
`

const Picture = styled.img`
  height: 296px;
  object-fit: cover;
  margin: 0 auto;
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

interface TourProps {
    tourCard:any
}

const Tour = ({tourCard}: TourProps) => {
    const activeFavPage = useRecoilValue(checkPage);

    const title = tourCard.title;
    const subtitle = tourCard.flight.mission_name;
    const image = tourCard.flight.links.flickr_images[0];

    return (
        <Section>
            <Picture src={image} alt="someImg"/>
            <TextBox>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </TextBox>
            <ButtonsContainer>
                <BuyButton/>
                {activeFavPage ? <FavouritesButton tourCard={tourCard}/> : <DeleteButton tourCard={tourCard}/>}
            </ButtonsContainer>

        </Section>
    );
};

export default Tour;
