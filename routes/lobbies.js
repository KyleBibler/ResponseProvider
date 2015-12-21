var express = require('express');
var router = express.Router();

/* GET users listing. */
var getLobbyWithPermissionCheck = function(lobbyNum, callback) {
	//DB query to get lobby info
	//Fake for now
	var lobbyData = {
		name: "Cool Lobby",
		id: 1,
		usersPresent: ["Kyle", "John", "Cody"],
		type: "private",
		showAnswersToOthers: false,
		isAnonymous: false,
		allowAnonymous: false,
		responses: [{text: "Something something", user: "Kyle"}]
	}
	return callback(lobbyData)
}

var getLobbyList = function(filters, callback) {
	//DB query to get list of lobbies
	//Fake for now
	var lobbies = [
		{name: "Cool Lobby", id: 1, isPrivate: true, usersPresent: 3},
		{name: "Cool Lobby 2", id: 2, isPrivate: true, usersPresent: 3},
	];
	return callback(lobbies);
}

router.get('/:lobby?', function(req, res, next) {
	if (req.params.lobby) {
		//If there is a lobby number
		//Verify user has access to this lobby		
		var lobbyNum = req.params.lobby;
		getLobbyWithPermissionCheck(lobbyNum, function(lobbyData) {
			res.render('lobby', { lobbyData: lobbyData);
		});		
	} else {
		//Get list of lobbies
		getLobbyList([], function(lobbies) {
			res.render('lobbies', {lobbies: lobbies});
		});
	}
});

router.post('/createLobby', function(req, res, next) {
	//
});

module.exports = router;