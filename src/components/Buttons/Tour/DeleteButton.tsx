import React from 'react';

import Delete from "../../../assets/img/buttons/deletebutton.png";
import {useRecoilState} from "recoil";
import {favouriteTours} from "../../../atoms";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: none;
  :hover {
    cursor: pointer;
  }
`

const DeleteButton = ({tourCard}: any) => {
    const [favourites, setFavourites] = useRecoilState(favouriteTours);

    const handleClick = () => {
        console.log(favourites.indexOf(tourCard))
        const test = favourites.filter((item) => (
            item.id !== tourCard.id
        ))
        setFavourites(test);
    }

    return (
        <Button onClick={handleClick}>
            <img src={Delete} alt="favourite"/>
        </Button>
    );
};

export default DeleteButton;
