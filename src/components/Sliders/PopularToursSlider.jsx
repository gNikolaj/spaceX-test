import React from 'react';
import styled from "styled-components";
import Tour from "../Tour";

const Slider = styled.div`
  display: flex;
`

const PopularToursSlider = () => {
    return (
        <Slider>
            <Tour/>
            <Tour/>
            <Tour/>
        </Slider>
    );
};

export default PopularToursSlider;
