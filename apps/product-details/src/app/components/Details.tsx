import { Avatar, Container, Divider, Typography } from '@mui/material';
import * as faker from 'faker';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

const Details: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container maxWidth="md">
      <Typography variant="h6" gutterBottom>
        Product Details
      </Typography>
      <Typography>SKU: {id}</Typography>
      <Typography>Name: {faker.commerce.productName()}</Typography>
      <Typography>Price: ${faker.commerce.price(5, 1000)}</Typography>
      <Avatar
        variant="square"
        src={faker.image.imageUrl(300, 200, 'tech')}
        sx={{ width: 300, height: 200, mr: 2 }}
      />
      <Divider sx={{ my: 3 }} />
      <Typography sx={{ fontWeight: 600 }}>Description:</Typography>
      <Typography variant="body1">
        {faker.commerce.productDescription()}
      </Typography>
    </Container>
  );
};

export default Details;
