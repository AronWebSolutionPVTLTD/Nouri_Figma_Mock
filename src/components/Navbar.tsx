import React from 'react'
import {Box,Flex,Button,Switch,Radio,Show,Hide,Image} from "@chakra-ui/react";
import DrawerExample from './Drawer';
export const Navbar = () => {
  return (
    <>
    <Show above='600px'>
     <Box p={5} m={"auto"} w={["70%"]} >
 <Flex justifyContent={"space-between"}> 
  <Box>  <Image w={10} src={"/Subtract.png"} /></Box>
  <Flex alignItems={"center"} gap={10}>
    <Box>
    <Switch size="lg" />
    </Box>
    <Flex gap={3}>
      <Box>
        <Button colorScheme={"blue"}>I'm a photographer</Button>
      </Box>
      <Box>
      <Button colorScheme={"blue"}>I'm a partner</Button>
      </Box>
    </Flex>
  </Flex>
   </Flex>
  </Box>
  </Show>
  <Show breakpoint='(max-width: 600px)' > <Flex justifyContent={"flex-end"}><DrawerExample/></Flex> </Show>

    </>
  )
}
