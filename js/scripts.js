// business logic
function Places(placeName, date, landmarks, tips) {
  this.placeName = placeName;
  this.date = date;
  this.landmarks = landmarks.split(',');
  this.tips = tips;
}

Places.prototype.nameDate = function() {
  return (this.placeName + " " + this.date);
}

// User Interface logic

$(document).ready(function(){
  $("#new-location").submit(function(event){
    event.preventDefault();

    var inputPlace = $("input#new-place").val();
    var inputDate = $("input#new-date").val();
    var inputLocation = $("input#new-landmark").val();
    var inputTip = $("textarea#new-tip").val();

    var newPlace = new Places(inputPlace, inputDate, inputLocation, inputTip);

    $("ul#list-places").append("<li>" + newPlace.nameDate() + "</li>");

    for (var index = 0; index < newPlace.landmarks.length; index += 1 ) {
      $("ol#output-landmarks").append("<li>" + newPlace.landmarks[index] + "</li>");
    }

    $(".output-box-hid").append(newPlace.tips);

  });
});
