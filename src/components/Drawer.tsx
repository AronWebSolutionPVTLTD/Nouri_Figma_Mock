import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    Image,
    DrawerOverlay,Switch,
    DrawerContent,Flex,
    DrawerCloseButton,Button,useDisclosure,Input
  } from '@chakra-ui/react';
import React from 'react';
export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)
  
    return (
      <>
        <Button ref={btnRef} colorScheme='transparent' onClick={onOpen}>
     <HamburgerIcon color={"white"} bg={"transparent"}/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          size="xs"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
  
            <DrawerBody>
            <Button w={"full"} mb={3}>I'm a photographer</Button>
            <Button  w={"full"}>I'm a partner</Button>
            </DrawerBody>
  
            <DrawerFooter w="full">
                <Flex w="full" justifyContent={"space-between"}>
            <Switch size="lg" />
            <Image w={5} h={5} src="https://cdn-icons-png.flaticon.com/512/555/555417.png"/></Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }