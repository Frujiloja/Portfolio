import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { useState, useEffect  } from "react";
import ScrollReveal from 'scrollreveal';

export default function Profile(){

    useEffect(() => {
        const sr = ScrollReveal({
          distance: '60px',
          duration: 2500,
          reset: true
      });
    
        sr.reveal('.profile', { delay: 200, origin: 'right' });
      }, []);
    
    return(
        <Flex className="profile" bg={''} h={"100vh"} w={'100%'} align={'center'} justify={'center'}>
            <Image _hover={{ transform: "scale(1.1)", transition: "transform 0.3s ease-in-out" }} rounded={'5px'} h={'90vh'} src="CV2.png"></Image>
        </Flex>
    )
}