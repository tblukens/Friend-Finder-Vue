const friends = require("../data/friends");


module.exports = function (app) {

    matchCheck = (a, b) => {
        return a > b;
    }
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        console.log(req.body)
        let newfriend = req.body;
        let checkNum = null;
        let bestMatch = null;

        friends.forEach((element) => {
            var matchScore = 0;
            element.scores.forEach((element2, j) => {
                var difference = Math.abs(parseInt(element2) - parseInt(newfriend.scores[j]))
                // console.log(`${j} | ${element2} and ${newfriend.scores[j]}`)
                matchScore += parseInt(difference);
                newfriend.scores[j] = parseInt(newfriend.scores[j]);
            });
            console.log(element.name)
            console.log(`check ${checkNum} against ${matchScore}`)
            console.log(matchCheck(checkNum, matchScore))
            if (bestMatch === null && checkNum === null) {
                bestMatch = element;
                checkNum = matchScore;
            } else if (matchCheck(checkNum, matchScore)) {
                bestMatch = element;
                checkNum = matchScore;
                
            }
            console.log(`Current Best Match: ${bestMatch.name}`)
            
        });

        friends.push(newfriend);

        res.json(bestMatch);
    });
}