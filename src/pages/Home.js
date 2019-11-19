import React from 'react';
import './Home.css';
import Conversa from "../components/Conversa/Conversa";
import BarraSuperior from "../components/BarraSuperior/BarraSuperior";

function Home() {
  return (
    <div className="home">
        <BarraSuperior/>
        <Conversa/>
        <form className="home__rodape">
            {/* caractere invisível do unicode para que o body não bugue o height, ainda não descobri o porquê disso*/}
            <p>⠀</p>
        </form>
    </div>
  );
}

export default Home;
