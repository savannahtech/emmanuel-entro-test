"use client";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Divider,
  Image,
} from "@chakra-ui/react";
import { TaskProps, TasksMetaProps } from "@/types/Task.type";
import { formatDateTime } from "@/utils/formatDate";
import { useState } from "react";
import RelatedCard from "../TaskList/RelatedCard";
import StatusInfo from "./StatusInfo";
import TabSelector from "./TabSelector";

const TaskDetail = ({
  task,
  fetchRelatedTask,
}: {
  task: TaskProps;
  fetchRelatedTask: (
    page: number,
    userId: number | null
  ) => Promise<TasksMetaProps>;
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    {
      name: "Related Tasks",
      id: 0,
    },
    {
      name: "Watchers",
      id: 1,
    },
  ];

  return (
    <Flex
      p={["20px", "100px"]}
      pr={["0", "170px"]}
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        p={6}
        pb={16}
        alignItems="start"
        spacing={6}
        borderRadius="md"
        bg="laminar.gray.50"
        w="full"
        minH="screen"
      >
        <HStack spacing={6} w="full">
          <Flex
            borderRadius="10px"
            border="tag.sapphire.blue.400"
            backgroundColor="tag.sapphire.blue.1000"
            display="flex"
            width="64px"
            height="64px"
            justifyContent="center"
            alignItems="center"
            gap="24px"
          >
            <Image src="/images/plus-circle.svg" alt="Check" />
          </Flex>
          <VStack pt="3px" alignItems="start" spacing={1} flexShrink={0}>
            <Text
              color="laminar.gray.1000"
              fontSize="14px"
              fontWeight="semibold"
              lineHeight="18px"
            >
              {task.title}
            </Text>
            <Text
              color="laminar.gray.600"
              fontSize="xs"
              fontWeight="normal"
              lineHeight="18px"
            >
              {formatDateTime(task.creationDate)}
            </Text>
          </VStack>
        </HStack>
        <Divider borderColor="laminar.gray.500" opacity={0.4} w="full" />

        <HStack direction={["column", "row"]} spacing={12}>
          <StatusInfo title="Status" value={task.status} />
          <StatusInfo
            title="Date Created"
            value={formatDateTime(task.creationDate)}
          />
          <StatusInfo
            title="Assignee"
            value={task.taskAssignee && task.taskAssignee.name}
          />
        </HStack>

        <VStack spacing={4} alignItems={"start"}>
          <Text
            color="laminar.gray.500"
            fontSize="xs"
            fontWeight="medium"
            lineHeight="18px"
          >
            Description
          </Text>
          <Box p={4} borderRadius="lg" bg="#EEF2F8" minH="150px">
            <Text
              color="laminar.gray.700"
              fontSize="13px"
              fontWeight="medium"
              lineHeight="20px"
              w="70%"
            >
              {task.description}
            </Text>
          </Box>
        </VStack>

        <HStack spacing={10}>
          {tabs.map((tab) => (
            <TabSelector
              key={tab.id}
              tab={tab}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </HStack>
        {tabs[selectedTab].id === 0 ? (
          <RelatedCard
            fetchRelatedTask={fetchRelatedTask}
            userId={task.taskAssigneeId || null}
          />
        ) : (
          <Box>No Watcher</Box>
        )}
      </VStack>
    </Flex>
  );
};

export default TaskDetail;
