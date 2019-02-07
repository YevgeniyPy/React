import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocalizeProvider } from "react-localize-redux";
import { store } from './store/index';
import './index.css';
import Main from './screens/main';
import Architects from './screens/architects';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/architects" component={Architects} />
        </Switch>
      </BrowserRouter>
    </LocalizeProvider>
  </Provider>,
  document.getElementById('root'),
);


serviceWorker.unregister();
