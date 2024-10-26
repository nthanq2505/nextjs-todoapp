'use client'

import {
  Input,
  HStack,
  Button,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { FiPlusSquare } from "react-icons/fi";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskRequest } from "../../redux/actions/task.actions";

const AddTask = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.task)

  const handleAddTask = () => {
    dispatch(addTaskRequest({ taskName: task, isDone: false }))
    setTask('')
  }

  return (
    <HStack justify="space-between" w="100%" pl="16px" pr="24px">
      <InputGroup flex="1" >
        <InputLeftElement>
          <FiPlusSquare color="#D1D5DB" size="24px"/>
        </InputLeftElement>
        <Input pl="40px" variant="unstyle" placeholder="Add a new task..." value={task} onChange={(e) => setTask(e.target.value)} />
      </InputGroup>
      <HStack gap="16px">
        <Button colorScheme="teal" size="sm" onClick={handleAddTask} isLoading={loading}>
          {loading ? 'Adding...' : 'Add new'}
        </Button>
        <Button colorScheme="red" size="sm" onClick={() => setTask('')}>
          Cancel
        </Button>
      </HStack>
      {error && <Text color="red">{error}</Text>}
    </HStack>
  );
};

export default AddTask;
