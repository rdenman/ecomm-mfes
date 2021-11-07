import { mount, unmount } from 'auth/AuthApp';
import { FC, useEffect, useRef } from 'react';

export const AUTH_BASE_PATHNAME = '/auth';

const AuthApp: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return console.error('No Element ref exists for AuthApp.');
    }
    mount(ref.current, { basePathname: AUTH_BASE_PATHNAME });

    return () => {
      unmount();
    };
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
