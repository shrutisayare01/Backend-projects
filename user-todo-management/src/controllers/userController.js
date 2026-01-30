const supabase = require('../config/supabaseClient');
exports.signup = async (req,res)=>{
 const {name,email,password}=req.body;
 const {data,error}=await supabase.from('users').insert([{name,email,password}]).select().single();
 if(error) return res.status(400).json({error:error.message});
 res.json(data);
};
exports.deleteUser = async(req,res)=>{
 await supabase.from('users').delete().eq('id',req.params.userId);
 res.json({message:'User deleted'});
};