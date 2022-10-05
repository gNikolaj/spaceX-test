import React from 'react';
import styled from "styled-components";

import Fav from '../../assets/img/favourite.png'

const Button = styled.button`
  border: none;
  
  width: 54px;
  height: 54px;
`

const FavouritesButton = () => {
    return (
        <Button>
            <img src={Fav} alt="favourite"/>
        </Button>
    );
};

export default FavouritesButton;
