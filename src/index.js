import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
       </PersistGate>
     </Provider>
    </Router>
  </React.StrictMode>
);
