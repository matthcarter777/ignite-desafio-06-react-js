import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Description } from "./description";
import { Info } from "./info";

export function Bio() {
  return (
    <Flex
      w="100%"
      p={["6", "10"]}
    >
      <SimpleGrid columns={2} minChildWidth={'320px'}>
        <Description />
        <Info />
      </SimpleGrid>
    </Flex>
  )
}