export default function method(props) {

    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>Aluno {props.nomeAluno} tem nota {props.nota} e está {status}.</p>
        </div>
    )
}