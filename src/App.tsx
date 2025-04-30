import React from 'react';
import './App.css';
import PromoTopBar from "./components/PromoTopBar/PromoTopBar";
import MainBar from "./components/MainBar/MainBar";
import BackgroundPromo from "./components/BackgroundPromo/BackgroundPromo";

function App() {
    return (
        <div className="App">
            <BackgroundPromo/>
            <PromoTopBar/>
            <MainBar/>
        </div>
    );
}

export default App;
