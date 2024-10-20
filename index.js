const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// Sample todos data
const todos = [
  { id: "1", title: "Todo 1", description: "This is the first todo" },
  { id: "2", title: "Todo 2", description: "This is the second todo" },
  { id: "3", title: "Todo 3", description: "This is the third todo" },
  { id: "4", title: "Todo 4", description: "This is the fourth todo" },
  { id: "5", title: "Todo 5", description: "This is the fifth todo" },
];

// Function to get random number (already defined)
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Existing route for notifications
app.get("/notifications", (req, res) => {
  res.json({
    notifications: getRandomNumber(10),
    jobs: getRandomNumber(10),
    messaging: getRandomNumber(10),
    network: getRandomNumber(10),
  });
});

// Route to get up to 3 todos
app.get("/todos", (req, res) => {
  const limitedTodos = todos.slice(0, 3); // Return only the first 3 todos
  res.json(limitedTodos);
});

// Route to get a specific todo by ID
app.get("/todos", (req, res) => {
  const { id } = req.query; // Extract the "id" from the query string

  if (id) {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } else {
    res.json(todos.slice(0, 3)); // Return the first 3 todos by default
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
