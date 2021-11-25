import React, {useState} from 'react';
import './produto.css';
import Modal from 'react-modal';



const Descricao = ({product}) => {
const [modalIsOpen, setIsOpen] = useState(false);

const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };


Modal.setAppElement('#root');
function openModal() {
    setIsOpen(true);
 }



function closeModal() {
    setIsOpen(false);
  }


    return (
        <>
         <button onClick={openModal} className="botao botao--alternativo botao--descricao">
                Descrição
         </button>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Descrição" 
        >
        <h2 className="titulo alinhamento--meio">Descrição</h2>
        <h2 className="modal--titulo  titulo--destaque">{product.name}</h2>
            <p className="paragrafo-inner" dangerouslySetInnerHTML={{__html: product.description}} />
            <button className="botao" onClick={closeModal}>Fechar</button>
        </Modal>     
        </>
        
    )
}

export default Descricao;
