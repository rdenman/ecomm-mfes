import { loadStyle } from '@ecomm-mfes/common';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

const mount = (el: Element) => {
  loadStyle('product-details-stylesheet', 'http://localhost:3002/styles.css');

  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    el
  );
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_product-details-root');
  if (el) {
    mount(el);
  }
}

export { mount };
