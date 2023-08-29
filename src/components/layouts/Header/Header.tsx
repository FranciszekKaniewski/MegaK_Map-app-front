import React from "react";

import './Header.css'
import {Btn} from "../../common/Btn/Btn";

export const Header = () =>(
    <header>
        <h1><b>Mega </b> <span>Ogłoszenia</span></h1>
        <Btn text="Dodaj ogłoszenie"/>
        <div className="search">
            <div className="search-area">
                <input type="text" placeholder='search...'/>
                <Btn text="🔍"/>
            </div>
        </div>
    </header>
);