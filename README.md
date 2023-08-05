This is a [Next.js](https://nextjs.org/)

## Getting Started

1. Copy the `env` from `.env.example` to `.env`.
2. run the prisma to generate:

```bash
yarn prisma generate
# or
npx prisma generate
```

3. run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## What was covered?

### Task Creation:

Users create new tasks by entering details like title, description, due date, etc. This data is stored and displayed in a task list.

### Task List:

Displays all created tasks, with key details visible. It offers sorting and filtering options for easier task management.

### Single Task Detail:

A detailed view of a task, showing all task information, status, comments, and related files. Here, users can edit or delete the task.

### Related Tasks:

Tasks can be linked together to show their relation, like being part of a bigger project or acting as prerequisites for other tasks.

### Assign Task: In collaborative settings, tasks can be assigned to specific users. These users become responsible for the task completion and see assigned tasks in their task list
