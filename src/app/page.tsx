import Button from "@/components/Button/Button";
import TaskList from "@/components/TaskList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-[104px]">
      <div className="flex space-x-5 items-center">
        <h1 className="text-laminar-gray-700 font-sans text-[22px] font-semibold leading-18">
          Tasks
        </h1>
        <div className="w-fit">
          <Button>New Task</Button>
        </div>
      </div>
      <TaskList />
    </main>
  );
}
