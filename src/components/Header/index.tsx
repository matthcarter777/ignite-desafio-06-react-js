import { Flex } from '@chakra-ui/react';
import { Logo } from './logo';

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h={20}
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justifyContent="center"
      p="2"
    >
      <Logo />
    </Flex>
  )
}