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
      { id: 1 , name: "América do Norte", image: "/images/europe.png", description: "O Continente do captalismo."},
      { id: 2 , name: "América do Sul", image: "/images/europe.png", description: "O continente mais jovem."},
      { id: 3 , name: "Ásia", image: "/images/europe.png", description: "O continente do desenvolvimento"},
      { id: 4 , name: "África", image: "/images/europe.png", description: "O continent das tradições"},
      { id: 5 , name: "Europa", image: "/images/europe.png", description: "O continente mais antigo."},
      { id: 6 , name: "Oceania", image: "/images/europe.png", description: "O continente mais bonito."},
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
