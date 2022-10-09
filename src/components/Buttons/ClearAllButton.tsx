import React from 'react';
import styled from "styled-components";
import {useSetRecoilState} from "recoil";
import {favouriteTours} from "../../atoms";

const Button = styled.button`
  border: none;
  background: none;
  
  h3 {

    font-family: 'Lato',serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;

    color: #556B84;
  }
  
  :hover {
    cursor: pointer;
  }
  
  :active {
    height: 2px;
  }
`


const ClearAllButton = () => {
    const setFavourites = useSetRecoilState(favouriteTours);

    return (
        <Button onClick={() => {setFavourites([])}}>
            <h3>Clear all</h3>
        </Button>
    );
};

export default ClearAllButton;
