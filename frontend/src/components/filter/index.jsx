import React from "react";
import { HStack, Text, Radio, RadioGroup } from "@chakra-ui/react";

const Filter = () => {
  return (
    <RadioGroup defaultValue="1" size="md" colorScheme="teal">
      <HStack spacing={4}>
        <Text fontSize="16px" fontWeight="500" color="#1F2A37">
          Filter:
        </Text>
        <Radio value="all">
          <Text fontSize="14px">All</Text>
        </Radio>
        <Radio value="undone"><Text fontSize="14px">Undone</Text></Radio>
        <Radio value="done"><Text fontSize="14px">Done</Text></Radio>
      </HStack>
    </RadioGroup>
  );
};

export default Filter;
