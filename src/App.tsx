import React from 'react';
import Header from "./components/Header/Header";
import './styles.css';

import Home from "./components/Pages/Home";
import Favourites from "./components/Pages/Favourites";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/favourites" element={<Favourites/>}/>
                </Routes>
                <Header/>
            </div>
        </BrowserRouter>
    );
}

export default App;
