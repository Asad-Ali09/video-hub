import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={"container.xl"} minH={["100vh"]} p={16}>
        <Heading
          textTransform={"uppercase"}
          borderBottom={"2px solid "}
          width={"fit-content"}
          m={"auto"}
          py={2}
        >
          Services
        </Heading>

        <Stack
          h={"full"}
          p={4}
          alignItems={"center"}
          direction={["column", "column", "column", "row"]}
        >
          <Image
            src={img5}
            w={["100%", "400px"]}
            filter={"hue-rotate(230deg)"}
          />
          <Text
            p={[4, 16]}
            letterSpacing={"widest"}
            lineHeight={"190%"}
            textAlign={"center"}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
            molestiae perferendis voluptatum incidunt eligendi nihil nemo?
            Voluptatum dolorem harum voluptates id esse provident at similique
            dolore consequatur inventore ea iure, aliquid eligendi possimus modi
            toure vero explicabo consectetur ea obcaecati voluptas, sint et,
            quia magnam maiores. Maiores, debitis distinctio accusamus nisi,
            alias minus doloremque eaque blanditiis iusto neque possimus,
            dolorem recusandae perspiciatis quo soluta quis ullam dignissimos
            praesentium magni suscipit natus. Ex excepturi modi animi ad, est
            incidunt, commodi optio architecto sunt sequi quaerat numquam nihil
            consequuntur fuga illo tempora, assumenda officiis odit error cumque
            soluta ab vitae!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  // const headingOptions = {
  //   pos: "absoulte",
  //   left: "50%",
  //   top: "50%",
  //   transform: "translate(-50%,-50%)",
  // };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      interval={2000}
      stopOnHover={false}
    >
      <Box w={"full"} h={"100vh"}>
        <Image src={img1} />
        <Heading
          bgColor={"blackAlpha.600"}
          color={"white"}
          pos={"absolute"}
          left={"50%"}
          top={"50%"}
          transform={"translate(-50%,-50%)"}
          p={"4"}
          size={"4xl"}
        >
          Watch the Future
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Image src={img2} />
        <Heading
          bgColor={"whiteAlpha.900"}
          color={"black"}
          pos={"absolute"}
          left={"50%"}
          top={"50%"}
          transform={"translate(-50%,-50%)"}
          p={"4"}
          size={"4xl"}
        >
          Future is Gaming
        </Heading>
      </Box>

      <Box w={"full"} h={"100vh"}>
        <Image src={img3} />
        <Heading
          bgColor={"whiteAlpha.600"}
          color={"black"}
          pos={"absolute"}
          left={"50%"}
          top={"50%"}
          transform={"translate(-50%,-50%)"}
          p={"4"}
          size={"4xl"}
        >
          Gaming on Console
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Image src={img4} />
        <Heading
          bgColor={"whiteAlpha.600"}
          color={"black"}
          pos={"absolute"}
          left={"50%"}
          top={"50%"}
          transform={"translate(-50%,-50%)"}
          p={"4"}
          size={"4xl"}
        >
          Night Life is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};
export default Home;
