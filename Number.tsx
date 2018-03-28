import * as React from 'react'
import { addCount } from './actions';
import { Store } from 'redux';

// const Number = (number: number) => (
//     <div>
//         <h1>{ number }</h1>
//     </div>
// )

// export default Number

interface props {
    store: Store<any>;
}

export default class Number extends React.Component<props> {
    render() {
        return <div>
            <button onClick={this.clickclick}></button>
            <h1>{ this.props.store.getState()['displayNumber'] }</h1>
        </div>
    }

    clickclick() {
        this.props.store.dispatch(addCount(2))
    }
}