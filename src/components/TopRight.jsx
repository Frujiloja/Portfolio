import {
  Box,
  Flex,
  useColorModeValue,
  useColorMode,
  Button,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import MusicPlayer from "../components/MusicPlayer";


export default function TopRight() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2500,
      reset: true,
    });

    sr.reveal(".top", { delay: 200, origin: "top" });
  }, []);

  return (
    <Flex className="top" p={"1vh"} pr={"3vh"} align={"center"}>
      {/* <Button
        p={0}
        m={0}
        onClick={toggleColorMode}
        bg={"transparent"}
        _hover={"none"}
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Text ml={"1vh"} mr={"2vh"}>
        EN/SP
      </Text> */}
      {/* <MusicPlayer ></MusicPlayer> */}
      <Box w={"2vh"}></Box>
      <Link  to={"https://www.linkedin.com/in/martin-fuks-251b91141/"} target="blank">
        {" "}
        <FaLinkedinIn color="white" size={"3vh"}></FaLinkedinIn>
      </Link>
      <Box w={"2vh"}></Box>
      <Link to={'https://github.com/Frujiloja'} target="blank">
      <FaGithub color="white" size={"3vh"}></FaGithub>
      </Link>
    </Flex>
  );
}
