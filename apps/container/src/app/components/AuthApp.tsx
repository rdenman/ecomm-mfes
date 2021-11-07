import { mount } from 'auth/AuthApp';
import { FC, useEffect, useRef } from 'react';

const AuthApp: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return console.error('No Element ref exists for AuthApp.');
    }
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
