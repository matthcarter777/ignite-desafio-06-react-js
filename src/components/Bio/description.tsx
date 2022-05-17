import { Flex, Text } from "@chakra-ui/react";

export function Description() {
  return (
    <Flex
      p={["0", "20"]}
    >
      <Text
        color="gray.600"
        lineHeight="1.5rem"
        fontSize="1.1rem"
        textAlign="justify"
      >
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
    </Flex>
  )
}