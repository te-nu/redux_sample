import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'
import counter from './reducers'
import IncrementNumber from './IncrementNumber'
import { ThemeProvider } from 'styled-components';
import ThemeInterface from './theme';

let store: Store<any> = createStore(counter)

const theme: ThemeInterface = {
  fatalColor: '#BB0000',
  warnColor: '#CCCC00'
};

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <IncrementNumber />
    </Provider>
  </ThemeProvider>,
  document.getElementById('app')
)