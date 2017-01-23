function Places(placeName, date, landmarks) {
  this.placeName = placeName;
  this.date = date;
  this.landmarks = landmarks;
}

Places.prototype.nameDate = function() {
  return (this.placeName + " " + this.date);
}

var userLocations = function(string) {
  var landmarks = string.split(',');

  return landmarks;
};

var userInput = new Places("Hawaii", "2017", "Kuauai, shark cove, coffee plantation");

var tempStr = "Kuauai, shark cove, coffee plantation";
var tempArry = userLandmarks(tempStr);

tempArry.forEach(function(landmark)  {
  alert(landmark);
});

//
// alert(userInput.nameDate());
// alert(userInput.locations);
