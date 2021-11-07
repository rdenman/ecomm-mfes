import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { AUTH_BASE_PATHNAME } from './AuthApp';
import { PRODUCTS_BASE_PATHNAME } from './ProductsApp';

const Header: FC = () => {
  const history = useHistory();
  const [disabled, setDisabled] = useState(
    history.location.pathname.startsWith(AUTH_BASE_PATHNAME)
  );

  history.listen(() => {
    setDisabled(history.location.pathname.startsWith(AUTH_BASE_PATHNAME));
  });

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'grey.400' }}
    >
      <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          component={RouterLink}
          to={PRODUCTS_BASE_PATHNAME}
          sx={{ textDecoration: 'none' }}
        >
          Cool eComm
        </Typography>
        <Button
          color="primary"
          variant="outlined"
          component={RouterLink}
          to={AUTH_BASE_PATHNAME}
          disabled={disabled}
          sx={{ my: 1, mx: 1.5 }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
