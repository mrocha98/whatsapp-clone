import React, {Component} from 'react';
import {Box} from 'reactbulma';
import Mensagem from "../Mensagem/Mensagem";
import FormularioMensagem from "../FormularioMensagem/FormularioMensagem";
import './css/conversa.css';
import './css/conversa-mensagens.css';

const msgs = [
    {
        id: 0,
        tipo: 'enviada',
        texto: 'eai',
    },
    {
        id: 1,
        tipo: 'recebida',
        texto: 'eai',
    },
    {
        id: 2,
        tipo: 'enviada',
        texto: 'aaaaaaaaaaaa',
    },
    {
        id: 3,
        tipo: 'recebida',
        texto: '.',
    },
    {
        id: 4,
        tipo: 'recebida',
        texto: 'grande dia',
    },
    {
        id: 5,
        tipo: 'recebida',
        texto: '.',
    },
    {
        id: 6,
        tipo: 'recebida',
        texto: '.',
    },
    {
        id: 7,
        tipo: 'enviada',
        texto: '.',
    },
    {
        id: 8,
        tipo: 'recebida',
        texto: "👍",
    },
    {
        id: 9,
        tipo: 'recebida',
        texto: "AAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA",
    },
];

class Conversa extends Component {

    render() {

        return (
            <main>
                <Box className="conversa">
                    <div className="conversa__mensagens">
                        {msgs.map(msg => {
                            return <Mensagem key={msg.id} tipo={msg.tipo} texto={msg.texto}/>
                        })}
                    </div>
                    <FormularioMensagem className="formularioMensagem"/>
                </Box>
            </main>
        );
    }
}

export default Conversa;