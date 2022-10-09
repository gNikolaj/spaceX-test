import React, {useState} from 'react';

import {useRecoilState} from "recoil";
import {favouriteTours} from "../../../atoms";

import styled from "styled-components";

import Fav from '../../../assets/img/buttons/favourite.png';
import ActiveFav from '../../../assets/img/buttons/activeFavButton.png';

export const Button = styled.button`
  border: none;
  background: none;

  :hover {
    cursor: pointer;
  }

  img {
    height: 54px;
    width: 57px;
  }
`

const FavouritesButton = ({tourCard}: any) => {
    const [favourites, setFavourites] = useRecoilState(favouriteTours);
    const [favIcon, setFavIcon] = useState(Fav);

    const handleClick = () => {
        setFavIcon(ActiveFav);
        if (favourites.length > 0) {
            let checker = false;
            favourites.forEach((item: any) => {
                if (item.id === tourCard.id) {
                    checker = true;
                }
            })
            if (!checker) {
                setFavourites([...favourites, tourCard]);
            }
        } else {
            setFavourites([...favourites, tourCard]);
        }
    }

    return (
        <Button onClick={handleClick}>
            <img src={favIcon} alt="favourite"/>
        </Button>
    );
};

export default FavouritesButton;
