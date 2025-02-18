import cors from "cors";
import express from "express";

const app = express();
const port = 8000;

app.use(cors());

app.get("/api/greet", (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }

  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
