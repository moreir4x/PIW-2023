import React, { useState, useEffect } from "react";

const Questao03 = () => {
    const [maior, setMaior] = useState("");
    const [menor, setMenor] = useState("");

    const promise = new Promise((resolve, reject) => {  // criei uma promessa que me retorna um array de objetos ou da erro
        resolve([
            { capital: ["Dublin"], populacao: 4994724 },
            { capital: ["Nicosia"], populacao: 1207361 },
            { capital: ["Madrid"], populacao: 47351567 },
        ])
        reject("Erro");
    });

    useEffect(() => {  // utilizei o useEffect para executar a promessa e alterar o estado das variáveis
        promise.then((resultado) => {
            let maiorPop = resultado[0];
            let menorPop = resultado[0];
            for (let i = 0; i < resultado.length; i++) {
                if (resultado[i].populacao > maiorPop.populacao) {
                    maiorPop = resultado[i];
                }
                if (resultado[i].populacao < menorPop.populacao) {
                    menorPop = resultado[i];
                }
            }
            setMaior(maiorPop.capital); // atribui o valor da capital de maior população para a variável maior e o valor da capital de menor população para a variável menor
            setMenor(menorPop.capital);
        });
    }
    );

    return (
        <div>
            <h1>Capital de maior população: {maior}</h1>
            <h1>Capital de menor população: {menor}</h1>
        </div>
    );
};

export default Questao03;
