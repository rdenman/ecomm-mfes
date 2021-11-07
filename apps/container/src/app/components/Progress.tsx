import { Box, LinearProgress } from '@mui/material';
import { FC } from 'react';

const Progress: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        '& > * + *': {
          mt: 2,
        },
      }}
    >
      <LinearProgress />
    </Box>
  );
};

export default Progress;
