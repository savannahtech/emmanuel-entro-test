import TaskDetail from "@/components/TaskDetail";
import Tasks from "@/data/tasks.json";
export default function Page({ params }: { params: { slug: string } }) {
  const task = Tasks.find((task) => task.id === params.slug);
  if (!task) {
    return <div>Task not found</div>;
  }
  return (
    <main className="p-[100px] pr-[170px] flex items-center justify-center">
      <TaskDetail task={task} />
    </main>
  );
}
