import { CssBaseline } from '@mui/material';
import { createBrowserHistory } from 'history';
import { FC } from 'react';
import { Router } from 'react-router-dom';
import Header from './components/Header';

const history = createBrowserHistory();

const App: FC = () => {
  return (
    <Router history={history}>
      <CssBaseline />
      <Header />
    </Router>
  );
};

export default App;
