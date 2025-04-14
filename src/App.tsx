import React from 'react';
import './App.css';
import PromoTopBar from "./components/PromoTopBar/PromoTopBar";
import MainBar from "./components/MainBar/MainBar";

function App() {
    return (
        <div className="App">
            <PromoTopBar/>
            <MainBar/>
        </div>
    );
}

export default App;
