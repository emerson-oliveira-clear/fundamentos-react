import React from "react";
import DiretaFilho from './DiretaFilho'

export default props =>{

    return(
        <div>
           <DiretaFilho nome='Beto' idade={20} nerd={true}></DiretaFilho>

           <DiretaFilho nome='Guto' idade={25} nerd={false}></DiretaFilho>

        </div>

    )

}