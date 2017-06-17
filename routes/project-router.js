const Project = require('../models/projects-model');
const express = require('express');
const router = express.Router();

//GET ALL PROJECTS PATH: /api/people
const getAllProjects = (req,res)=>(
  Project.findAll()
  .then((data)=>
   	res.send(data)
   	)
  )


// GET ONE PROJECT
const getOneProject = (req,res)=> {
	Project.findById(req.params.id)
	.then((data)=>
   	res.send(data)
   	)
}


//POST ONE PERSON
// const createOnePerson = (req,res)=>{
// 	Person.create({
// 		name: req.body.name,
// 		favoriteCity: req.body.favoriteCity
// 	})
// 	.then((data)=>{res.send(data)})
// }


//UPDATE
// const updatePerson = (req, res) => {
// 	Person.findOne({where: {id: req.params.id}})
// 		.then((personInfo) => personInfo.update({
// 			name: req.body.name,
// 			favoriteCity: req.body.favoriteCity
// 		})
// 		)
// 		.then((data) => res.send(data));
// };

// DELETE A PERSON
// const deletePerson = (req,res)=>{
// 	Person.destroy({where:{id:req.params.id}})
// 	.then((id)=>{res.send(id.name + ' has been deleted!')})
// }

//SEARCH  any:key I defined,use to access the req. 
// const searchByName = (req,res)=>{
// 	Person.findAll({
// 	  where: {
// 	    name: {
// 	      $like: '%' + req.params.name + '%'
// 		}
// 	  }
// 	})
// 	.then((data)=>res.send(data))
// }


//ROUTES//
router.route('/')
 .get(getAllProjects)
 // .post(createOnePerson)


router.route('/:id')
 .get(getOneProject)
//  .delete(deletePerson)
//  .put(updatePerson)


// router.route('/search/:name')
// .get(searchByName)



module.exports = router