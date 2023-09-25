import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRoutes from './Router';
import { makeStore } from './store';

import styles from './App.module.scss';

const store = makeStore();

function App() {
  return (
    <div className={styles.app}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
