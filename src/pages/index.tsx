import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Information } from '../components/Information'
import { Slider } from '../components/Slider'
import { TravelTypes } from '../components/TravelTypes'


const Home: NextPage = () => {
  const countrys = {
    data: [
      { name: "América do Norte", image: "/images/nortamerica.png", description: "O Continente do captalismo."},
      { name: "América do Sul", image: "/images/southamerica.png", description: "O continente mais jovem."},
      { name: "Ásia", image: "/images/asia.png", description: "O continente do desenvolvimento"},
      { name: "África", image: "/images/africa.png", description: "O continent das tradições"},
      { name: "Europa", image: "/images/europe.png", description: "O continente mais antigo."},
      { name: "Oceania", image: "/images/oceania.png", description: "O continente mais bonito."},
    ],
  }

  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />
      <Banner />
      <TravelTypes />
      <Information />
      <Slider data={countrys.data} />
    </Flex>
  )
}

export default Home
