const Questao01Y = (props) =>{
    const alunos = props.alunos // aqui eu recebo o objeto alunos que ja havia recebido como parametro props
    let medias = []

const calcularMedia = () => { // aqui eu calculo a média de cada aluno e armazeno em um vetor a parte
    alunos.map((aluno) => {
        let media = (aluno.notas.ap1 + aluno.notas.ap2)/2
        medias.push(media)
    })
    // console.log(medias)
}

calcularMedia()

// const renderizarAlunos = () => { // aqui fiz uma tentativa de renderizar os alunos com média menor ou igual a 5, mas creio que so iria conseguir com o useState, nao consegui aplicar
//     medias.map((media, index) => {
//         if(media <= 5){
//             return (alunos[index].nome)
//         }
//     })

// }


return ( // fiz uma renderizacao manual mesmo exbindo os nomes e as medias
<div>
    <h1>
        <h4>Nome: {alunos[0].nome} Média: {medias[0]}</h4>
        <h4>Nome: {alunos[1].nome} Média: {medias[1]}</h4>
        <h4>Nome: {alunos[2].nome} Média: {medias[2]}</h4>
    </h1>
</div>
)

}



export default Questao01Y