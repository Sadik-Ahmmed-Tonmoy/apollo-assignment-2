npm run start:prod
Runs the Node.js application in production mode by executing the server.js file located in the ./dist directory.

npm run start:dev
Launches the application in development mode using ts-node-dev. This script enables hot reloading and transpiles TypeScript files located in the src directory (server.ts) on changes.

npm run build
Transpiles TypeScript files in the project using the TypeScript compiler (tsc). It generates the output in the ./dist directory.

npm run lint
Uses ESLint to analyze and identify linting errors in TypeScript files within the src directory. It ignores paths specified in .eslintignore and checks files with a .ts extension.

npm run lint:fix
Attempts to automatically fix linting errors in the TypeScript files located in the src directory using ESLint.

npm run prettier
Formats JavaScript, TypeScript, and JSON files in the ./src directory using Prettier. It ignores paths specified in .gitignore and writes the changes to the respective files.

npm run prettier:fix
Applies Prettier formatting to the TypeScript files within the src directory to ensure consistent code style and formatting.

