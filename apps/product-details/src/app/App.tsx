import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './components/Details';
import NotFound from './components/NotFound';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id" component={Details} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
