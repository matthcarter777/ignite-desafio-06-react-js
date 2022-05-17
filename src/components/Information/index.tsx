import { Divider, Flex, Heading, Center, Box } from "@chakra-ui/react";

export function Information() {
  return (
    <Flex
      w="100%"
      p="10"
      justifyContent="center"
    >
      <Flex
        direction="column"
        align="center"
      >
        <Box
          mb="10"
          w="25%"
          borderColor="gray.700"
          h="2"
        >
          <Divider orientation='horizontal' />
        </Box>
        <Heading fontSize={["2xl", "4xl"]} color="gray.600" align="center">
          Vamos Nessa? <br/>
          Então Escolha seu Continente
        </Heading>
      </Flex>

    </Flex>
  )
}