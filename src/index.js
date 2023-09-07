import './index.css'

import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro></ComParametro>
    </div>,
     document.getElementById('root')
)