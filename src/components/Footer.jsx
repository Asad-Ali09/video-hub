import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"white"} p={"16"} minH={"40"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"} px={4}>
          <Heading
            size={"md"}
            textTransform={"uppercase"}
            textAlign={["center", "left"]}
          >
            Subscribe to get Updates
          </Heading>

          <HStack borderBottom={"2px solid white"} py={2}>
            <Input
              placeholder={"Enter your email"}
              border={"none"}
              borderRadius={"none"}
              outline={"none"}
              focusBorderColor={"none"}
            />
            <Button
              colorScheme="purple"
              p={0}
              borderRadius={"0 20px 20px 0"}
              variant={"ghost"}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
          w={"full"}
        >
          <Heading textTransform={"uppercase"}>Video Hub</Heading>
          <Text>All rights recieved</Text>
        </VStack>
        <VStack w={"full"}>
          <Heading size={"md"} textTransform={"uppercase"}>
            Social Media
          </Heading>
          <Button variant={"link"} colorScheme={"white"}>
            <a href="https://youtube.come" target="_blank">
              Youtube
            </a>
          </Button>
          <Button variant={"link"} colorScheme={"white"}>
            <a href="https://instagram.come" target="_blank">
              Instagram
            </a>
          </Button>
          <Button variant={"link"} colorScheme={"white"}>
            <a href="https://github.come" target="_blank">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
