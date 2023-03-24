import {Box,Flex,Heading,Text,Center} from "@chakra-ui/react"
import React from 'react'
import { Bodybar } from "../components/Bodybar"
import SmallWithSocial from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const Home = () => {
  return (
   <>
  <Box
  // overflow="scroll"
  backgroundImage="url('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
  backgroundSize={"cover"}
  h={"100vh"}
>
<Navbar/>

<Flex color={"white"} mt={"150px"} gap={3} alignContent={"center"} flexDir={"column"} justifyContent={"center"}>
  <Center><Text fontSize={"6xl"} fontWeight="bold"  fontStyle={"italic"} >Soiree's</Text></Center>
  <Center><Text textAlign={"center"}>We capture your fun and protect your privacy </Text></Center>
</Flex>


<Box mt={"80px"}><Bodybar/></Box>
<Box w="full" pos={"fixed"}
      right={0}
      bottom={0}><SmallWithSocial/></Box>
  </Box>
   </>
  )
}
