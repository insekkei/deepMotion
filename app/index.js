import React from 'react';
import { render } from 'react-dom';
import { applyRouterMiddleware, Router, Route, IndexRoute, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import App from './App';
import Home from './Home';
import Career from './Career';
import Press from './Press';

render(
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="career" component={Career} />
        <Route path="press" component={Press} />
      </Route>
    </Router>,
    document.getElementById('root')
);
