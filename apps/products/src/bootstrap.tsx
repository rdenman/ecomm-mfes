import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

const mount = (el: Element) => {
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
