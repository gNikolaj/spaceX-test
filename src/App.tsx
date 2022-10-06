import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {RecoilRoot} from "recoil";

import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Favourites from "./components/Pages/Favourites";

import './styles.css';
import {ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache} from "@apollo/client";

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
