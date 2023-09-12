import React from "react";
import IndiretaFilho from './IndiretaFilho'

export default props => {

    let nome = '?';
    let idade = 0;
    let nerd = false;


    // nome idade nerd
    function fornecerInfo(nome,idade,nerd){

        console.log(nome,idade,nerd)


    }

    
    return (
        < div >
            <div>
                
                <span> nome: {nome} ,</span>
                <span> idade: {idade}, </span>
                <span>É nerd? {nerd ? 'verdadeiro' : 'falso'} </span>            
            
            </div>

            <IndiretaFilho quandoClicar={fornecerInfo}></IndiretaFilho>

        </div >

    )

}