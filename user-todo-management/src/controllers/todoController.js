const supabase = require('../config/supabaseClient');
exports.addTodo = async(req,res)=>{
 const {title,description,userId}=req.body;
 const {data,error}=await supabase.from('todos').insert([{title,description,user_id:userId}]).select().single();
 if(error) return res.status(400).json({error:error.message});
 res.json(data);
};
exports.getUserTodos = async(req,res)=>{
 const {data}=await supabase.from('todos').select('*').eq('user_id',req.params.userId);
 res.json(data);
};
exports.updateTodo = async(req,res)=>{
 const {data}=await supabase.from('todos').update(req.body).eq('id',req.params.todoId).select().single();
 res.json(data);
};
exports.deleteTodo = async(req,res)=>{
 await supabase.from('todos').delete().eq('id',req.params.todoId);
 res.json({message:'Todo deleted'});
};