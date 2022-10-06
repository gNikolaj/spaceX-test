import React from 'react';
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: none;
  width: 278px;
  height: 53px;
  background: #D3EAFF;
  
  h3 {
    width: 54px;
    height: 29px;
    font-family: 'Syne',serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
  }
`

const BuyButton = () => {
    return (
        <Button>
            <h3>buy</h3>
        </Button>
    );
};

export default BuyButton;
