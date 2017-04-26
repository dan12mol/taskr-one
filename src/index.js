import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';

import NotFound from './components/NotFound';
import App from './components/App';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#root'));

