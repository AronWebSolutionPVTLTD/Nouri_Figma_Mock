import React from 'react'
import {Box,Button,Flex,Text} from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
export const Bodybar = () => {
  return (
   <>
   <Box border="2px solid white" w={"90%"} bg="#1e0e0ef2" m="auto" p={10} >
<Flex gap={4} flexDir={["column","row"]} justifyContent={"space-between"}>
<Text textAlign={"center"} fontWeight={'bold'} fontSize={"23px"}>Find my pictures</Text>
<Button  px={'8'} colorScheme={"blue"}><Flex gap={2} alignItems={"center"}>Go <ArrowForwardIcon/></Flex></Button>
</Flex>
   </Box>
   </>
  )
}
