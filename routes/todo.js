const express = require("express");
const router = express.Router();
const todoController = require("../controller/todoCtrl");

router.get("/", todoController.getTodo);
router.post("/", todoController.postTodo);

router.get("/edit/:id", todoController.updateTodo);
router.post("/edit/:id", todoController.updatePostTodo);

router.get("/remove/:id", todoController.removeTodo);

module.exports = router;
