"use client";

import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Button,
  Flex,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState(null);

  const language = localStorage.getItem("language");

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Wonder Toys",
      text: "Wonder Toys is an e-commerce store specializing in toys, offering a wide range of options for children of all ages.",
      text2:
        "Wonder Toys es un ecommerce especializado en juguetes, ofreciendo una amplia gama de opciones para niños de todas las edades.",
      image: "wonder.jpg",
      link: "https://wondertoys.up.railway.app/",
    },
    {
      title: "Pokemon",
      text: "PokeAPI is a website for a Pokémon API that provides detailed information about Pokémon, including data about various species, moves, abilities, and more.",
      text2:
        "PokeAPI es un sitio web de una API que proporciona información detallada sobre Pokémon, incluyendo datos sobre diferentes especies, movimientos, habilidades y más.",
      image: "pokemon3.jpg",
      link: "",
    },
    {
      title: "Strings & Keys",
      text: "Strings & Keys is an e-commerce store specializing in musical instruments, offering a wide range of options for musicians of all skill levels.",
      text2:
        "Strings & Keys es unecommerce especializado en instrumentos musicales, que ofrece una amplia variedad de opciones para músicos de todos los niveles de habilidad.",
      image: "strings.jpg",
      link: "https://stringsandkeys.up.railway.app/",
    },
    {
      title: "Rick & Morty",
      text: "The Rick and Morty API page is an online portal that provides access to data and information related to the popular TV series Rick and Morty.",
      text2:
        "La página de la API de Rick and Morty es un portal en línea que proporciona acceso a datos e información relacionada con la popular serie de televisión Rick and Morty.",
      image: "rick.jpg",
      link: "",
    },
    {
      title: "SneakersCo",
      text: "SneakersCo is an e-commerce platform dedicated to sneakers, providing a wide selection of footwear for all ages.",
      text2:
        "SneakersCo es un ecommerce especializado en zapatillas, que ofrece una amplia selección de calzado para todas las edades.",
      image: "snickers.jpg",
      link: "",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"60vh"}
      width={"full"}
      overflow={"hidden"}
      rounded={"5px"}
      boxShadow="4px 4px 5px rgba(0, 0, 0, 0.3)"
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        color={"white"}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        color={"white"}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${card.image})`}
          >
            <Container
              size="container.lg"
              height="70vh"
              w={"60vh"}
              position="relative"
              bg={""}
            >
              <Stack
                spacing={"3vh"}
                w={"70vh"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
                bg={""}
              >
                <Flex
                  justifyContent={"space-between"}
                  align={"center"}
                  justify={"center"}
                  w={"55vh"}
                >
                  <Heading color="white" fontSize={"4vh"}>
                    {card.title}
                  </Heading>
                  {/* <Link to={card.link}  target="_blank" >
                        <Text
                          color={"#29bfd6"}
                          fontWeight={"bold"}
                          fontSize={"2vh"}
                        >
                          Visit
                        </Text>
                    </Link> */}
                </Flex>
                {language === "spanish" ? (
                  <Text fontSize={"1.5vh"} color="white" w={"50vh"}>
                    {card.text2}
                  </Text>
                ) : (
                  <Text fontSize={"1.5vh"} color="white" w={"50vh"}>
                    {card.text}
                  </Text>
                )}
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
