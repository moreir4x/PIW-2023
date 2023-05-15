import React, { useState } from "react";

const Questao02 = () => {
    const [flag, setFlag] = useState(true);
    
    const click = () => {  // aqui criei uma função para alterar o estado do flag
        setFlag(!flag);
    };
    
    return (
        <div>
        <img
            src={
            flag
                ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
            } // aqui utilizei o operador ternário para alternar entre as imagens.
        />
        <button onClick={click}>Alternar</button>
        </div>
    );
}

export default Questao02;
