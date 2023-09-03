import React, {useEffect, useState} from "react";
import { AdEntity } from "types";

interface Props{
    id: string;
}

export const SingleAd = ({id}:Props) =>{
    const [ad,setAd] = useState<AdEntity|null>(null)

    useEffect(()=>{
        (async()=>{

            const res = await fetch(`http://localhost:3001/ad/${id}`)
            const data = await res.json();

            setAd(data);
        })()
    },[id])

    if(ad === null){
        return <p>Wczytywanie...</p>
    }

    return (
        <>
            <h2>{ad.name} {ad.price}zł</h2>
            <p>{ad.description}</p>
            <hr/>
            <a href={ad.url} target="_blank">Otwórz link.</a>
        </>
    );
}