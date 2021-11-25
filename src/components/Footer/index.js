import React from 'react';
import LogoRosinhaFooter from '../../aseets/img/logo-rosinha.svg';
import Facebook from '../../aseets/img/icones/facebook.svg';
import Twitter from '../../aseets/img/icones/twitter.svg';
import Instagram from '../../aseets/img/icones/instagram.svg';
import './rodape.css';



const Footer = () => {

    return (
    <footer className="container rodape">
        <div className="rodape__logo-div">
            <img src={LogoRosinhaFooter} alt="Logo casa verde" className="rodape__logo"/>
            <h2 className="titulo rodape__titulo"> Amor a mesa</h2>
        </div>
        <ul className="rodape__social">
            <li><a href="https://www.facebook.com" className="rodape__social--midia" title="Facebook"><img src={Facebook} alt="Icone Facebook"/></a></li>
            <li><a href="https://www.twitter.com" className="rodape__social--midia" title="Twitter"><img src={Twitter} alt="Icone Twitter"/></a></li>
            <li><a href="https://www.instagram.com" className="rodape__social--midia" title="Instagram"><img src={Instagram} alt="Icone Instagram"/></a></li>
        </ul>
        <address className="rodape__ unidade texto">
            <span className="rodape__unidade--titulo">Contato</span>
            e- mail: #############<br></br>
            Telefone: ############<br></br>
            WhatsApp: ###########
        </address>
        <address className="rodape__ unidade texto">
          <span className="rodape__unidade--titulo">Mogi Guaçu -SP</span>
          Rua Anita Garibaldi, 33, 13<br></br>
          Sé<br></br>
          Telefone: (11) 99875-2201
      </address>
            <p className="rodape__fullon">fullOn 2021 Todos direitos reservados</p>
    </footer>
    )
}

export default Footer;
