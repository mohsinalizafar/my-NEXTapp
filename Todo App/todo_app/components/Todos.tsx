import React  from 'react'

import { Spacer, Flex, Container, StackDivider, Text, Stack, Box, Heading, Card, CardHeader, CardBody, CardFooter, Button, Input, Checkbox } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { RiDeleteBinFill } from "react-icons/ri"
import { MdEdit, MdTaskAlt } from "react-icons/md"
import { useState,useEffect } from 'react'

interface Props {
  todos:string[];
}




const Todos: React.FC<Props> = (props) => {
  


 
      
  const [tasks, setTasks] = useState<string[]>([]);

  function handleEdit(index:number){
    
    
    }
 
    const toast = useToast()
  function handleDelete(index:number){


    toast({
      title: "Task Deleted",
    
      status: "error",
      duration: 1000,
      isClosable: true,
    });
    tasks.splice(index, 1);
   setTasks(tasks);
  }



  useEffect(() => {

        let temArr=props.todos;
       temArr=tasks.concat(temArr);
   
      setTasks(temArr);
      temArr=[''];
      


    }, [props.todos]);
  
  
  return (
    <>

      <Container width={'80vh'} mt='20' alignContent={'center'}pb='20'>
<Box  minHeight={'40vh'} marginTop={'20'}>

  
        <Card background={'purple.500'} color='white'  >
          <CardHeader>
            <Heading fontFamily={'fantasy'} textAlign={'center'} size='md'>Task Lists</Heading>
            
          </CardHeader>




         {  (tasks.length<=0)? <Text ml='5'fontFamily={'mono'} color="green.300">
          Congtrats..!!
          All tasks are done :) </Text>:
       
     
        
       tasks.map((tasks, index) => (
     
  
        <CardBody key={index}>
   
                              <Stack divider={<StackDivider />} spacing='4'>
                      <Flex>
                        <Heading size='xs' textTransform='uppercase'>
                        <Text>
                          <Checkbox colorScheme={'green'} mr='2' />
                         {tasks}</Text>
                        </Heading>
                        <Spacer />
                        <Button 
                       
                        onClick={()=>handleDelete(index)} rightIcon={<RiDeleteBinFill />} colorScheme='red' size={'sm'} p='4' >
                          Delete
                        </Button>
                        <Button 
                          onClick={()=>handleEdit(index)}
                        rightIcon={<MdEdit />} colorScheme='blue' size={'sm'} p='4' ml={'2'} >
                          Edit
                        </Button>
                       
                      </Flex>
         

                      <Box>
                      </Box>
                    </Stack>
                  </CardBody>
             
          
              
                        
        
                        ))}
        
                

                 

          
        </Card>
     
        </Box>
      </Container>

    </>
  )
}

export default Todos;