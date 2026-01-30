const r=require('express').Router();
const c=require('../controllers/todoController');
r.post('/add-todo',c.addTodo);
r.get('/get-my-todo/:userId',c.getUserTodos);
r.put('/update-todo/:todoId',c.updateTodo);
r.delete('/delete-todo/:todoId',c.deleteTodo);
module.exports=r;