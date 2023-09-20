import { Box, Flex, Text, Image, Heading, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function About() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2500,
      reset: true,
    });

    sr.reveal(".about", { delay: 200, origin: "bottom" });
  }, []);

  const language = localStorage.getItem("language");

  return (
    <Flex
      className="about"
      bg={""}
      h={"100vh"}
      w={"100%"}
      align={"center"}
      justify={"center"}
      direction={"column"}
    >
      <Image mb={"5vh"} boxSize={"15vh"} src="img.png"></Image>
      {language === "spanish" ? (
        <>
          {" "}
          <Heading color={"white"} mb={"4vh"} fontSize={"4vh"}>
            Bienvenido, mi nombre es Martín{" "}
            <span style={{ color: "#29bfd6" }}>Fuks</span>
          </Heading>
          <Text color={"white"} mb={"8vh"} fontSize={"3vh"}>
            Soy un Programador Fullstack con un enfoque en Front-end y la
            creación de contenido visual.
          </Text>
          <Text
            color={"white"}
            textAlign={"center"}
            maxW={"80vh"}
            fontSize={"2vh"}
          >
            A los 25 años, fusioné el diseño y la programación full-stack. Mi
            pasión por la tecnología comenzó desde joven, lo que me llevó a
            tener una base sólida. He liderado equipos, gestionado proyectos y
            priorizado la colaboración. Mi enfoque se centra en experiencias
            digitales de primer nivel, que combinan la estética y la
            funcionalidad. Tengo habilidades en JavaScript, Node.js, React, CSS,
            GIT, Redux y más. Hablo inglés con fluidez para proyectos globales.
            ¡Conectemos!
          </Text>
        </>
      ) : (
        <>
          {" "}
          <Heading color={"white"} mb={"4vh"} fontSize={"4vh"}>
            Welcome, my name is Martin{" "}
            <span style={{ color: "#29bfd6" }}>Fuks</span>
          </Heading>
          <Text color={"white"} mb={"8vh"} fontSize={"3vh"}>
            I'm a Fullstack Programmer with a focus on Front-end design and
            creating visual content.
          </Text>
          <Text
            color={"white"}
            textAlign={"center"}
            maxW={"80vh"}
            fontSize={"2vh"}
          >
            At 25, I merge design and full-stack coding. Passion for tech
            started young, leading to a strong foundation. I've led teams,
            managed projects, and prioritize collaboration. My focus is
            top-notch digital experiences, combining aesthetics and function.
            Skilled in JavaScript, Node.js, React, CSS, GIT, Redux, and more.
            Fluent in English for global projects. Let's connect!
          </Text>
        </>
      )}
      <Image mt={"5vh"} h={"15vh"} src="aboutimg.png"></Image>
    </Flex>
  );
}
