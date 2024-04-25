const express = require("express");
const router = express.Router();

//model schema
const Todo = require("../models/todoSchema");

router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);

    if (todo) {
      res.send(todo);
    } else {
      res.status(404).send("todo not found");
    }
  } catch (err) {}
});
