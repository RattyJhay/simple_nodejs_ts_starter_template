# Node.js TypeScript Starter Template

A minimal but powerful starter template for building Node.js applications with TypeScript. This template includes Express.js setup with essential middleware for security and API functionality.

## Features

- 🚀 **TypeScript** support
- ⚡️ **Express.js** for fast server setup
- 🔒 **Helmet** for enhanced security
- 🌐 **CORS** enabled
- 🍪 **Cookie Parser** middleware
- 📝 **dotenv** for environment variable management
- 🔄 **Hot reload** development server

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 16.x or higher recommended)
- Any package manager (PNPM is used by default, but NPM or Yarn can be used)
- nodemon (global installation required)

```bash
# Install nodemon globally using your preferred package manager
npm install -g nodemon
# or
yarn global add nodemon
# or
pnpm add -g nodemon
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/RattyJhay/simple_nodejs_ts_starter_template.git
cd node_ts_starter_template
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

## Scripts

- `pnpm start` - Start the development server with hot reload
- `pnpm build` - Build the TypeScript code
- `pnpm test` - Run tests (currently placeholder)

## Project Structure

```
├── src
│   ├── index.ts      # Entry point of the application
│   ├── app.ts        # Express app setup with middleware and routes
├── tsconfig.json     # TypeScript configuration file
└── package.json      # Project metadata and dependencies
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
NODE_ENV=development
```

## Development

To start the development server:

```bash
pnpm start
```

The server will restart automatically when file changes are detected.

## Building for Production

To build the project:

```bash
pnpm build
```

This will create a `dist` directory with the compiled JavaScript files.

## Dependencies

### Production

- express: Web framework for Node.js
- cookie-parser: Parse Cookie header and populate req.cookies
- cors: Enable Cross-Origin Resource Sharing
- dotenv: Load environment variables from .env file
- helmet: Security middleware

### Development

- typescript: TypeScript language
- ts-node: TypeScript execution engine
- tsx: Enhanced TypeScript execution
- @types/\*: TypeScript type definitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.
