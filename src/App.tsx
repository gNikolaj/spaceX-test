import './styles.css';

import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache} from "@apollo/client";

import {RecoilRoot} from "recoil";

import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Favourites from "./components/Pages/Favourites";

const link = from([
    new HttpLink({uri: 'https://api.spacex.land/graphql/'})
])

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <RecoilRoot>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/favourites" element={<Favourites/>}/>
                        </Routes>
                        <Header/>
                    </div>
                </RecoilRoot>
            </BrowserRouter>
        </ApolloProvider>

    );
}

export default App;
