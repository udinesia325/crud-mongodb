const express = require("express")
const route = express.Router()
const siswaModel = require("../models/siswaModel")

route.get("/:id",(req,res)=>{
  siswaModel.findById(req.params.id)
    .then((response)=> res.json(response))
    .catch(()=> res.status(400).send("data tidak ada!!"))
})


//get data
route.get("/",(req,res)=>{
  siswaModel.find()
    .then((response)=> {
      res.json(response)
    })
})

route.post("/",(req,res)=>{
  
  const {nama,umur } = req.body
    siswaModel.create({nama,umur})
      .then(()=> res.send("berhasil ditambahkan!"))
})

route.put("/:id",(req,res)=>{
  const {nama,umur} = req.body
  siswaModel.updateOne({_id:req.params.id},{nama,umur},(err)=>{
    if(!err){
      res.send("berhasil di update!!")
    }else{
      res.status(400).send("gagal di update")
    }
  })
})
route.delete("/:id",(req,res)=>{
  siswaModel.findByIdAndDelete(req.params.id,()=>{
    res.send("berhasil di hapus!!")
  })
})

module.exports = route