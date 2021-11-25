import React from 'react';
import Video1 from '../../aseets/img/video-1.png';
import Video2 from '../../aseets/img/video5.png';
import Video3 from '../../aseets/img/video3.png';
import Video4 from '../../aseets/img/video2.png';
import './video.css';

const Videos = () => {
    return (
        <section className="container">
            <h2 className="titulo alinhamento--meio">
                Veja aqui nossos
                <span className="titulo--destaque">
                    Videos
                </span></h2>

            <ul>
                <li className="cartao-de-video container">
                    <div className="cartao-de-video__video"><img src={Video1} alt="Capa do video"/></div>
                    <h3 className="cartao-de-video__titulo">Feito com amor</h3>
                    <p>Publicado em março de 2021</p>
                </li>
                <li className="cartao-de-video container">
                    <div className="cartao-de-video__video"><img src={Video2} alt="Capa do video"/></div>
                    <h3 className="cartao-de-video__titulo">Casamentos com amor</h3>
                    <p>Publicado em março de 2021</p>
                </li>
                <li className="cartao-de-video container">
                    <div className="cartao-de-video__video"><img src={Video3} alt="Capa do video"/></div>
                    <h3 className="cartao-de-video__titulo">Feito com dedicação</h3>
                    <p>Publicado em maio de 2021</p>
                </li>
                <li className="cartao-de-video container">
                    <div className="cartao-de-video__video"><img src={Video4} alt="Capa do video"/></div>
                    <h3 className="cartao-de-video__titulo">Ao ar livre</h3>
                    <p>Publicado em março de 2019</p>
                </li>
            </ul>
        </section>
    )
}
export default Videos;