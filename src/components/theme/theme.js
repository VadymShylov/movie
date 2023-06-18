const { extendTheme } = require('@chakra-ui/react');

const colors = {
  brand: {
    100: '#9cf2c5',
    200: '#417d71',
    300: '#97b4a6',
    400: '#4a5569',
    500: '#dd0939',
  },
};

export const theme = extendTheme({ colors });
