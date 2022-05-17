import { Flex, Icon, Link as ChkraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri';

import { Logo } from './logo';

export function Header() {
  const { asPath } = useRouter();

  console.log(asPath);

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
      justifyContent="space-between"
      p="2"
    >
      { asPath === '/' 
        ? ( <Flex /> ) 
        : (
          <Link href={'/'} passHref>
            <ChkraLink ml="5">
              <Icon as={RiArrowLeftSLine} fontSize={30} color="gray.700" />
            </ChkraLink>
          </Link>
         )  
        }
      <Logo />
      <Flex />

    </Flex>
  )
}