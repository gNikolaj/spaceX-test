import React from 'react';

import {useRecoilState} from "recoil";
import {favouriteTours} from "../../../atoms";

import styled from "styled-components";

import Delete from "../../../assets/img/buttons/deletebutton.png";

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
