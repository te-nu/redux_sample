import * as React from 'react'
import { withProps } from './styled-component'
import styled from 'styled-components'

export interface Props {
    displayNumber: number,
    buttonText: string,
}

export interface events {
    onButtonClick: () => void;
}

interface DisplayNumberProps {
    fontSize: number;
}


const DisplayNumber = withProps<DisplayNumberProps>()(styled.div)`
    font-size: ${props => props.fontSize}px;
    color: ${props => props.theme.warnColor};
`

const Number = ({ displayNumber, buttonText, onButtonClick }: Props & events) => (
    <DisplayNumber fontSize={40}>
        <button onClick={onButtonClick}>{buttonText}</button>
        <h1>{displayNumber}</h1>
    </DisplayNumber>
)

export default Number;