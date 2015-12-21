var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:lobby?', function(req, res, next) {
	if (req.params.lobby) {
		//If there is a lobby name
		var lobbyNum = req.params.lobby,
			lobbyName = "My Cool Lobby";
		//Verify user has access to this lobby
		res.render('lobby', { lobbyName: lobbyName,  lobbyType: "private", users: ["1", "2", "3"]});
	} else {
		//Get list of lobbies
		res.render('lobbies', {});
	}
});

router.post('/', function(req, res, next) {

});

module.exports = router;