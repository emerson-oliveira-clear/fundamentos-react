import ReactDOM from 'react-dom'
import React from 'react'

const tag =  <strong>olá react</strong> 


ReactDOM.render(
    <div>
        <strong>Olá react </strong>
        
        {tag}
    </div>,
     document.getElementById('root')
)