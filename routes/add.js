var data = require("../data.json");

exports.addFriend = function(req, res) {   
	// Your code goes here
	var name = req.query.name;
    var descr = req.query.description;
    var friend = {"name": name, "description": descr, "imageURL": "http://lorempixel.com/400/400/people"};
    data["friends"].push(friend);
    res.render('add', data);
}