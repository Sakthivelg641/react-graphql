import React from 'react';
import {useRoutes} from 'hookrouter';
import Routes from './route';
// import logo from './logo.svg';
// import './App.css';

function App() {

  const routeResult = useRoutes(Routes)

  return (
      <main>
        {routeResult}
      </main>
  );
}

export default App;
