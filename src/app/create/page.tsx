import TaskCreation from "@/components/TaskCreation";
import { prisma } from "@/db";
import { TaskProps } from "@/types/Task.type";
import { fetchRelatedTask } from "../details/[slug]/page";

const Page = async () => {
  const task = {
    title: "New Task",
    creationDate: "2021-10-01T00:00:00.000Z",
  } as unknown as TaskProps;
  async function getUsers() {
    "use server";
    const users = prisma.user.findMany({ take: 5 });
    return users;
  }

  const users = await getUsers();
  return (
    <TaskCreation
      task={task}
      users={users}
      fetchRelatedTask={fetchRelatedTask}
    />
  );
};

export default Page;
