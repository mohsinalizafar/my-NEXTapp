import React, { useState } from 'react'
import { Flex, Center, Container, Heading, Spacer, HStack, Box, Text, Input, Button } from '@chakra-ui/react'
import Todos from './Todos';
import { MdOutlineAddTask } from "react-icons/md"
import { useToast } from '@chakra-ui/react'
export default function AddTodo() {


  
    const [val, setVal] = useState<string>('');
    const [tasks, setTasks] = useState<string[]>([]);
    const handleValue = (e: any) => {

        
        setVal(e.target.value);
       

    }

    setTimeout(() => {
    
        setTasks([])
    }),20000
    const toast = useToast()
    const printVal = (val: string) => {
      
        toast({
            title: "New Task Added",
     
            status: "success",
            duration: 1000,
            isClosable: true,
          });
       
        setTasks([...tasks,val]);
        setVal('')
   
  
      



    }


    return (
        <>

            <Flex>
                <Container mt='20'>

                    <Input value={val} id='input' onChange={handleValue} width='40vh' color='white' _placeholder={{ color: 'purple.200' }} focusBorderColor='purple.400' variant='flushed' placeholder='Enter your tasks...' />

                    <Button
                       


                        onClick={() => val ? printVal(val) : console.log("nothing")
                    
                    }
                        rightIcon={<MdOutlineAddTask />}
                        variant={'solid'} colorScheme='green' ml='10'
                    >Add Task</Button>
                </Container>


            </Flex>
    
            <Todos todos={tasks}/>
        

        </>
    )
}
