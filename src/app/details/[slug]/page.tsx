import TaskDetail from "@/components/TaskDetail";
import { prisma } from "@/db";
import { TaskProps } from "@/types/Task.type";

export async function fetchRelatedTask(page = 1, id: number | null) {
  "use server";
  const itemsPerPage = 20;
  const totalTasks =
    (
      await prisma.user.findFirst({
        where: {
          id: id || undefined,
        },
        include: {
          Task: true,
        },
      })
    )?.Task.length || 0;
  const totalPages = Math.ceil(totalTasks / itemsPerPage);

  const tasks = (
    await prisma.user.findFirst({
      where: {
        id: id || undefined,
      },
      include: {
        Task: {
          orderBy: {
            creationDate: "desc",
          },
          take: itemsPerPage * page,
          include: {
            taskAssignee: true,
          },
        },
      },
    })
  )?.Task as TaskProps[];

  return { data: tasks, page, totalPages, counts: totalTasks };
}
export default async function Page({ params }: { params: { slug: string } }) {
  async function fetchTask(id: number) {
    "use server";

    const task = await prisma.task.findUnique({
      where: {
        id,
      },
      include: {
        taskAssignee: true,
      },
    });
    return task;
  }
  const task = await fetchTask(Number(params.slug));

  if (!task) {
    return <div>Task not found</div>;
  }

  return <TaskDetail task={task} fetchRelatedTask={fetchRelatedTask} />;
}
