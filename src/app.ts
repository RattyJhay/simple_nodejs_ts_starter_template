import dotenv from "dotenv"; // Load environment variables from .env
import express from "express"; // Import Express to create the app
import helmet from "helmet"; // Import Helmet for securing HTTP headers
import cookieParser from "cookie-parser"; // Middleware for parsing cookies
import cors from "cors"; // Middleware for enabling CORS (Cross-Origin Resource Sharing)

dotenv.config(); // Load environment variables from .env

const app = express(); // Initialize the Express application

// Uncomment this section if you need custom CORS configuration
// const corsOptions = {
//   origin: "http://localhost:5173", // Allow requests from this origin
//   optionsSuccessStatus: 200, // Some browsers (legacy browsers) choke on 204
// };

// Apply middleware to the app
app.use(helmet()); // Use Helmet to add security headers to the response
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse cookies from the client request
app.use(cors()); // Enable CORS with default options

// Define a simple GET route to test if the server is running
app.get("/", (req, res) => {
  res.json({
    message: "Hello! Welcome to the index route 🚀🦄🌈✨👋🌎✨🌈🦄🚀",
  });
});

// Uncomment and add additional routes if needed
// app.use("/api", apiRoutes); // Example route for API endpoints

export default app; // Export the Express app for use in index.ts
