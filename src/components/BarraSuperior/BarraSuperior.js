import React, {Component} from 'react';
import './css/barraSuperior.css';
import './css/barraSuperior-foto.css';
import './css/barraSuperior-info.css';
import './css/barraSuperior-nome.css';
import './css/barraSuperior-status.css';

const dados = {
    nome: 'Açaí Delivery',
    status: 'online',
    foto: 'https://cdn.pixabay.com/photo/2017/09/03/01/20/acai-2709077_960_720.jpg',
};

class BarraSuperior extends Component {
    render() {
        return (
            <header className="barraSuperior">
                <img src={dados.foto} alt="foto do delivery" className="barraSuperior__foto"/>
                <div className="barraSuperior__info">
                    <h1 className="barraSuperior__nome">{dados.nome}</h1>
                    <h2 className="barraSuperior__status">{dados.status}</h2>
                </div>
            </header>
        );
    }
}

export default BarraSuperior;