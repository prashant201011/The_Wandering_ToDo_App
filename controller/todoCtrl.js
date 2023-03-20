const Todo = require("../model/todoStruct");

exports.getTodo = (req, res, next) => {
  Todo.find()
    .then((result) => {
      res.render("todo", {
        pageTitle: "TODO_APP",
        todo: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postTodo = (req, res, next) => {
  const content = req.body.content;

  const todo = new Todo({
    text: content,
  });
  todo
    .save()
    .then((result) => {
      console.log("data stored!");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
};

exports.updateTodo = (req, res, next) => {
  const id = req.params.id;

  Todo.find()
    .then((result) => {
      res.render("todoEdit.ejs", {
        todo: result,
        todoId: id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updatePostTodo = (req, res, next) => {
  const id = req.params.id;
  const content = req.body.content;
  Todo.findByIdAndUpdate(id, { text: content }).catch((err) => {
    console.log(err);
  });
  return res.redirect("/");
};

exports.removeTodo = (req, res, next) => {
  const id = req.params.id;
  Todo.findByIdAndRemove(id)
    .then((res) => {})
    .catch((err) => {
      res.redirect("/");
    });
  res.redirect("/");
};
