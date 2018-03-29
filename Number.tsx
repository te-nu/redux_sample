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
    store: Store<any>
}

export default class Number extends React.Component<props> {
    state = {
        displayNumber: 0
    }

    componentDidMount() {
        this.props.store.subscribe(() => {
            this.setState({displayNumber: this.props.store.getState()['displayNumber']});
        })
    }

    render() {
        return <div>
            <button onClick={this.clickAdd}>インクリメント</button>
            <h1>{ this.state.displayNumber }</h1>
        </div>
    }

    clickAdd = () => {
        this.props.store.dispatch(addCount(2))
    }
}