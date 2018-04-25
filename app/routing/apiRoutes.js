// Load Data
var friends = require("../data/friends.js");

// Routing
module.exports = function (app) {

    // API Get Request
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    // API Post Request
    app.post("/api/friends", function (req, res) {
        console.log("Hello");

        var newFriend = req.body;
        // var newFriend = {
        //     name: Chris,
        //     photo: pic,
        //     scores: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
        // };
        var newFriendScores = newFriend.scores;
        console.log(newFriendScores);

        //   Add Logic to find match
        var scoresDiffArray;
        var match = 0;
        for (var i = 0; i < friends.length; i++) {
            var scoreDifference = 0;
            for (var j = 0; i < newFriendScores.length; j++) {

                scoreDifference += (Math.abs(parseInt(friends[i].scores[j] - parseInt(newFriendScores[j]))));

            }
            scoresArray.push(scoreDifference);
        }

        for (var i = 0; i < scoresDiffArray.length; i++) {
            if (scoresDiffArray[i] <= scoresDiffArray[match]) {
                match = i;
            }
        }
        
        var bestMatch = friends[match];
        res.json(bestMatch);
        console.log(bestMatch);

        friends.push(newFriend);
        res.json(true);
    })


};