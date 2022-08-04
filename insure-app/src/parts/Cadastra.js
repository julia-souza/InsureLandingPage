import React from "react";
import "./css/Cadastra.css";

import { useState } from "react";


const Cadastra = () => {
  let model = {nome: '', email: ''}
  let [form, setForm] = useState(model)

  const evento = (e) =>{
    let nome = e.target.name;
    let valor = e.target.value;

    // let email = e.target.email;
    // let valorEmail =  e.target.value;
    
    // setForm({...form, [nome]: valor, [email]: valorEmail});

    setForm({...form, [nome]: valor});

  } 
    const submit = (e) =>{
        e.preventDefault();
        
        let envio = {
            nome: form.nome,
            email: form.email
        };

        console.log(envio);
        

        fetch("http://localhost:8000/cadastro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(setForm(envio))
    }).then(() => {
        alert("Cadastrado com sucesso!");
    })
    }


  return (
    <form id="cadastro" className="cadastro">
      <h1>newsletter</h1>
      <label>
        Nome:
        <input id="nome" name="nome" className="inpt" type="text" onChange={evento} />
      </label>
      <label>
        E-mail:
        <input id="email" name="email" className="inpt" type="text" onChange={evento} />
      </label>

        {/* <p>{form.nome}</p> */}

      <button className="envia" type="button" value="Enviar" onClick={submit}>
        Salvar
      </button>
    </form>
  );
};

export default Cadastra;
