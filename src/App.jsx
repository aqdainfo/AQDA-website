import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRouter from './containers/router';
import configStore from './store/config';

import './assets/styles/style.scss';

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  );
}

export default App;
