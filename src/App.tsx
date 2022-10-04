import React from 'react';
import Header from "./components/Header/Header";
import './styles.css';
import HomeSlider from "./components/Sliders/HomeSlider";
import ExploreToursBtn from "./components/Buttons/ExploreToursBtn";
import PopularToursSlider from "./components/Sliders/PopularToursSlider";

function App() {
    return (
        <div className="App">
            <div style={{position: 'relative'}}>
                <HomeSlider/>
                <Header/>
                <ExploreToursBtn/>
            </div>
            <PopularToursSlider/>
        </div>
    );
}

export default App;
