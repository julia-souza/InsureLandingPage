import React from 'react'
import { useState, useEffect} from 'react';

import "./css/CardIndex.css"

const url = "http://localhost:3001/planos";

const CardIndex = () => {
    const [plano, setPlano] = useState([]);

    useEffect(() => {
        fetch('../../public/db.json',{
            headers: {
                Accept: 'application/json'
            }
        }).then(res => res.json())
          .then(res =>setPlano(res.plano))
    }, []);
    
    return <div id="planosView" class="planCar">
        <div class="planCard-img" />
        <div class="planCard-text">
            <h1>{plano.nome}</h1>
            <p>{plano.preco}</p>
            <p>{plano.descricao}</p>	
        </div>
    </div>;
  
}

export default CardIndex;