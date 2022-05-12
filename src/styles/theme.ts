import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    color: {
      headingAndText: '#47585B'
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: '#DADADA',
        color: 'gray.100'
      }
    }
  }
})