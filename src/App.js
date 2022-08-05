import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/ConfigureStore';
import AppRoutes from './routes/appRoutes';
import Navbar from './components/Navbar';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  </Provider>
);

export default App;
