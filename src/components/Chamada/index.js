import React from 'react';
import "./chamada.css";
import MesaPosta from '../../aseets/img/mesa-posta.png';

const Chamada = () => {
    return (
        <section className="chamada container">
        <h2 className="titulo">
            União e partilha com
            <span className="titulo--destaque">mesa posta</span>
        </h2>
        <p className="chamada__texto texto">É ao redor da Mesa, que conseguimos cruzar
            os olhares, relembrar momentos, criar novas
            memórias, rir e se emocionar.
            O Amor à Mesa quer levar todo encanto dessa
            época para você e sua família ter uma mesa incrivel.</p>
        <img src={MesaPosta} alt="Foto Produto" className="chamada__imagem"/>
        <form action="#" className="chamada__formulario">
            <input type="text" className="input input--icone input--email" placeholder="Insira seu e-mail" aria-label="Insira seu e-mail"/>
            <button className="botao">Assinar Novidades</button>
        </form>
    </section>
    )
}

export default Chamada;
