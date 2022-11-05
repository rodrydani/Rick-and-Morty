import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ResidentInfo = ({residents}) => {

    const [characters, setCharacter] = useState({})


    useEffect(() => {
        axios.get(residents)
            .then(res => setCharacter(res.data))
    }, [])

    console.log(characters);

    return (
        <>
        <div className='divCharacters'>
            <li >
                <img className='image' src={characters.image} alt="" />
                <div className='infoCharacters'>
                    <h3>{characters.name}</h3>
                    <p>Status: {characters.status}{" "}-{" "}{characters.type} </p>
                    <p>Origin: <br /> {characters.origin?.name} </p>
                    <p>episodes where appear: <br />{characters.episode?.length}</p>
                </div>
            </li>
           
        </div>
       
        </>
    );
};

export default ResidentInfo;