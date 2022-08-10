/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho name="Rogerio" age={30} isNerd={true} />
            <DiretaFilho name="Pedro" age={24} isNerd={false} />
        </div>
    )
}