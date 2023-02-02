
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Container, Flex ,Box, Stack} from '@chakra-ui/react'
import HeadingText from '@/components/HeadingText'
import AddTodo from '@/components/AddTodo'
import {AnimatePresence, motion} from 'framer-motion'




export default function Home() {
  return (
    <>
      <Head>
        <title>Todo app</title>
        <meta name="description" content="ToDo app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
   <Box bgGradient="linear(to-t, purple.800, purple.500)">

  
   <HeadingText/>
<AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}>
     
<AddTodo/>
      </motion.div>
</AnimatePresence>
   </Box>

   
    
    </>
  )
}
