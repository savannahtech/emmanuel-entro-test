# Tasks Management Application Documentation

## Technology Used

- **Frontend**: Next.js, Chakra UI
- **Backend**: Next.js Prisma
- **Database**: PostgreSQL
- **State Management**: React Hooks

## Running the Application Locally

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set Up environmental variable: copy `.env.example` to a new file `.env`
4. Generate prisma: `npx prisma generate`
5. Start local server: `npm run dev`

## Deployment

1. Generate prisma: `npx prisma generate`
2. Build the application: `npm run build`
3. Start the application: `npm start`

## Core Features

- **Tasks List**: Displays tasks cards ordered by creation date with the ability to view more task details and create a new task.

- **Task Form**: Two-step form capturing important information such as title, assignee name, description, and related tasks.

- **Task Detail View**: Provides detailed information on each task, including title, assignee name, status, creation date, description, and related tasks.

- **Related Tasks**: Allows linking of multiple tasks and shows a list of related tasks.

- **Infinite Scrolling UX**: Supports infinite scroll.

## Enhancements for Production Readiness

- **Testing**: Add unit, integration, and end-to-end tests.
- **Error Handling**: Implement robust error handling.
- **Performance Optimizations**: Apply techniques like lazy loading, code splitting.
- **Accessibility**: Improve accessibility for all users.
- **Internationalization (i18n)**: Support multiple languages.
- **Security Measures**: Implement security protections like rate limiting, input sanitizing.
- **CI/CD**: Set up a CI/CD pipeline for automated testing and deployment.
- **State Management Library**: Consider a state management library for complex state.
- **SEO Optimization**: Implement SEO best practices.
- **Analytics**: Integrate with analytics tools like Google Analytics.

These enhancements would make the application production-ready.
