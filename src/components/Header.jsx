import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={"fixed"}
        top={"4"}
        left={"4"}
        w={"10"}
        h={"10"}
        colorScheme="purple"
        borderRadius={"3xl"}
        onClick={onOpen}
        zIndex={10}
      >
        <BiMenuAltLeft />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Link to={"/"} onClick={onClose}>
                <Button colorScheme="purple" variant={"ghost"}>
                  Home
                </Button>
              </Link>
              <Link to={"/videos"} onClick={onClose}>
                <Button colorScheme="purple" variant={"ghost"}>
                  Videos
                </Button>
              </Link>
              <Link to={"/videos?category=free"} onClick={onClose}>
                <Button colorScheme="purple" variant={"ghost"}>
                  Free Videos
                </Button>
              </Link>
              <Link to={"/upload"} onClick={onClose}>
                <Button colorScheme="purple" variant={"ghost"}>
                  Upload
                </Button>
              </Link>
            </VStack>

            <HStack
              pos={"absolute"}
              bottom={"10"}
              left={"0"}
              w={"100%"}
              justifyContent={"space-evenly"}
            >
              <Link to={"/login"} onClick={onClose}>
                <Button colorScheme={"purple"} variant={"outline"}>
                  Log In
                </Button>
              </Link>
              <Link to={"/signup"} onClick={onClose}>
                <Button colorScheme="purple">Sign Up</Button>
              </Link>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
