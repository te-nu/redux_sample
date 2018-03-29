import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'
import counter from './reducers'
import IncrementNumber from './IncrementNumber'
// import { addCount } from './actions';

let store: Store<any> = createStore(counter)

render(
  <div>
    <Provider store={store}>
      <IncrementNumber />
    </Provider>
  </div>,
  document.getElementById('app')
)