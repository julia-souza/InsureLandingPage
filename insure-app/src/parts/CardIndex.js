import React from 'react'
import { useState, useEffect} from 'react';

import "./css/CardIndex.css"

// const url = "http://localhost:8000/planos";

const CardIndex = () => {
    const [plano, setPlano] = useState([
        // {
        //     "id": 1,
        //     "nome": "Plano 1",
        //     "preco": "R$ 100,00",
        //     "descricao": "Descrição do plano 1"
        // }
    ]);

    useEffect(() => {
        fetch("http://localhost:8000/planos")
            .then(res => {
                return res.json();
            })
            .then(data =>{
                // console.log(data);
                setPlano(data);
            })
    }, []);
    
    return <div id="planosView" className="planCar">
        <div className="planCard-img" />
        <div className="planCard-text">
            <h1>{plano.nome}</h1>
            <p className="value">{plano.valor}</p>
            <p>{plano.descricao}</p>	
        </div>
    </div>;
  
}

export default CardIndex;