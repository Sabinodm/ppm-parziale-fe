import React from 'react';
import './App.css';
import PromoTopBar from "./components/PromoTopBar/PromoTopBar";
import MainBar from "./components/MainBar/MainBar";
import BackgroundPromo from "./components/BackgroundPromo/BackgroundPromo";
import IconPromo from "./components/IconPromo/IconPromo";
import HomePage from "./components/HomePage/HomePage";

function App() {
    return (
        <div className="App">
            <BackgroundPromo/>
            <PromoTopBar/>
            <MainBar/>
            <IconPromo/>
            <HomePage/>
        </div>
    );
}

export default App;
