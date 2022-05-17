import { Container, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface ItemProps {
  text: string;
  url: string;
}

export function Item({ text, url}: ItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Container>
      <Flex 
        direction={["row", "column" ]} 
        justifyContent="center" 
        align="center"
      >
        { isWideVersion && <Image src={url} alt="cocktail" w="20"/> }
        { !isWideVersion && <Image src="/images/dot.png" alt="cocktail" mr="3"/>}
        <Text
          color="gray.600"
          mt={["0", "3"]}
          fontSize={["1.2rem"]}
          fontWeight="bold"
        >
          { text }
        </Text>
      </Flex>
    </Container>
  )
}