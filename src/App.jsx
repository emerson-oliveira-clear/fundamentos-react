import "./App.css"

import React from "react";

import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basics/Aleatorio";
import Fragmento from './components/basics/Fragmento'
import ComParametro from './components/basics/ComParametro'
import Primeiro from './components/basics/Primeiro'

export default () => (

    <div className="App">
        <h1>Fundamento React 2(arrow)</h1>

        <div className="Cards">

            <Card titulo="#04 - Componente com filhos" color="#1D6941">

                <Familia sobrenome='Casão'>

                    <FamiliaMembro nome='Pedro'/>

                {/*}
                    <FamiliaMembro nome='Ana'/>

                    <FamiliaMembro nome='Gustavo'/> 
                */}

                </Familia>


            </Card>


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

            <Card titulo=" #01 - Primeiro Componente" color="#1F691D ">
                <Primeiro />
            </Card>


        </div>




    </div>

)