import React from 'react';
import {Switch, Route} from 'react-router-dom';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

// pages
import Homepage from './pages/homepage';
import Subscribe from './pages/subscribe';
import Construction from './pages/construction';
import './default.scss';



function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
              <HomepageLayout>
              <Homepage />
              </HomepageLayout>
          )} />
          <Route path="/subscription" render={() => (
              <MainLayout>
              <Subscribe />
              </MainLayout>
          )} />
          <Route path="/construction" render={() => (
              <MainLayout>
              <Construction />
              </MainLayout>
          )} />
        </Switch>
      </div>
      );
}

export default App;
