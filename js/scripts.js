$(document).ready(function() {
  var age = $("#age").val();
  var food = $("input:radio[name=food]:checked").val();
  var date = $("#date").val();

  $("#userQuiz").submit(function() {
    event.preventDefault();

    if (age < 25 && date === "walk") {
      $("#result").text("Miley Cyrus");
      $(".result").show();
    }
    else {
      alert("We have a problem.")
    }
  });
});


// if(age < 25) {
//   $("#result").text("Miley Cyrus");
//   $(".result").show();
// }
// if(age >= 25 && age <= 50) {
//   $("#result").text("Batman");
//   $(".result").show();
// }
// if(age >= 51) {
//   $("#result").text("Catwoman");
//   $(".result").show();
// }
//
// if(food === "italian") {
//   $("#result").text("Miley Cyrus");
//   $(".result").show();
// }
// if(food === "italian") {
//   $("#result").text("Batman");
//   $(".result").show();
// }
// if(food === "italian") {
//   $("#result").text("Catwoman");
//   $(".result").show();
// }
// if(food === "thai") {
//   $("#result").text("Marge Simpson");
//   $(".result").show();
// }
// if(food === "thai") {
//   $("#result").text("Jessica Biel");
//   $(".result").show();
// }
// if(food === "ithai") {
//   $("#result").text("Meryl");
//   $(".result").show();
// }
//
// if(date === "dinner") {
//   $("#result").text("Angelina");
//   $(".result").show();
// }
// if(food === "movie") {
//   $("#result").text("Courtney");
//   $(".result").show();
// }
// if(food === "walk") {
//   $("#result").text("Anna");
//   $(".result").show();
