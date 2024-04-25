const express = require("express");
const router = express.Router();

router.use(express.json());
//model
const Todo = require("../models/todoSchema");

router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
    });
    const savedTodo = await newTodo.save();
    res.send(savedTodo);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
