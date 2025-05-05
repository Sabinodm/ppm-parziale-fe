import React from 'react';
import './App.css';
import PromoTopBar from "./components/Header/PromoTopBar/PromoTopBar";
import MainBar from "./components/Header/MainBar/MainBar";
import BackgroundPromo from "./components/BackgroundPromo/BackgroundPromo";
import IconPromo from "./components/IconPromo/IconPromo";
import HomePage from "./components/HomePage/HomePage/HomePage";
import BottomPromo from "./components/BottomPromo/BottomPromo";
import PrivacyButton from "./components/PrivacyButton/PrivacyButton";
import SupportUsButton from "./components/SupportUsButton/SupportUsButton";

function App() {
    return (
        <div className="App">
            <BackgroundPromo/>
            <PrivacyButton/>
            <SupportUsButton/>
            <PromoTopBar/>
            <MainBar/>
            <IconPromo/>
            <HomePage/>
            <BottomPromo/>
        </div>
    );
}

export default App;
