import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Header: FC = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'grey.400' }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          component={RouterLink}
          to="/"
          sx={{ textDecoration: 'none' }}
        >
          Cool eComm
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
