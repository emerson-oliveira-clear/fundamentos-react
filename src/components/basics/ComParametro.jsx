import React from "react"

export default function ComParametro(props) {

    const status = props.nota >= 7 ? 'aprovado' : 'reprovado'

    return (
        <div>
            <h2>{props.titulo} </h2>

            <p><strong>{props.aluno} </strong> tem nota: </p>

            <p>{props.nota} </p>

            <p><strong>{status}</strong></p>


        </div>
    )
}