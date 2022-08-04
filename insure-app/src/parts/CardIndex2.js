import React from 'react'
import { useState, useEffect} from 'react';

import "./css/CardIndex.css"

const url = "http://localhost:8000/planos";

const CardIndex = (url) => {
    const [plano, setPlano] = useState([]);

    useEffect(() => {
        fetch('/db.jsonb.json',{
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