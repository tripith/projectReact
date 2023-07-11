import { Container, Heading, VStack,Input, Button ,Text} from '@chakra-ui/react'
import {Link} from "react-router-dom"
import React from 'react'

const Login = () => {
  return (
  <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
  <form>
  <VStack
  alignItems={"stretch"}
  spacing={'8'}
  w={['full','96']}
  m={'auto'}
  my={'16'}
  >
   
    <Heading>Welcome Back</Heading>
    <Input 
     placeholder={"Email"} 
     type={"email"} 
     required
     focusBorderColor={'purple.500'}     
      />


<Input 
     
     
     placeholder={"Password"} 
     type={"password"} 
     required
     focusBorderColor={'purple.500'}     
      />

      <Button variant={'Link'} alignSelf={'flex-end'} >
        <Link to={'/forgotpassword'}>Forgot password</Link>
      </Button>
     
     <Button colorScheme={"purple"} type={'submit'}>Log In</Button>

     <Text textAlign={'right'}>
      New User?
     <Button variant={'Link'} colorScheme={"purple"}>
        <Link to={'/signup'}>Sign up</Link>
      </Button>
     </Text>
   
   </VStack>
   </form>
  </Container>
  )
}

export default Login
