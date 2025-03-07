/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Card.css'

export default props => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        <div className='Card' style={cardStyle}>
            <div className='Title'>{props.title}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}