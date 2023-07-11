import { Box, Button, HStack, Heading,Input,Stack, VStack ,Text} from '@chakra-ui/react' 
import React from 'react'
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
<Box 
bgColor={"blackAlpha.900"}
minH={'40'}
p={'16'}
color={'white'}

>
    <Stack direction={["column","row"]}>
    <VStack alignItems={"stretch"} width={"full"} px={'4'}>
        <Heading size={'md'} textTransform={"uppercase"}
        textAlign={["center","left"]}>
            Subcribe for Update
        </Heading>
    
    <HStack 
    borderBottom={'2px solid white'} 
    py={'2'}>
      <Input
       placeholder={"Enter Your Email Id"}
       border={"none"}
       borderRadius={"none"}
       outline={"none"}
       focusBorderColor='none' 
      />
      <Button
      p={'0'}
      colorScheme={"purple"}
      variant={"ghost"}
      borderRadius={'0 20px 20px 0'}

      >
         <AiOutlineSend/>
      </Button>
    </HStack>

    </VStack>

    <VStack 
    w={"full"}
    borderLeft={['none','1px solid white']}
    borderRight={['none','1px solid white']}
     >
      <Heading textAlign={"center"} textTransform={"uppercase"}>
        Video_Hub
      </Heading>
      <Text>ALl Right Received</Text>

     </VStack>

     <VStack w={"full"}>
      <Heading size={"md"} textTransform={"uppercase"}>Social Media</Heading>
      <Button variant={"link"} colorScheme={"white"}>
        <a target='blank' href='https://www.youtube.com/watch?v=F2TL525KkiM'>Youtbe</a>
      </Button>

      <Button variant={"link"} colorScheme={"white"}>
        <a target='blank'  href='https://www.facebook.com/freecodecamp/'>facebook</a>
      </Button>

      <Button variant={"link"} colorScheme={"white"}>
        <a target='blank' href='https://www.instagram.com/freecodecamp/?hl=en'>Instagram</a>
      </Button>
     </VStack>

    </Stack>

</Box>
  )
}

export default Footer
