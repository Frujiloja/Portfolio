import {
  Box,
  Flex,
  useColorModeValue,
  Heading,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";
import About from "../components/About";
import Projects from "../components/Projects";
import Profile from "../components/Profile";
import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import TopRight from "../components/TopRight";
import { FaBriefcase, FaPortrait, FaUserAstronaut } from "react-icons/fa";



export default function Home() {
  const [adminView, setAdminView] = useState("About");

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "10px",
      duration: 2500,
      reset: true,
    });

    sr.reveal(".NavBar", { delay: 300, origin: "left" });
  }, []);

  const handleAbout = () => {
    setAdminView("About");
  };
  const handleProjects = () => {
    setAdminView("Projects");
  };
  const handleCV = () => {
    setAdminView("Profile");
  };


  function NavBar() {
    return (
      <Box
        h={"50vh"}
        w={"10%"}
        bg="rgba(0, 0, 0, 0.6)"
        color={"white"}
        roundedRight={"10px"}
        overflow={"hidden"}
        className="NavBar"
        boxShadow="4px 4px 4px rgba(0, 0, 0, 0.3)"
      >
        <Flex direction="column" align={"center"} h={"100%"}>
          <Box
            bg={""}
            borderBottom={"1px solid #29bfd6"}
            w={"100%"}
            h={"25%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src="logo.png" boxSize={"10vh"}></Image>
          </Box>
          <Box
            bg={adminView === "About" ? "#29bfd6" : ""}
            borderBottom={"1px solid #29bfd6"}
            w={"100%"}
            h={"25%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {" "}
            <FaUserAstronaut size={'2.5vh'}></FaUserAstronaut>
            <Heading
            ml={'1vh'}
            fontSize={"2.5vh"}
              cursor={"pointer"}
              color={adminView === "About" ? "black" : "white"}
              _hover={
                adminView === "About"
                  ? "black"
                  : { color: "#29bfd6", transition: "color 0.3s ease-in-out" }
              }
              onClick={handleAbout}
            >
              About Me
            </Heading>
          </Box>
          <Box
            bg={adminView === "Projects" ? "#29bfd6" : ""}
            borderBottom={"1px solid #29bfd6"}
            w={"100%"}
            h={"25%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {" "}
            <FaBriefcase size={'2.5vh'}></FaBriefcase>
            <Heading
            ml={'1vh'}
              fontSize={"2.5vh"}
              cursor={"pointer"}
              color={adminView === "Projects" ? "black" : "white"}
              _hover={
                adminView === "Projects"
                  ? "black"
                  : { color: "#29bfd6", transition: "color 0.3s ease-in-out" }
              }
              onClick={handleProjects}
            >
              Projects
            </Heading>
          </Box>
          <Box
            bg={adminView === "Profile" ? "#29bfd6" : ""}
            w={"100%"}
            h={"25%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {" "}
            <FaPortrait size={'2.5vh'}></FaPortrait>
            <Heading
            ml={'1vh'}
            fontSize={"2.5vh"}
              cursor={"pointer"}
              color={adminView === "Profile" ? "black" : "white"}
              _hover={
                adminView === "Profile"
                  ? "black"
                  : { color: "#29bfd6", transition: "color 0.3s ease-in-out" }
              }
              onClick={handleCV}
            >
              Profile
            </Heading>
          </Box>
        </Flex>
      </Box>
    );
  }

  return (
    <Box h={"100vh"} backgroundImage={'bg.jpg'} backgroundSize={'cover'} w={"100%"}>
      <Box w={"100%"}>
        <Flex align={"center"} bg={""}>
          <NavBar />
          <Flex
            h={"100vh"}
            align={"center"}
            justify={"center"}
            justifyContent={"space-between"}
            direction={"column"}
            bg={""}
            w={"90%"}
          >
            {adminView === "About" ? (
              <About></About>
            ) : adminView === "Projects" ? (
              <Projects></Projects>
            ) : (
              <Profile></Profile>
            )}
          </Flex>
          <Box
            position="absolute"
            top="0"
            right="0"
          >
            <TopRight></TopRight>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
