/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import If from './If';

export default props => {

    const user = props.user || {}

    return (
        <div>
            <If test={user && user.name}>
                Seja bem-vindo <strong>{user.name}</strong>
            </If>
        </div>
    )
}