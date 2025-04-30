import React from 'react';
import './App.css';
import PromoTopBar from "./components/PromoTopBar/PromoTopBar";
import MainBar from "./components/MainBar/MainBar";
import BackgroundPromo from "./components/BackgroundPromo/BackgroundPromo";
import IconPromo from "./components/IconPromo/IconPromo";

function App() {
    return (
        <div className="App">
            <BackgroundPromo/>
            <PromoTopBar/>
            <MainBar/>
            <IconPromo/>
        </div>
    );
}

export default App;
