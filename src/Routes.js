import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NasaImage from './NasaImage';
import IntlSpaceStation from './IntlSpaceStation';
import Home from './Home.js';
import NotFound from './NotFound';
import Header from './Header';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact={true}/>
          <Route path='/nasa' component={NasaImage} />
          <Route path='/iss' component={IntlSpaceStation} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;



