import React, {useState} from 'react';
import {Header} from "./components/layouts/Header/Header";
import {Map} from "./components/Map/Map";
import {SearchContext} from "./components/contexts/search.context";

import './App.css'



export const App = () => {
    const [search,setSearch] = useState('')

  return (
      <>
          <SearchContext.Provider value={{search, setSearch}}>
              <Header/>
              <Map/>
          </SearchContext.Provider>
      </>
  );
};
