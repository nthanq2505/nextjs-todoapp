import { HStack, Checkbox, Button, Text } from "@chakra-ui/react";
import React from "react";

const Task = (props) => {
  const { task } = props;
  return (
    <HStack w="100%" justify="space-between" bgColor={"#F9FAFB"} p="24px">
      <Checkbox gap="16px">
        {task.isDone ? (
          <Text fontSize="16px" as="del" color="#9CA3AF">
            {task.taskName}
          </Text>
        ) : (
          <Text fontSize="16px">{task.taskName}</Text>
        )}
      </Checkbox>
      <HStack gap="16px">
        {task.isDone ? (
          <>
            <Button colorScheme="teal" variant="outline" size="sm" disabled>
              Edit
            </Button>
            <Button colorScheme="red" variant="outline" size="sm" disabled>
              Delete
            </Button>
          </>
        ) : (
          <>
            <Button colorScheme="teal" variant="outline" size="sm">
              Edit
            </Button>
            <Button colorScheme="red" variant="outline" size="sm">
              Delete
            </Button>
          </>
        )}
      </HStack>
    </HStack>
  );
};

export default Task;
