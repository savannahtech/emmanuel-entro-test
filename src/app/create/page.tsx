import TaskCreation from "@/components/TaskCreation";
import { prisma } from "@/db";

import { fetchRelatedTask } from "../details/[slug]/page";
import { Task } from "@prisma/client";

const Page = async () => {
  async function getUsers() {
    "use server";
    const users = prisma.user.findMany({ take: 5 });
    return users;
  }
  async function createTask(task: Task) {
    "use server";
    await prisma.task.create({
      data: {
        title: task.title,
        creationDate: task.creationDate,
        taskAssigneeId: task.taskAssigneeId,
        description: task.description,
        status: task.status,
        avatar: task.avatar,
      },
    });
  }

  const users = await getUsers();
  return (
    <TaskCreation
      users={users}
      fetchRelatedTask={fetchRelatedTask}
      createTask={createTask}
    />
  );
};

export default Page;
