import React from "react";


import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'


export default (_) => {

    <div id="app">
        <h1>Fundamento React 2(arrow)</h1>

        <Fragmento
        />

        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro silva"
            nota={9.3}
        />

        <Primeiro
        />

    </div>

}