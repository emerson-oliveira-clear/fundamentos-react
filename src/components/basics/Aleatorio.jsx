import React from "react";

export default props => {

    const min = props.min;
    const max = props.max;

    const numAleatorio = Math.floor(Math.random() * (max - min)) + min;
    
    return (
        <div>

            <h2>
                numero Aleatorio

            </h2>

            <p>
                <strong>Valor maximo{max}</strong>
            </p>

            <p>
            <strong>Valor minimo{min}</strong>
            </p>

            <p>
            <strong>Valor escolhido{numAleatorio}</strong>
            </p>

        </div >
    );
};
