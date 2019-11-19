import React, {Component} from 'react';
import '../../bulma.sass';
import './css/formularioMensagem.css';
import './css/formularioMensagem-container.css';
import './css/formularioMensagem-input.css';
import './css/formularioMensagem-enviar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

class FormularioMensagem extends Component {

    constructor(props) {

        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <form className="formularioMensagem" >
                <div className="formularioMensagem__container">
                    <div className="control">
                        <button className="button is-text">
                            <span role="img" aria-label="smile emoji">😀</span>
                        </button>
                    </div>
                    <div className="control">
                        <input
                            className="input formularioMensagem__input"
                            type="text"
                            name="texto"
                            placeholder="Inserir mensagem"/>
                    </div>
                </div>
                <div className="control">
                    <button className="button formularioMensagem__enviar">
                        <FontAwesomeIcon icon={faPaperPlane} color="white"/>
                    </button>
                </div>
            </form>
        );
    }
}

export default FormularioMensagem;