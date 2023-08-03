import { Task, User } from "@prisma/client";

export interface TaskProps extends Task {
  taskAssignee: User | null;
}

export type TasksMetaProps = {
  data: TaskProps[];
  page: number;
  totalPages: number;
  counts: number;
};
