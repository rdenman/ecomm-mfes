import { mount } from 'products/ProductsApp';
import { FC, useEffect, useRef } from 'react';

export const PRODUCTS_BASE_PATHNAME = '/';

const ProductsApp: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return console.error('No Element ref exists for ProductApp.');
    }
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default ProductsApp;
