import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi";

const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure();
  return (
    <>
    <Button 
    zIndex={"overlay"}
    pos={"fixed"} top={"4"} left={4}
    colorScheme={"purple"}
    p={'a'} w={"10"} h={"10"}
    borderRadius={"full"}
    onClick={onOpen}
    >
        <BiMenuAltLeft size={"20"}/>
    </Button>
    <Drawer isOpen = {isOpen} placement='left' onClose={onClose}>
     <DrawerOverlay/>
     <DrawerContent>
       <DrawerCloseButton/>
       <DrawerHeader>Video_Hub</DrawerHeader>
       <DrawerBody>


    <VStack alignItems={"flex-start"} >
        <Button  variant={"ghost"} colorScheme={"purple"}>
            <Link to={"/"}>Home</Link>    
        </Button>

        <Button  variant={"ghost"} colorScheme={"purple"}>
            <Link to={"/videos"}>Videos</Link>    
        </Button>

        <Button  variant={"ghost"} colorScheme={"purple"}>
            <Link to={"/videos?category=free"}>Free Videos</Link>     
        </Button>

        <Button  variant={"ghost"} colorScheme={"purple"}>
            <Link to={"/upload"}>Upload</Link>
        </Button>

    </VStack>

    <HStack 
    
    pos={"absolute"}
    bottom={"10"}
    left={'0'}
    
    width={"full"}
    justifyContent={"space-evenly "}
    >
        <Button colorScheme={"purple"}>
           <Link to="/login">Log_In</Link>
        </Button>

        <Button colorScheme={"purple"} variant={"outline"}>
           <Link to="/signup">Sign_Up</Link>
        </Button>
    </HStack>

       </DrawerBody>
     </DrawerContent>

    </Drawer>
    </>
  )
}

export default Header;
