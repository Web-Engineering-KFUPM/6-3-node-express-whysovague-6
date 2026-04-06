import { getRandomQuote } from "./quotes.js";
// TODO 1: Import and Create express app instance
import express from "express";
const app = express();

// TODO 1: Define server port
const PORT = 3000;
// TODO 4: Import and Apply CORS middleware
import cors from "cors";
app.use(cors());

// TODO 5: Import and apply Morgan middleware
import morgan from "morgan";
app.use(morgan("dev"));

// TODO 6.1: Create root route "/"
app.get("/", (req, res) => {
    res.send("Welcome to the Quotes API!");
});

// TODO 6.2: Create "/api/quote" route
app.get("/api/quote", (req, res) => {
    // TODO 6.2: Import getRandomQuote function
    const quote = getRandomQuote();
    res.json({ quote });
});

// TODO 7: Start server using app.listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});