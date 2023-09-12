import "./App.css"

import React from "react";

import ListaAlunos from "./components/repetição/ListaAlunos";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basics/Aleatorio";
import Fragmento from './components/basics/Fragmento'
import ComParametro from './components/basics/ComParametro'
import Primeiro from './components/basics/Primeiro'
import TabelaProdutos from "./components/repetição/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from './components/comunicação/DiretaPai';
import IndiretaPai from "./components/comunicação/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";


export default () => (

    <div className="App">
        <h1>Fundamento React 2</h1>

        <div className="Cards">


            <Card titulo="#12 -Contador" color="#1F691D" >

                <Contador numeroInicial={10} ></Contador>

            </Card>



            <Card titulo="#11 -componente controlado" color="#1D6967" >

                <Input>

                </Input>


            </Card>


            <Card titulo="#10 -Comunicação Indireta" color="#1D6941" >

                <IndiretaPai> </IndiretaPai>


            </Card>



            <Card titulo="#09 -Comunicação Direta" color="#69411D" >

                <DiretaPai></DiretaPai>


            </Card>


            <Card titulo="#08 - Renderizção Condicional" color="#69671D" >

                <ParOuImpar numero={20}>
                </ParOuImpar>

                <UsuarioInfo usuario={{ nome: 'Fernando' }}
                />

                {/*
                <UsuarioInfo usuario={{ email: 'fefe@fefe.com' }}

                />
                */}

            </Card>


            <Card titulo="#08 - Renderizção Condicional" color="#45691D" >

                <ParOuImpar numero={20}>



                </ParOuImpar>

            </Card>


            <Card titulo="#07 - desafio repetição" color="#1F691D" >

                <TabelaProdutos />
            </Card>


            <Card titulo="#06 - repetição" color="#1D6967" >

                <ListaAlunos />
            </Card>



            <Card titulo="#05 - Componente com filhos" color="#1D6941">

                <Familia sobrenome='Casão'>

                    <FamiliaMembro nome='Pedro' />

                    <FamiliaMembro nome='Ana' />

                    <FamiliaMembro nome='Gustavo' />


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