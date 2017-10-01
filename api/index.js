import express from 'express';
import {MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../server/config';
import bodyParse from 'body-parser';

let mdb;
MongoClient.connect(config.mongodbUri, (err,db)=>{
	assert.equal(null, err);
	mdb = db;
})

const router = express.Router();
router.use(bodyParse.json());

router.get('/portfolios', (req,res) => {

	// **** Loading data from MONGO DB
	let portfolios = {};
	mdb.collection('personalityTable').find({})
		.project({
			
		})
		.each((err,portfolio)=>{
			assert.equal(null, err);

			if(!portfolio){ // no more contests
				res.send({portfolios});
				return;
			}
			portfolios[portfolio._id] = portfolio // Change to use Object ID
			
		})
	// **** Loading data from MONGO DB
});

router.get('/portfolios/:idPerson',(req,res)=>{

	mdb.collection('personalityTable')
	// .findOne({id:Number(req.params.idPerson)})
	.findOne({_id:ObjectID(req.params.idPerson)})
	.then(portfolio => res.send(portfolio))
	.catch(error => {
		console.log(error);
		res.status(404).send('Bad Request');
	});

})

router.get('/skills/:idSkills', (req,res) => {

	// const idSkills = req.params.idSkills.split(',').map(Number);
	const idSkills = req.params.idSkills.split(',').map(ObjectID);

	// **** Loading data from MONGO DB
	let skills = {};
	mdb.collection('skillTable').find({_id:{$in:idSkills}})
		.each((err,skill)=>{
			assert.equal(null, err);

			if(!skill){ // no more contests
				res.send({skills});
				return;
			}

			skills[skill._id] = skill 
		})
	// **** Loading data from MONGO DB
});

router.post('/insert_skills',(req,res)=>{
	// insert data
	const idPerson = ObjectID(req.body.idPerson);
	const skill = req.body.newSkill;
	// validate ...
	mdb.collection('skillTable').insertOne({skill}).then(result =>
		mdb.collection('personalityTable').findAndModify(
				{_id: idPerson},
				[],
				{$push: {idSkill: result.insertedId}},
				{new: true}
			).then(doc =>
				res.send({
					updatePorfolio: doc.value,
					newSkill: {_id: result.insertedId, skill}
				})
			)
		)
		.catch(error => {
			console.log(error);
			res.status(404).send('Bad Request');
		});
})

export default router;