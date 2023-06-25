import { Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Upload = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={16}>
      <VStack color={"purple.500"} h={"full"} justifyContent={"center"}>
        <AiOutlineCloudUpload size={"10vmax"} />

        <form>
          <HStack>
            <Input
              type="file"
              required
              css={{
                "&::file-selector-button": {
                  width: "calc(100% + 30px)",
                  height: "100%",
                  border: "none",
                  backgroundColor: "white",
                  color: "purple",
                  cursor: "pointer",
                  marginLeft: "-15px",
                },
              }}
            />
            <Button colorScheme="purple">Upload</Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
