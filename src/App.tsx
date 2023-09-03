import React, {useState} from 'react';
import {Header} from "./components/layouts/Header/Header";
import {Map} from "./components/Map/Map";
import {AddForm} from "./components/AddForm/AddForm";
import {SearchContext} from "./components/contexts/search.context";
import {Route, Routes} from "react-router-dom";

import './App.css'

export const App = () => {
    const [search,setSearch] = useState('')

  return (
      <>
          <SearchContext.Provider value={{search, setSearch}}>
              <Header/>
              <Routes>
                  <Route path='/' element={<Map/>}/>
                  <Route path='/add' element={<AddForm/>}/>
              </Routes>
          </SearchContext.Provider>
      </>
  );
};
