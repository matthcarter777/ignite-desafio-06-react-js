import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Item } from "./item";

export function TravelTypes() {
  return (
    <Flex w="100%" p="20">
      <SimpleGrid columns={5} w="100%" >
        <Item text="vida noturna" url="/images/cocktail.png"  />
        <Item text="praia" url="/images/surf.png"  />
        <Item text="moderno" url="/images/building.png"  />
        <Item text="clássico" url="/images/museum.png"  />
        <Item text="e mais..." url="/images/earth.png"  />
      </SimpleGrid>
    </Flex>
  )
}