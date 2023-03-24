import {
    Box,
    chakra,
    Container,
    Stack,
    Text,Image,
    Flex,Show,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithSocial() {
    return (
        
          <Box    py={'10'} bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
          <Container
          as={Stack}
          maxW={'8xl'}
          spacing={4}
          > <Flex   w={"full"} alignItems={"center"} gap={3}>
        <Image w={"40px"} h="40px"  src="/Subtract.png" />
        <Flex  w={"full"} flexDir={'column'} justifyContent={"space-between"} color="gray" fontSize={["13px","16px","18px"]} > <Text>Soirees</Text>
        <Flex gap={5} justifyContent={"space-between"}><Text>From Paris with ❤</Text>
        <Flex alignItems="center" gap={10}><Text fontSize={["14px","16px","18px"]}>Partner Login</Text><Show above="md"><Image w={5} h={5} src="https://cdn-icons-png.flaticon.com/512/555/555417.png"/></Show></Flex>
        </Flex>
</Flex></Flex>   </Container>
      <Box
      mt={"20px"}
  w="full"
       >
        <Container
        // mt="10px"
          as={Stack}
          maxW={'8xl'}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'space-between' }}>
           
 <Text fontSize={["16px","18px"]}>@ soire.es All rights reserved.</Text>
 <Text fontSize={["16px","18px"]}>Terms Privacy Policy</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
      </Box>
      

    );
  }