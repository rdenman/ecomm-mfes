import { Container, Stack } from '@mui/material';
import { FC } from 'react';
import ProductDetailItem from './components/ProductDetailItem';

const products = [
  '10000',
  '10001',
  '10002',
  '10003',
  '10004',
  '10005',
  '10006',
  '10007',
  '10008',
  '10009',
];

const App: FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        {products.map((id) => (
          <ProductDetailItem key={id} />
        ))}
      </Stack>
    </Container>
  );
};

export default App;
