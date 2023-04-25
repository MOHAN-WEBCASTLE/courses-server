const express =require('express')
const router = express.Router()
const userController = require('../controllers/user');

router.get('/',userController.getUsers)
router.get('/filter',userController.filteruser)
router.post('/register',userController.registerUser)
router.post('/login',userController.loginUser)
router.put('/:id',userController.updateUsers)

module.exports = router;