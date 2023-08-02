import { Task } from "@/types/Task.type";
import Image from "next/image";

const TaskDetail = ({ task }: { task: Task }) => {
  return (
    <div className="flex p-6 pb-16 flex-col items-start space-y-6 self-stretch rounded-md bg-laminar-gray-50 w-full min-h-screen">
      <div className="flex items-center gap-6 self-stretch">
        <div className="rounded-[10px] border border-tag-sapphire-blue-400 bg-tag-sapphire-blue-1000 flex w-[64px] h-[64px] justify-center items-center space-x-[24px]">
          <Image
            src="/images/plus-circle.svg"
            alt="Check"
            width={40}
            height={40}
          />
        </div>
        <div className="flex pt-0.75 flex-col items-start space-y-1 flex-grow-0 flex-shrink-0 flex-basis-0">
          <h2 className="text-laminar-gray-1000 font-sans text-14  font-semibold leading-18">
            {task.title}
          </h2>
          <p className="text-laminar-gray-600 font-sans text-xs  font-normal leading-18">
            {task.creationDate}
          </p>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full">
        <div className="border-b border-laminar-gray-500 opacity-40 w-full "></div>
      </div>

      <div className="flex gap-x-12 items-center">
        <div className="space-y-[6px]">
          <h3 className="text-laminar-gray-500 font-sans text-xs font-medium leading-18">
            Status
          </h3>
          <div className="flex p-1 px-3 justify-center items-center rounded-full bg-[#EEF2F8]">
            <span className="text-laminar-gray-700 font-sans text-[13px] font-medium leading-20">
              {task.status}
            </span>
          </div>
        </div>
        <div className="space-y-[6px]">
          <h3 className="text-laminar-gray-500 font-sans text-xs font-medium leading-18">
            Date Created
          </h3>
          <div className="flex p-1 px-3 justify-center items-center rounded-full bg-[#EEF2F8]">
            <span className="text-laminar-gray-700 font-sans text-[13px] font-medium leading-20">
              {task.creationDate}
            </span>
          </div>
        </div>
        <div className="space-y-[6px]">
          <h3 className="text-laminar-gray-500 font-sans text-xs font-medium leading-18">
            Assignee
          </h3>
          <div className="flex p-1 px-3 justify-center items-center rounded-full bg-[#EEF2F8]">
            <span className="text-laminar-gray-700 font-sans text-[13px] font-medium leading-20">
              {task.assignee}
            </span>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-laminar-gray-500 font-sans text-xs font-medium leading-18">
          Description
        </h3>
        <div className="flex p-4 items-start flex-grow-0 flex-shrink-0 rounded-[10px] bg-[#EEF2F8]">
          <p className="text-laminar-gray-700 font-sans text-[13px] font-medium leading-20 w-3/5">
            {task.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
