/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.isNerd ? 'Verdadeiro' : 'Falso'}!</div>
        </div>
    )
}