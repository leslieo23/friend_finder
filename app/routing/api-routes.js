
var surveyData= require('../data/friends.js');
var path=require('path');


module.exports=function(app){
	

	app.get('/api/friends',function(req,res){
		res.json(surveyData);
	})

	app.post('/api/friends/',function(req,res){

		surveyData.push(req.body){
			res.json(true);
			console.log(surveyData)
		}
	})
	app.post('/api/clear',function(req,res){
		surveyData=[];
		console.log(surveyData);
	})
}

