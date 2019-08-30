import React from 'react'

export default function ShowError(props) {
    return (
        <div style={{color : 'red'}}>
            <h4> {props.error}</h4>
        </div>
    )
}