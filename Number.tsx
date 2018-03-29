import * as React from 'react'

export interface props {
    displayNumber: number,
    buttonText: string,
}

export interface events {
    onButtonClick: () => void;
}

const Number = ({displayNumber, buttonText, onButtonClick}: props & events) => (
    <div>
        <button onClick={ onButtonClick }>{ buttonText }</button>
        <h1>{ displayNumber }</h1>
    </div>
)

export default Number;