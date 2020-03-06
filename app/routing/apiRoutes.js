var friends = require("../data/friends.js");
var express = require("express");
var bodyParser = require("body-parser");
var apirouter = express.Router();

//FRIENDS LIST//
apirouter.get("/api/friends", function(req,res){
  res.json(friends);
})


//NEW FRIEND FUNCTION
apirouter.post("/api/friends", function(req, res){
  console.log("almost there...");
  var newFriend = req.body;
  console.log(newFriend);



  //FUNCTION FOR CONVERTING THE USERS RESULTS INTO AN ARRAY
  var newScore = function(array){
    var newScore = [];
    for (var i = 0; i < array.length; i++) {
      newScore.push(parseInt(array[i]));
    }
    return newScore;
  }
  //FUNCTION TO CALCULATE THE DIFFERENCE BETWEEN TWO ARRAYS THEN ADDS UP DIFF//
  var totalDiff = function(arrA, arrB){
    delta = 0;
    for(var i=0; i<arrA.length; i++){
      delta += Math.abs(arrA[i] - arrB[i]);
    }
    return delta;
  }

  function indexOfMin(array) {
      if (array.length === 0) {
          return -1;
      }

      var min = array[0];
      var minIndex = 0;

      for (var i = 1; i < array.length; i++) {
          if (array[i] < min) {
              minIndex = i;
              min = array[i];
          }
      }

      return minIndex;
  }

  var newFriendOutcome = newScore(newFriend['scores[]']); 
  var currentFriendOutcome = [];
  var differences = [];

  for(var i=0; i < friends.length;i++){
    currentFriendOutcome.push(newScore(friends[i]['scores[]']));
  }

  //FOR LOOP THAT TAKES DIFFERENCES BETWEEN CURRENT FRIEND AND NEW FRIEND RESULT//
  for (var i=0; i < currentFriendOutcome.length; i++){
    differences.push(totalDiff(newFriendOutcome, currentFriendOutcome[i]));
  }
  console.log("Calculating scores...");


  var minFriend = indexOfMin(differences);
  var matchFriend = friends[minFriend];
  console.log("Matching...");
  console.log(matchFriend);
  

  friends.push(newFriend);
  res.json(matchFriend);
});

module.exports = apirouter;


















// var friends = require("../data/friends.js");

// module.exports = function(app) {

//     app.get("/api/friends", function(req, res) {
//         res.json(friendsData);
//     });
    
//     app.post("/api/friends", function(req, res) {
//         var bestMatch = {
//             name: "",
//             photo: "",
//             friendDifference: Infinity
//         }

        

//         var userData = req.body;
//         var userScores = userData.scores;
        
//         var totalDifference;
        
//         for (let i = 0; i < friendsData.length; i++) {
//             const currentFriendScore = currentFriend.scores[j]
//             const surrentUserScore = userScores[j]
//             totalDifference += Math.abs(parseInt(currentFriendScore) - parseInt(currentUserScore));
//         }

//         if (totalDifference <= bestMatch.friendDifference) {
//             bestMatch.name = currentFriend.name;
//             bestMatch.photo = currentFriend.photo;
//             bestMatch.friendDifference = totalDifference
//         }

//         friendsData.push(userData);
//         res.json(bestMatch)
//     });
// };