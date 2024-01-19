const express=require("express")
const router=express.Router()
const {CourseController}=require("../Controller/Course.Controller")
router.get("/",CourseController.getAll)
router.get("/:id",CourseController.getById)
router.post("/",CourseController.Post)
router.delete("/:id",CourseController.delete)
module.exports=router