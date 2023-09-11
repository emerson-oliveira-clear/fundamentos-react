import "./App.css"

import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basics/Aleatorio";
import Fragmento from './components/basics/Fragmento'
import ComParametro from './components/basics/ComParametro'
import Primeiro from './components/basics/Primeiro'

export default () => (

    <div className="App">
        <h1>Fundamento React 2(arrow)</h1>

        <div className="Cards">

            <Card titulo="#04 - Desafio aleatório" color="#69411D">

                <Aleatorio min={1} max={60} />

            </Card>

            <Card titulo="#03 - Fragmento" color="#69671D" >
                <Fragmento />
            </Card>

            <Card titulo="#02 - ComParametro" color="#45691D">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo=" #01 - Primeiro Componente" color="#1F691D">
                <Primeiro />
            </Card>


        </div>




    </div>

)