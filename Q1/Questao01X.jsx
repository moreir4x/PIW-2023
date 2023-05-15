import Questao01Y from "./Questao01Y"

const Questao01X = () => {
    const alunos = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "Beltrano", notas: { ap1: 2.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
    ]

    return (
        <div>
            <Questao01Y alunos={alunos} />
        </div>
    )
}

export default Questao01X

