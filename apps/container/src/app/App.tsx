import { CssBaseline } from '@mui/material';
import { createBrowserHistory } from 'history';
import { FC, lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';

const AuthAppLazy = lazy(() => import('./components/AuthApp'));
const ProductsAppLazy = lazy(() => import('./components/ProductsApp'));

const history = createBrowserHistory();

const App: FC = () => {
  return (
    <Router history={history}>
      <CssBaseline />
      <Header />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/auth" component={AuthAppLazy} />
          <Route path="/" component={ProductsAppLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
