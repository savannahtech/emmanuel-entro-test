import Home from "@/components/Home";
import TaskList from "@/components/TaskList";
import { prisma } from "@/db";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

export default function Page() {
  async function fetchTasks(page = 1) {
    "use server";
    const itemsPerPage = 20;
    const totalTasks = await prisma.task.count();
    const totalPages = Math.ceil(totalTasks / itemsPerPage);

    const tasks = await prisma.task.findMany({
      orderBy: {
        creationDate: "desc",
      },
      take: itemsPerPage * page,
      include: {
        taskAssignee: true,
      },
    });

    return { data: tasks, page, totalPages, counts: totalTasks };
  }
  return <Home fetchTasks={fetchTasks} />;
}
