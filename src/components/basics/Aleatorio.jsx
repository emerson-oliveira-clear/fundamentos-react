import React from "react";

export default (props) => {


    const {min,max} = props;


    const numAleatorio = parseInt(Math.random() * (max - min)) + min;
    
    return (
        <div>

            <h2>numero Aleatorio</h2>

            <p><strong>Valor minimo: {min}</strong></p>

            <p><strong>Valor maximo: {max}</strong></p>

            <p>
            <strong>Valor escolhido: {numAleatorio}</strong>
            </p>

        </div >
    );
};
