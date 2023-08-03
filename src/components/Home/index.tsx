"use client";
import TaskList from "@/components/TaskList";
import { TasksMetaProps } from "@/types/Task.type";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

const Home = ({
  fetchTasks,
}: {
  fetchTasks: (page?: number) => Promise<TasksMetaProps>;
}) => {
  return (
    <Box p={["20px", "104px"]}>
      <Flex gap="20px" alignItems="center">
        <Heading
          color="laminar.gray.700"
          fontSize="22px"
          fontWeight="semibold"
          lineHeight="18px"
        >
          Tasks
        </Heading>
        <Box w="fit-content">
          <Link
            href="/create"
            as={NextLink}
            _hover={{ textDecoration: "none" }}
          >
            <Button>New Task</Button>
          </Link>
        </Box>
      </Flex>
      <TaskList fetchTasks={fetchTasks} />
    </Box>
  );
};

export default Home;
