'use client'

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


export default function Contact() {

    useEffect(() => {
        const sr = ScrollReveal({
          distance: "60px",
          duration: 2500,
          reset: true,
        });
    
        sr.reveal(".contact", { delay: 200, origin: "bottom" });
      }, []);

  return (
    <Container className='contact' bg="" maxW="full" h={'100vh'}>
      <Flex bg={''} h={'100vh'} align={'center'} justify={'center'} >
        <Box
          bg="#121212"
          border={'1px solid #29bfd6'}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={'none'}
                        cursor={'default'}
                        leftIcon={<MdPhone color="#29bfd6" size="20px" />}>
                        11 5771-9725
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={'none'}
                        cursor={'default'}
                        leftIcon={<MdEmail color="#29bfd6" size="20px" />}>
                        martinfukss@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="25vh"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #29bfd6' }}
                        leftIcon={<MdLocationOn color="#29bfd6" size="20px" />}>
                        Buenos Aires, Argentina
                      </Button>
                    </VStack>
                  </Box>
                  <HStack bg={''} display={'flex'} justifyContent={'center'}>
                  <Link to={"https://www.linkedin.com/in/martin-fuks-251b91141/"} target="blank">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#29bfd6' }}
                      icon={<FaLinkedinIn size="28px" />}
                    />
                    </Link>
                    <Link to={'https://github.com/Frujiloja'} target="blank">
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#29bfd6' }}
                      icon={<BsGithub size="28px" />}
                    />
                    </Link>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="#29bfd6" color="white" _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}