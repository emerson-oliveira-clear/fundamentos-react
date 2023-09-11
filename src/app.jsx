import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basics/Aleatorio";
import Fragmento from './components/basics/Fragmento'
import ComParametro from './components/basics/ComParametro'
import Primeiro from './components/basics/Primeiro'

export default () => (

    <div id="app">
        <h1>Fundamento React 2(arrow)</h1>

        <Card titulo="Exemplo de card"></Card>


        <Aleatorio min={1} max ={60}/>

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

)