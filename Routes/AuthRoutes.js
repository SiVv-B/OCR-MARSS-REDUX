//express
const express =require ('express')
//Routers import
const router = express.Router()
//import the methodsfrom Controllers
const {registerController,loginController,register,login,forgotPassword,resetPassword} = require('../Controllers/AuthController')
const {registrationValidation,validation,loginValudation}=require('../Middleware/validation')

const isAuth=require('../Middleware/isAuth');
const { is } = require('express/lib/request');

router.post('/register',registrationValidation,validation,registerController);
router.post('/login',loginValudation,validation,loginController)
router.get('/current',isAuth,(request,response)=>{
    response.send({user:request.user})
})
/* router.route('/register').post(register)
router.route('/login').post(login) */
/* router.route('/forgotPassword').post(forgotPassword)
router.route('/resetPassword/:resetToken').put(resetPassword)
 */

//export the const router = express.Router()
module.exports = router