import { Box, Flex, Text } from "@chakra-ui/react";

export function Info() {
  return (
    <Flex
      p={["5", "20"]}
      justifyContent="center"
      align="center"
      gap="4rem"
    >
      <Flex
        direction="column"
        align="center"
      >
        <Text
          fontSize="1.8rem"
          fontWeight="bold"
          color="#FFBA08"
        >
          50
        </Text>
        <Text
          color="gray.600"
          fontWeight="bold"
        >
          Paises
        </Text>
      </Flex>

      <Flex
        direction="column"
        align="center"
      >
        <Text
          fontSize="1.8rem"
          fontWeight="bold"
          color="#FFBA08"
        >
          60
        </Text>
        <Text
          color="gray.600"
          fontWeight="bold"
        >
          línguas
        </Text>
      </Flex>
      <Flex
        direction="column"
        align="center"
      >
        <Text
          fontSize="1.8rem"
          fontWeight="bold"
          color="#FFBA08"
        >
          27
        </Text>
        <Text
          color="gray.600"
          fontWeight="bold"
        >
          cidades +100
        </Text>
      </Flex>

    </Flex>
  )
}