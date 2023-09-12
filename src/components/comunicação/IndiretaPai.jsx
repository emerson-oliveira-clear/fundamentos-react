import React, {useState} from "react";
import IndiretaFilho from './IndiretaFilho'

export default props => {




    const [nome,setNome] = useState ('?');
    const [idade,setIdade] = useState(0);
    const [nerd,setNerd] = useState(false);


    // nome idade nerd
    function fornecerInfo(nome, idade, nerd) {

        setNome(nome)
        setIdade(idade)
        setNerd(nerd)


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