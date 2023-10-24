import { Box, Flex, Text, Heading, Image, useColorModeValue,
  useColorMode, } from "@chakra-ui/react";
import React, { useState, useEffect  } from "react";
import ScrollReveal from 'scrollreveal';
import CaptionCarousel from "./Carrousel";
import { Link } from "react-router-dom";

export default function Projects() {

  const language = localStorage.getItem('language');

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
    <Flex className="projects" bg={''} h={"100vh"} w={'100%'} align={'center'} justify={'center'} direction={'column'}>
      {language === "spanish" ? (<Heading color={'white'} fontSize={'4vh'} mb={'3vh'}>Proyectos</Heading>) : (<Heading color={'white'} fontSize={'4vh'} mb={'3vh'}>GALLERY OF PROJECTS</Heading>)}
        <CaptionCarousel></CaptionCarousel>
        {/* <Flex bg={''} h={'20vh'} w={'50%'} justify={'center'} align={'center'} justifyContent={'space-around'}>
          <Link to={'https://wondertoys.up.railway.app/'} target="'blank" ><Image _hover={{ transform: "scale(1.1)", transition: "transform 0.3s ease-in-out" }} h={'15vh'} src="/wonderlogo.png"></Image></Link>
          <Link to={'https://stringsandkeys.up.railway.app/'} target="'blank" ><Image _hover={{ transform: "scale(1.1)", transition: "transform 0.3s ease-in-out" }} h={'15vh'} src="/Logo White.png"></Image></Link>
        </Flex> */}
    </Flex>
)
}
