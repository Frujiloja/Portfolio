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

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Wonder Toys",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "wonder.jpg",
      link: "https://wondertoys.up.railway.app/",
    },
    {
      title: "Pokemon",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "pokemon3.jpg",
      link: "",
    },
    {
      title: "Strings & Keys",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "strings.jpg",
      link: "https://stringsandkeys.up.railway.app/",
    },
    {
      title: "Rick & Morty",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "rick.jpg",
      link: "",
    },
    {
      title: "SneakersCo",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
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
                  <Text fontSize={"1.5vh"} color="white" w={"50vh"}>
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
        ))}
      </Slider>
    </Box>
  );
}
