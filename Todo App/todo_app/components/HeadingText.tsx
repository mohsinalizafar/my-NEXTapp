import React from 'react'
import type { AppProps } from 'next/app'
import { Wrap,WrapItem, Avatar,Flex, Center, Container, Heading, Spacer, HStack, Box, Text } from '@chakra-ui/react'

import Typewriter from 'typewriter-effect';


export default function headingText() {


    return (
        <>


            <Flex justifyContent={'center'}  >

                
                <Box marginTop={'20'}>

                    <Heading color={'purple.100'} fontSize='70' fontWeight='bold' textDecoration='tan'>

                        Todo App </Heading>

                </Box>

            </Flex>

            <Flex justifyContent='center'> 

            <Text fontSize='30' position={'absolute'}  color={'purple.200'} >Organize Your</Text>
            <Box  fontSize='30' mt='10' color='white' fontFamily={'fantasy'} fontStyle='italic'>
        
             
           
            
            <Typewriter
                    
                    options={{
                        
                        strings: ['Time', 'Work', 'Life', 'Goals'],
                       autoStart:true,
                        loop: true,
                        delay: 75,
  
                    }}
                />
                </Box>
            </Flex>






        </>


    )
}
