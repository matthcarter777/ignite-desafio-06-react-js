import { Flex } from "@chakra-ui/react";
import { BannerCountry } from "../../components/BannerCountry";
import { Bio } from "../../components/Bio";
import { Header } from "../../components/Header";

export default function Country() {
  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />
      <BannerCountry />
      <Bio />

    </Flex>
  )
}