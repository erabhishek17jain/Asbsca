import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
