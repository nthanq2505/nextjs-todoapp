import React from "react";
import { VStack, Text } from "@chakra-ui/react";

const LeftBackground = () => {
  return (
      <VStack
        height="100vh"
        alignItems="flex-start"
        justifyContent="center"
        width="50%"
        flexGrow={2}
        pl="10%"
        color="white"
        gap="20px"
        bgGradient="linear(to-b, #7bcbd4, #29c6b7)"
      >
        <Text fontSize="5xl" as="b">Todo App</Text>
        <Text fontSize='lg'>Manage your work every day</Text>
      </VStack>
  );
};

export default LeftBackground;
