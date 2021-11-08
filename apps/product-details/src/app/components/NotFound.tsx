import { Container, Typography } from '@mui/material';
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h6">Product details not found</Typography>
    </Container>
  );
};

export default NotFound;
