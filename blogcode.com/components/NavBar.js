import { ReactNode } from 'react';
import Image from 'next/image'
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import next from 'next';

;

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image alt="some good alt text" src="/images/logo.png" width={60} height={100}></Image>
          <Box >
            <Button margin={2}>Home</Button>
            <Button margin={2}>Python</Button>
            <Button margin={2}>Javascript</Button>
            <Button margin={2}>C++</Button>
            <Button margin={2}>About us</Button>
            <Button margin={2}>Contact us</Button>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

           
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}