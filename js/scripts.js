function Places(placeName, date) {
  this.placeName = placeName;
  this.date = date;
}

Places.prototype.nameDate = function() {
  return (this.placeName + " " + this.date);
}

var userInput = new Places("Hawaii", "2017");

alert(userInput.nameDate())
