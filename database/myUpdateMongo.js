var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = "mongodb://localhost:27017/portfolioDb";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	let personalityCount = 0;
	db.collection('personalityTable').find({}).each((err, person) => {
	assert.equal(null, err);
	if (!person) { return; }

	personalityCount++;
	db.collection('skillTable')
	.find({ id: { $in: person.idSkill }})
	.project({ _id: 1 })
	.toArray()
	.then(_ids => {
	const newIds = _ids.map(o => o._id);
	db.collection('personalityTable').updateOne(
		{ id: person.id },
		{ $set: { idSkill: newIds } }
	).then(() => {
		console.info('Updated', person._id);
		personalityCount--;
		if (personalityCount === 0) { db.close(); }
	});
	})
	.catch(console.error);
	});
});