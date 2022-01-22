const express=require('express');
const router=express.Router();
const {registrationValidation,validation,loginValudation}=require('../Middleware/validation')
const isAuth=require('../Middleware/isAuth');
const { is } = require('express/lib/request');
const {postUser,getAllUsers,deleteUser,updateUser,getOneUser}=require('../Controllers/UsersManagementControllers')
//Add a client(user) with token
router.post('/user',postUser)

router.get('/user',getAllUsers,registrationValidation,validation);
router.delete('/user/:id',deleteUser);
router.put('/user/:id',updateUser);
router.get('/user/:id',getOneUser);
module.exports=router