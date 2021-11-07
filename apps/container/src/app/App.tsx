import { CssBaseline } from '@mui/material';
import { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AUTH_BASE_PATHNAME } from './components/AuthApp';
import Header from './components/Header';
import { PRODUCTS_BASE_PATHNAME } from './components/ProductsApp';
import Progress from './components/Progress';

const AuthAppLazy = lazy(() => import('./components/AuthApp'));
const ProductsAppLazy = lazy(() => import('./components/ProductsApp'));

const App: FC = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path={AUTH_BASE_PATHNAME} component={AuthAppLazy} />
          <Route path={PRODUCTS_BASE_PATHNAME} component={ProductsAppLazy} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
