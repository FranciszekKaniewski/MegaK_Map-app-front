import React from 'react';

import './App.css'

export const App = () => {

  return (
      <>
        <header>
            <h1><b>Mega </b> <span>Ogłoszenia</span></h1>
            <button className="add-notice-btn">Dodaj ogłoszenie</button>
            <div className="search">
                <div className="search-area">
                    <input type="text" placeholder='search...'/>
                    <button>🔍</button>
                </div>
            </div>
        </header>
        <div className="map"></div>
      </>
  );
};
