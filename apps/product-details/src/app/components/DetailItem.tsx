import { Avatar, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as faker from 'faker';
import { FC } from 'react';

const DetailItem: FC = () => {
  return (
    <Box display="flex" alignItems="center">
      <Avatar
        variant="square"
        src={faker.image.imageUrl(75, 50, 'tech')}
        sx={{ width: 75, height: 50, mr: 2 }}
      />
      <Stack>
        <Typography sx={{ fontWeight: 600 }}>
          {faker.commerce.productName()}
        </Typography>
        <Typography>${faker.commerce.price(5, 1000)}</Typography>
      </Stack>
    </Box>
  );
};

export default DetailItem;
