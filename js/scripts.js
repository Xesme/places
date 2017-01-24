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

    // $("ul#list-places").append("<li>" + newPlace.nameDate() + "</li>");
    //
    // for (var index = 0; index < newPlace.landmarks.length; index += 1 ) {
    //   $("ol#output-landmarks").append("<li>" + newPlace.landmarks[index] + "</li>");
    // }
    //
    // $(".output-box-hid").append(newPlace.tips);


    $(".output-box-hid").append("<h2>" + newPlace.nameDate() + "</h2>");


    $(".output-box-hid").append("<ol></ol>");


    for (var index = 0; index < newPlace.landmarks.length; index += 1 ) {
      $(".output-box-hid").children().last().append("<li>" + newPlace.landmarks[index] + "</li>");
    }

    $(".output-box-hid").children().last().append("<br>" + "<li>Tips: <br>" + inputTip + "</li>" + "<br>");

    $(".output-box-hid").children().last().children().hide();

    $(".output-box-hid h2:last-of-type").click(function() {
      $(this).next("ol").children("li").toggle();
      // alert("this toggle doe");
    });

  });

  // $(".output-box").click(function() {
  //   $(".output-box-hid").toggle();
  // });



});
