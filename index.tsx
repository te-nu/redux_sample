import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'
import counter from './reducers'
import Number from './Number'
import { addCount } from './actions';

let store: Store<any> = createStore(counter)
store.dispatch(addCount(2))

render(
  <div>
    <Provider store={store}>
      <Number store={store}/>
    </Provider>
    <h1>{store.getState()["displayNumber"]}</h1>
  </div>,
  document.getElementById('app')
)