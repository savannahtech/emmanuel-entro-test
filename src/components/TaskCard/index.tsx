import Image from "next/image";
import Button from "../Button/Button";
import { Task } from "@/types/Task.type";
import { formatDateTime } from "@/utils/formatDate";
import Link from "next/link";

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="rounded-[10px] border border-laminar-gray-100 bg-white shadow-card_row flex p-[32px] pr-[44px] justify-between items-center">
      {/* Left */}
      <div className="flex space-x-6">
        {/* Logo */}
        <div className="rounded-[10px] border border-tag-sapphire-blue-400 bg-tag-sapphire-blue-1000 flex w-[64px] h-[64px] justify-center items-center space-x-[24px]">
          <Image src="/images/pocket.svg" alt="Check" width={40} height={40} />
        </div>
        <div className="flex flex-col justify-around cursor-pointer">
          <h2 className="text-laminar-gray-1000 font-sans text-14  font-semibold leading-18">
            {task.title}
          </h2>
          <div className="space-x-2 flex items-center">
            <span className="text-laminar-gray-500 font-sans text-xs  font-semibold leading-18">
              {task.assignee}
            </span>
            <span className="text-laminar-gray-500 font-sans text-xs  font-medium leading-18">
              Creation Date
            </span>
            <span className="text-laminar-gray-600 font-sans text-xs  font-normal leading-18">
              {formatDateTime(task.creationDate)}
            </span>
          </div>
        </div>
      </div>
      {/* Right */}
      <Link href={`/taskdetail/${task.id}`}>
        <div className="flex space-x-4 pl-8 items-center border-l-[1px] border-l-laminar-gray-200 cursor-pointer">
          <Button>{task.status}</Button>
          <div>
            <Image
              src="/images/chevron-right.svg"
              alt="Check"
              width={24}
              height={24}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TaskCard;
