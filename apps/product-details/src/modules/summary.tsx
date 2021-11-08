import { loadStyle } from '@ecomm-mfes/common';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import DetailItem from '../app/components/DetailItem';

const mount = (el: Element) => {
  loadStyle('product-details-stylesheet', 'http://localhost:3002/styles.css');

  ReactDOM.render(
    <StrictMode>
      <DetailItem />
    </StrictMode>,
    el
  );
};

export { mount };
