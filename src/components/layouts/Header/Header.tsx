import React, {FormEvent, useContext, useState} from "react";

import {Btn} from "../../common/Btn/Btn";
import {SearchContext} from "../../contexts/search.context";

import './Header.css'

export const Header = () => {

    const {search,setSearch} = useContext(SearchContext);
    const [inputVal,setInputVal] = useState(search);

    const setSearchFromState = (e:FormEvent) =>{
        e.preventDefault()
        setSearch(inputVal);
    }

    return(
        <header>
            <h1><b>Mega </b> <span>Ogłoszenia</span></h1>
            <Btn text="Dodaj ogłoszenie"/>
            <div className="search">
                <form className="search-area" onSubmit={setSearchFromState}>
                    <input
                        value={inputVal}
                        onChange={e => setInputVal(e.target.value)}
                        type="text"
                        placeholder='search...'
                    />
                    <Btn text="🔍"/>
                </form>
            </div>
        </header>
    )
};