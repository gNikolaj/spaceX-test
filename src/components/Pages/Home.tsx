import React, {useEffect} from 'react';
import styled from "styled-components";
import HomeSlider from "../Sliders/HomeSlider";
import ExploreToursBtn from "../Buttons/ExploreToursBtn";
import PopularToursSlider from "../Sliders/PopularToursSlider";
import {useQuery} from "@apollo/client";
import {LOAD_TOURS} from "../../graphQL/Queries";
import {List} from "@mui/material";

const HomePage = styled.div`
  position: relative;
`

const Home = () => {
    const {error, loading, data} = useQuery(LOAD_TOURS);

    useEffect(() => {
        if (data !== undefined) {
            let res = data['histories'].filter((item:any) => item.flight !== null);
            console.log(res);
        }

    }, [data]);


    return (
        <HomePage>
            <HomeSlider/>
            <ExploreToursBtn/>
            {!loading && <PopularToursSlider/>}
        </HomePage>
    );
};

export default Home;
