# Bug Hunter - Issue Tracker App

Bug Hunter is an issue tracker app that allows users to create and manage issues. Users can create both public and private issues, with private issues only accessible to project members. This app is inspired by YouTrack for issue management and is developed to provide an internal tool alternative to using GitHub.

## Technologies Used

This project is built using various key technologies, which are listed below:

1. **Next.js** - A popular React framework for building server-rendered web applications.
2. **Prisma** - An Object-Relational Mapping (ORM) tool for Node.js, used for database interaction.
3. **React** - A JavaScript library for building user interfaces.
4. **Tailwind CSS** - A utility-first CSS framework for quickly designing and styling web applications.
5. **React Hook Form** - A library for managing forms in React applications.
6. **Axios** - A promise-based HTTP client for making HTTP requests.
7. **Zod** - A TypeScript-first validation library for building data validation and parsing.
8. **Prettier && ESLint** - JavaScript Linter and Formatter.
9. **@uiw/react-markdown-editor** and **@uiw/react-markdown-preview** - Components for Markdown editing and rendering.
10. **@hookform/resolvers** - Used for form validation in React Hook Form.
11. **Shadcn UI** - A user interface library for styling components.
12. **lucide-react** - A library for using Lucide icons in React applications.

## Folder Structure

The project has the following folder structure:

```sh
├── .git # The Git version control system folder.
├── .next # The Next.js build output folder.
├── app # The main application code.
├── components # Contains React components used in the app.
├── globals.css # Global CSS styles.
├── lib # Additional application logic and utilities.
├── prisma # Contains Prisma database models and configuration.
├── providers # Context providers for state management.
├── validators # Form validation logic.
├── utils # Utility functions.
├── .gitignore # Git configuration file to specify ignored files and directories.
├── next-env.d.ts # TypeScript declarations for Next.js.
├── package.json # Node.js package configuration file.
├── tailwind.config.js # Configuration for Tailwind CSS.
├── tsconfig.json # TypeScript configuration.
├── postcss.config.js # PostCSS configuration.
├── eslint.json # ESLint configuration for code linting.
├── .prettierrc # Prettier configuration for code formatting.
├── .env # Environment variable configuration file.
├── components.json # Additional component data.
├── yarn-error.log # Yarn error log file.
├── yarn.lock # Yarn package manager lock file.
```

## Project Structure Comment

The folder structure of the Bug Hunter app is organized and follows conventional best practices for a Next.js project. It separates application code, configuration, and dependencies, making it easy to navigate and maintain.

This structure is well-suited for a modern web application, with clean separation between front-end components, back-end logic, and tooling configuration. The use of technologies like Prisma, Next.js, and Tailwind CSS helps in building a robust and maintainable web application.

