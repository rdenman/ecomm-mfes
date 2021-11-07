import { loadStyle } from '@ecomm-mfes/common';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

const mount = (el: Element) => {
  loadStyle('products-stylesheet', 'http://localhost:3001/styles.css');

  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    el
  );
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_products-root');
  if (el) {
    mount(el);
  }
}

export { mount };
