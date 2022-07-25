import App from './App';

import ReactDOM from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
