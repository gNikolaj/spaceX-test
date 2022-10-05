import React from 'react';
import styled from "styled-components";
import HomeSlider from "../Sliders/HomeSlider";
import ExploreToursBtn from "../Buttons/ExploreToursBtn";
import PopularToursSlider from "../Sliders/PopularToursSlider";

const HomePage = styled.div`
  position: relative;
`

const Home = () => {
    return (
        <HomePage>
            <HomeSlider/>
            <ExploreToursBtn/>
            <PopularToursSlider/>
        </HomePage>
    );
};

export default Home;
