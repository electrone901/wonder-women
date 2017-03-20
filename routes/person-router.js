const Person = require('../models/person-model');
const express = require('express');
const router = express.Router();

//GET ALL PEOPLE PATH: /api/people
const getAllPeople = (req,res)=>(
  Person.findAll()
  .then((data)=>
   	res.send(data)
   	)
  )


//GET ONE PERSON
const getOnePerson = (req,res)=> {
	Person.findById(req.params.id)
	.then((data)=>
   	res.send(data)
   	)
}


//POST ONE PERSON
const createOnePerson = (req,res)=>{
	Person.create({
		name: req.body.name,
		favoriteCity: req.body.favoriteCity
	})
	.then((data)=>{res.send(data)})
}


//UPDATE
const updatePerson = (req, res) => {
	Person.findOne({where: {id: req.params.id}})
		.then((personInfo) => personInfo.update({
			name: req.body.name,
			favoriteCity: req.body.favoriteCity
		})
		)
		.then((data) => res.send(data));
};


// 	.then((postInfo)=>postInfo.update({
// 		  title: body.title,
// 		  image: body.image,	  
// 		  body: body.body,	  
// 		  author: body.author,	  
// 		  tags: body.tags,	
// 		  price: body.price,  
// 		  phone: body.phone, 
// 		  year: body.year,
// 		  brand: body.brand,
// 		  location: body.location,    
// 		  payments_accepted: body.payments_accepted
// 	})
//    )
// 	.then((data)=> res.send(data))
// })


// DELETE A PERSON
const deletePerson = (req,res)=>{
	Person.destroy({where:{id:req.params.id}})
	.then((id)=>{res.send(id.name + ' has been deleted!')})
}


//ROUTES//
router.route('/')
 .get(getAllPeople)
 .post(createOnePerson)


router.route('/:id')
 .get(getOnePerson)
 .delete(deletePerson)
 .put(updatePerson)


module.exports = router