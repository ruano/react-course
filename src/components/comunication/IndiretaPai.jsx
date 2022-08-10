/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [isNerd, setNerd] = useState(false)

    function fornecerInfos(name, age, isNerd) {
        setName(name)
        setAge(age)
        setNerd(isNerd)
    }

    return (
        <div>
            <div>Pai</div>
            <div>
                <span>{name} </span>
                <span><strong>{age} </strong></span>
                <span>{isNerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInfos} />
        </div>
    )
}