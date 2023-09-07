import './index.css'

import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'

ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>

        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro silva"
            nota={9.3} />

        <ComParametro
            titulo="Situação do Aluno" 
            aluno="maria fernandes" 
            nota={6.9} />

    </div>,
    document.getElementById('root')
)