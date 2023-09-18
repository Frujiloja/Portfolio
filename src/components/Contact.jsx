"use client";

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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
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
    <Container className="contact" bg="" maxW="full" h={"100vh"}>
      <Flex bg={""} h={"100vh"} align={"center"} justify={"center"}>
        <Box
          h={"70vh"}
          maxH={'600px'}
          bg="#121212"
          border={"1px solid #29bfd6"}
          color="white"
          borderRadius="lg"
          m={'5vh'}
          p={'5vh'}
          display={'flex'}
          alignItems={'center'}
        >
          <Box p={'2vh'}>
            <Wrap spacing={'5vh'}>
              <WrapItem>
                <Box>
                  <Heading fontSize={'4vh'}>Contact</Heading>
                  <Text mt={'2vh'} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={'4vh'}>
                    <VStack spacing={'2vh'} alignItems="center">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        fontSize={'2.5vh'}
                        _hover={"none"}
                        cursor={"default"}
                        leftIcon={<MdPhone color="#29bfd6" size="2vh" />}
                      >
                        11 5771-9725
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={"none"}
                        fontSize={'2.5vh'}
                        cursor={"default"}
                        leftIcon={<MdEmail color="#29bfd6" size="2vh" />}
                      >
                        martinfukss@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="35vh"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={"none"}
                        cursor={"default"}
                        fontSize={'2.5vh'}
                        leftIcon={<MdLocationOn color="#29bfd6" size="2vh" />}
                      >
                        Buenos Aires, Argentina
                      </Button>
                    </VStack>
                  </Box>
                  <HStack bg={""} display={"flex"} justifyContent={"center"}>
                    <Link
                      to={"https://www.linkedin.com/in/martin-fuks-251b91141/"}
                      target="blank"
                    >
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#29bfd6" }}
                        icon={<FaLinkedinIn size="4vh" />}
                      />
                    </Link>
                    <Link to={"https://github.com/Frujiloja"} target="blank">
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#29bfd6" }}
                        icon={<BsGithub size="4vh" />}
                      />
                    </Link>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg" h={'58vh'} maxH={'400px'}>
                  <Box m={'3vh'} color="#0B0E3F">
                    <VStack spacing={'1vh'}>
                      <FormControl id="name">
                        <FormLabel fontSize={'2vh'}>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel fontSize={'2vh'}>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel fontSize={'2vh'}>Message</FormLabel>
                        <Textarea
                        bg={''}
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                        h={'5vh'}
                          variant="solid"
                          bg="#29bfd6"
                          color="white"
                          _hover={{}}
                          fontSize={'2vh'}
                        >
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
  );
}
