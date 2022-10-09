import React, {useEffect, useState} from 'react';

import styled from "styled-components";
import {LOAD_TOURS} from "../../graphQL/Queries";

import {useQuery} from "@apollo/client";

import HomeSlider from "../Sliders/HomeSlider";
import ExploreToursBtn from "../Buttons/ExploreToursBtn";
import PopularToursSlider from "../Sliders/PopularToursSlider";

const HomePage = styled.div`
  position: relative;
`

const Home = () => {
    const {loading, data} = useQuery(LOAD_TOURS);
    const [filteredTours, setFilteredTours] = useState([]);

    useEffect(() => {
        if (data !== undefined) {
            const {histories} = data;
            const res = histories.filter((item: any) => item.flight !== null
                && item.flight.links.flickr_images.length !== 0);
            setFilteredTours(res);
        }

    }, [data]);


    return (
        <HomePage>
            <HomeSlider/>
            <ExploreToursBtn/>
            {!loading && <PopularToursSlider data={filteredTours}/>}
        </HomePage>
    );
};

export default Home;
