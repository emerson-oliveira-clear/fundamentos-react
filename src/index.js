import './index.css'

import ReactDOM from 'react-dom'
import React from 'react'

const tag =  <strong>Olá react</strong> 

ReactDOM.render(
    <div>
        <strong>Olá react </strong>
        <br></br>
        <br></br>
        {tag}

    </div>,
     document.getElementById('root')
)