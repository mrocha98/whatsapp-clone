import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './css/mensagem.css';
import './css/mensagem-hora.css';
import './css/separador.css';
import { Box } from 'reactbulma';
import {faCheck} from "@fortawesome/free-solid-svg-icons";

class Mensagem extends Component {

    constructor(props) {

        super(props);
        this.state = {
            tipo : '',
        };
    }

    componentDidMount() {

        this.setState({tipo: this.props.tipo});
    }

    aplicaClass(tipo) {
        let className = 'mensagem ';
        if(tipo === 'recebida')
             className += 'mensagem--recebida';
        else if(tipo === 'enviada')
            className += 'mensagem--enviada';
        else
            throw new Error('tipo inválido');
        return className;
    }

    render() {

        const {texto, tipo} = this.props;
        return (
            <div className="separador">
                <Box className={this.aplicaClass(tipo)}>
                    <p>{texto}</p>
                    <p className="mensagem__hora">
                        {new Date().toString().substring(16, 21)}
                        <span>   </span>
                        <FontAwesomeIcon icon={faCheck} color="#4aa4ed"/>
                    </p>
                </Box>
            </div>
        );
    }
}

export default Mensagem;