import React, {SyntheticEvent, useState} from "react";

import './AddForm.css'
import {Btn} from "../common/Btn/Btn";
import {geocoding} from "../utils/geocoding";

export const AddForm = () =>{

    const emptyForm = {
        name:'',
        description:'',
        price:0,
        url:'',
        address:'',
    }

    const [loading,setLoading] = useState(false);
    const [form,setForm] = useState(emptyForm);
    const [id,setId] = useState<string|null>(null);

    const updateForm = (key:string,value:any) =>{
        setForm(form=>({
            ...form,
            [key]:value,
        }))
    }

    const saveAd = async (e:SyntheticEvent) =>{
        e.preventDefault();

        setLoading(true);

        try {

            const {lat,lon} = await geocoding(form.address);

            const res = await fetch(`http://localhost:3001/ad`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    lat,
                    lon,
                }),
            });
        }finally {
            setId(form.name);
            setForm(emptyForm);
            setLoading(false);
        }
    }

    if(loading) return <h2>Trwa dodawanie...</h2>

    return (
    <form action="" onSubmit={saveAd} className='add-form'>
        <h1>Dodaj ogłoszenie!</h1>
        {id? <p>Ogłoszenie o nazwie <b>{id}</b> zostało dodane!</p> : null}
            <label>
                Nazwa
                <input
                    type="text"
                    name="name"
                    required
                    maxLength={99}
                    value={form.name}
                    onChange={e=>updateForm('name',e.target.value)}
                />
            </label>
            <label>
                Opis
                <textarea
                    name="description"
                    required
                    maxLength={1000}
                    value={form.description}
                    onChange={e=>updateForm('description',e.target.value)}
                />
            </label>
            <label>
                Cena
                <input
                    type="number"
                    name="price"
                    required
                    maxLength={99}
                    value={form.price}
                    onChange={e=>updateForm('price',e.target.value)}
                />
            </label>
            <label>
                Adres Url
                <input
                    type="url"
                    name="url"
                    required
                    maxLength={99}
                    value={form.url}
                    onChange={e=>updateForm('url',e.target.value)}
                />
            </label>
            <label>
                Adres fizyczny na mapie
                <input
                    type="text"
                    name="adress"
                    required
                    value={form.address}
                    onChange={e=>updateForm('address',e.target.value)}
                />
            </label>
        <Btn text='zapisz'/>
    </form>
    )
}