import { Box, Flex, Text, Heading,   useColorModeValue,
  useColorMode, } from "@chakra-ui/react";
import React, { useState, useEffect  } from "react";
import ScrollReveal from 'scrollreveal';
import CaptionCarousel from "./Carrousel";

export default function Projects() {

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2500,
      reset: true
  });

    sr.reveal('.projects', { delay: 200, origin: 'top' });
  }, []);

return(
    <Flex className="projects" bg={''} h={"100vh"} w={'100%'} align={'center'} justify={'center'} direction={'column'} p={'10vh'}>
        <Heading color={'white'} mb={'5vh'}>GALLERY OF PROJECTS</Heading>
        <CaptionCarousel></CaptionCarousel>
    </Flex>
)
}
