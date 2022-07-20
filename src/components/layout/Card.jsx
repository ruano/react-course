/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Card.css'

export default props => {
    return (
        <div className='Card'>
            <div className='Title'>{props.title}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}