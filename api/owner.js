import express from 'express'
import prisma from './lib/index.js'
const router  = express.Router()
// create owner router 
router.get('/',async(req,res)=>{
   try{
      const owners  = await prisma.owner.findMany()
      if(owners.length === 0){
         return res.status(401).json({message:'No Owner Found'})
      }else{
         return res.status(200).json({owners})
      }
   }catch(error){
      res.status(500).json({error:error.message})
      console.log(error)
   }finally{
      prisma.$disconnect
   }
})
router.get("/:id",async(req,res)=>{
   try{
      const {id}  =  req.params
   console.log(id)
   const singleOwner  =  await prisma.owner.findUnique({
      where:{
         id:Number(id),
      },
   })
   if(!singleOwner){
      res.status(401).json({Message:"owner not found "})
      console.log("not found")
   }
   res.json(singleOwner)
   console.log("found  end ...", singleOwner)

   }catch(error){
      res.status(401).json({message:error.message})
   }
   finally{
      prisma.$disconnect()
   }

   
})
router.post("/create",async(req,res)=>{
   const {name , email  } =  req.body 
   const owner   = await prisma.owner.create({
      data:{
         name,
         email
      }
   })
   if(!owner){
      return res.status(401).json({Message:"owner can create"})
   }
   res.json(owner)
   console.log("owner creation",owner)
   console.log("owner creation",name)
   console.log("owner creation",email)

})
router.put("/update/:id",async(req,res)=>{
   const {id} =  req.params
   const {name , email  } =  req.body 
   const owner   = await prisma.owner.update({
      where:{
         id:Number(id)
      },
      data:{
         name,
         email
      }
   })
   if(!owner){
      return res.status(401).json({Message:"owner cant Update"})
   }
   res.json(owner)
   console.log("owner updation",owner)
   console.log("owner updation",name)
   console.log("owner updation",email)

})

router.delete("/delete/:id",async(req,res)=>{
   try{
      const {id} =  req.params 
      const owner  = await prisma.owner.delete({
         where:{
            id:Number(id)
         }
      })
      if(owner){
         return res.json(owner)
      }else{
         res.status(400).json({Message:"This id doesnt exit "})
      }
   }catch(error){
      res.status(400).json({Message:error.message})
   }finally{
      prisma.$disconnect()

   }
  
})
export default router