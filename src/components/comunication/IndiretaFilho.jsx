/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {

    const callBack = props.quandoClicar

    const min = 50
    const max = 80
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => callBack('Godofredo', gerarIdade, gerarNerd)}>Fornecer Informações</button>
        </div>
    )
}