import React from "react";
import LeftBackground from "../components/leftBackground";
import { Image, VStack, Button, HStack } from "@chakra-ui/react";
import errorRip from "../../public/errorRip.png";
import NextLink from "next/link";

const NotFoundPage = () => {
  return (
    <HStack width="100%" height="100vh">
      <LeftBackground />
      <VStack
        backgroundColor="white"
        width="35%"
        height="100vh"
        align="center"
        justify="center"
        flexGrow={1}
        spacing={10}
      >
        <Image src={errorRip.src} alt="Error Rip" boxSize="320px" />
        <NextLink href="/" passHref>
          <Button colorScheme="teal" size="md">
            Back
          </Button>
        </NextLink>
      </VStack>
    </HStack>
  );
};

export default NotFoundPage;
