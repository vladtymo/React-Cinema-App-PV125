import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { CounterProvider } from './contexts/counter.context';
import { CounterProvider } from './store/reducers/counter.reducer';
import { UserProvider } from './contexts/user.context';
import { createStore } from 'redux';
import rootReducer from './store/root.reducer';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const store = createStore(rootReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CounterProvider> */}
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
      {/* </CounterProvider> */}
    </Provider>
  </React.StrictMode>
);
