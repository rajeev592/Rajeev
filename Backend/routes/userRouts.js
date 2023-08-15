const express = require("express")

const {home, createUser, getUsers, editUser, deleteUser} = require("../controllers/userController.js")



const router = express.Router();

router.get("/",home)

router.post('/createuser', createUser)
router.get('/getusers', getUsers)
router.put ('/editUser/:id', editUser)
router.delete('/deleteuser/:id', deleteUser)

module.exports = router