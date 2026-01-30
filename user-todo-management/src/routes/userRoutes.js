const r=require('express').Router();
const c=require('../controllers/userController');
r.post('/signup',c.signup);
r.delete('/delete-user/:userId',c.deleteUser);
module.exports=r;