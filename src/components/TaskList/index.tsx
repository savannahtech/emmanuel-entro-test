import TaskCard from "../TaskCard";
import Tasks from "@/data/tasks.json";
const TaskList = () => {
  return (
    <div className="mt-5 space-y-4">
      {Tasks.map((task, index) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
