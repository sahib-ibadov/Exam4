const {Course}=require("../Models/Course.model")

const CourseController={
    getAll:async(req,res)=>{
        try{
            const target=await Course.find({})
            res.send(target)

        }catch(error){
            res.send("item is not fount")
        }
    },
    getById:async(req,res)=>{
        try{
            const{id}=req.params
            const course=await Course.findById(id)
            res.send(course)

        }catch(error){
            res.send("item is not found")
        }
    },
    Post:async(req,res)=>{
        const{name,desc,price,image,LinkImage}=req.body
        const NewProd=new Course({name,desc,price,image,LinkImage})
        await NewProd.save()
        res.send(NewProd)
        try{

        }catch(error){
            res.send("item is not found")
        }
    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
            await Course.findByIdAndDelete(id)
            res.send("deleted")

        }catch(error){
            res.send("item is not found")
        }
    },
}
module.exports={CourseController}