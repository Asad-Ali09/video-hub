import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={8}
          m={"auto"}
          my={"16"}
          w={["full", 96]}
        >
          <Heading textAlign={"center"}>VIDEO HUB</Heading>
          <Avatar boxSize={"32"} alignSelf={"center"} />
          <Input
            placeholder="Name"
            type={"text"}
            focusBorderColor={"purple.500"}
            required
          />
          <Input
            placeholder="Email"
            type={"email"}
            focusBorderColor={"purple.500"}
            required
          />
          <Input
            placeholder="Password"
            type={"password"}
            focusBorderColor={"purple.500"}
            required
          />

          <Button type="submit" colorScheme={"purple"}>
            Log In
          </Button>

          <Text alignSelf={"flex-end"}>
            Already Signed Up?{"   "}
            <Button variant={"link"} colorScheme={"purple"}>
              <Link to={"/login"}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
