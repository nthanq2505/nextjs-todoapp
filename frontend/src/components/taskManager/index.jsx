'use client'

import React, { useEffect } from "react";
import { Divider, VStack, Text } from "@chakra-ui/react";
import AddTask from "../addTask";
// import Filter from "../filter";
import Task from "../task";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskRequest } from "../../redux/actions/task.actions";

const TaskManager = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector(state => state.task);
  console.log(tasks)

  useEffect(() => {
    dispatch(fetchTaskRequest());
  }, [dispatch]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text color="red">{error}</Text>;

  return (
    <VStack spacing={4} w="100%" h="Calc(100% - 40px)">
      <AddTask />
      <Divider borderColor="#E2E8F0" />
      {/* <Filter /> */}
      <VStack w="100%" h="100%" spacing={4} overflowY="auto">
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </VStack>
    </VStack>
  );
};

export default TaskManager;
