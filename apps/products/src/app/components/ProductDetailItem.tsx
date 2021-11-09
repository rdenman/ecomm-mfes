import { mount } from 'details/ProductDetailItem';
import { FC, useEffect, useRef } from 'react';

const ProductDetailItem: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return console.error('No Element ref exists for ProductDetailItem.');
    }
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default ProductDetailItem;
