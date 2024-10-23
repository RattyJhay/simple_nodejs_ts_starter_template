import app from "./app.js"; // Import the Express app
import dotenv from "dotenv"; // Import dotenv to load environment variables

dotenv.config(); // Load environment variables from the .env file

const port = process.env.PORT || 5000; // Get the port from the environment or default to 5000

// Start the server on the specified port and log the URL
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
