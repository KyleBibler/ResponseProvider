var express = require('express');
var router = express.Router();

/* GET users listing. */
var getLobbyWithPermissionCheck = function(lobbyNum, callback) {
	//DB query to get lobby info
	//Fake for now
	var lobbyData = {
		name: "Cool Lobby",
		id: 1,
		users: [{name: "Kyle"}, {name: "Cody"}, {name: "John"}],
		type: "private",
		showAnswersToOthers: false,
		isAnonymous: false,
		allowAnonymous: false,
		currentQuestion: "This is something",
		currentResponses: [{text: "Something something", user: "Kyle"}]
	};
	return callback(lobbyData);
};

var getLobbyList = function(filters, callback) {
	//DB query to get list of lobbies
	//Fake for now
	var lobbies = [
		{name: "Cool Lobby", id: 1, isPrivate: true, usersPresent: 3, dateCreated: "12/21/15 23:54"},
		{name: "Cool Lobby 2", id: 2, isPrivate: true, usersPresent: 3, dateCreated: "12/21/15 23:57"},
	];
	return callback(lobbies);
};

var createLobby = function(lobbyData, callback) {
	//Do some db magic
	var errors = [];
	return callback(errors);
};

var submitResponse = function(response, callback) {
	var errors = [];
	return callback(errors);
}

router.get('/:lobby?', function(req, res, next) {
	if (req.params.lobby) {
		//If there is a lobby number
		//Verify user has access to this lobby		
		var lobbyNum = req.params.lobby;
		getLobbyWithPermissionCheck(lobbyNum, function(lobbyData) {
			res.render('lobby', { lobbyData: lobbyData });
		});		
	} else {
		//Get list of lobbies
		getLobbyList([], function(lobbies) {
			res.render('lobbies', {lobbies: lobbies});
		});
	}
});

router.get('/create-lobby', function(req, res, next) {
	res.render('create-lobby', {});
});

router.post('/create-lobby', function(req, res, next) {
	//
	createLobby({}, function(errors) {
		if(errors.length === 0) {
			//Redirect to lobby
		} else {
			//Show errors
		}
	});
});

module.exports = router;