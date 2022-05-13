import { Container, Flex, Image, Text } from "@chakra-ui/react";

interface ItemProps {
  text: string;
  url: string;
}

export function Item({ text, url}: ItemProps) {
  return (
    <Container>
      <Flex direction="column" justifyContent="center" align="center">
        <Image src={url} alt="cocktail" w="20"/>
        <Text
          color="gray.600"
          mt="3"
          fontSize="1.2rem"
          fontWeight="bold"
        >
          { text }
        </Text>
      </Flex>
    </Container>
  )
}