const router = require("express").Router;
const {creatUser, deleteUser, getUsers, updateUser,} = require("../controllers/users.controller")


const userRouter = router();


userRouter.get("/", getUsers);
userRouter.post("/", creatUser);
userRouter.patch("/", updateUser);
userRouter.delete("/", deleteUser);

module.exports = userRouter;
