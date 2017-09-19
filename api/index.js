import express from 'express';
import {MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../server/config';
// import data from '../src/loadingData'

let mdb;
MongoClient.connect(config.mongodbUri, (err,db)=>{
	assert.equal(null, err);
	mdb = db;
})

const router = express.Router();

router.get('/portfolios', (req,res) => {

	// **** Loading data from MONGO DB
	let portfolios = {};
	mdb.collection('personalityTable').find({})
		.project({
			// idSkill: 1
			// idFavourite: 1
		})
		.each((err,portfolio)=>{
			assert.equal(null, err);

			if(!portfolio){ // no more contests
				res.send({portfolios});
				return;
			}

			portfolios[portfolio.idPerson] = portfolio // Change to use Object ID
			
		})
	// **** Loading data from MONGO DB
});

router.get('/skills/:idSkills', (req,res) => {

	const idSkills = req.params.idSkills.split(',').map(Number);

	// **** Loading data from MONGO DB
	let skills = {};
	mdb.collection('skillTable').find({idSkill:{$in:idSkills}})
		.each((err,skill)=>{
			assert.equal(null, err);

			if(!skill){ // no more contests
				res.send({skills});
				return;
			}

			skills[skill.idSkill] = skill 
		})
	// **** Loading data from MONGO DB
});

router.get('/portfolios/:idPerson',(req,res)=>{

		mdb.collection('personalityTable')
		.findOne({idPerson:Number(req.params.idPerson)})
		.then(portfolio => res.send(portfolio))
		.catch(error => {
			console.log(error);
			res.status(404).send('Bad Request');
		});

})

// router.get('/portfolio/:idPerson', (req,res) => {

// 	// **** Loading data from MONGO DB
// 	mdb.collection('personalityTable')
// 		// .findOne({id:Number(req.params.contestId)})
// 		.findOne({ '_id': ObjectID(req.params.idPerson)}) // Change to use Object ID
// 		.then(portfolio => res.send(portfolio))
// 		.catch(error => {
// 			console.log(error);
// 			res.status(404).send('Bad Request');
// 		});
// 	// **** Loading data from MONGO DB
// });

export default router;