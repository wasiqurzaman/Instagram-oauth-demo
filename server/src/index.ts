import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "success" });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
