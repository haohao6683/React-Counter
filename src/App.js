import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/store'
import CountersGroup from './components/CountersGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store = {store}>
          <CountersGroup />
        </Provider>
      </header>
    </div>
  );
}


export default App;
