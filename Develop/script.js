
$(document).ready(function () {
    // todays time
    var today = moment().format("YYYY MMM DDD");
    // hours 
    var hours = moment().format("H")
    var ampm = "";
    var displayHour = 0;

    //header time
    var $todayHeader = $("currentDay");
    $todayHeader.text(today);

    //storing the todos 
    var todos = JSON.parse(localStorage.getItem("todos"));
    if (todos !== null) {
        Usertext = todos;
    } else {
        Usertext = newArray(9);
    }

    // //calling into planner-container
    // var $scheduleDiv = $("planner-container");
    // $scheduleDiv.empty();
    // //calling hours
    // for (var hour = 9; hour <= 17; hour ++) {
    // var index = hour - 9; 

    //  //rows and colums to the HTML
    //  var $rowDiv = $("<div>");
    //  $rowDiv.addclass("row");
    //  $rowDiv.addclass("daterow");
    //   $rowDiv.attr("hour-index",hour);
          
    //  var $colDiv = $("<div>");
    //  $colDiv.addclass("col-md-2");    

    //   var $timeElementSpn = $("<span>");
    //   $timeElementSpn.attr("class","timeElement");
    //     // display the time
    //  if (hour > 12) {
    //     displayHour = hour - 12;
    //     ampm = "pm";
    // } else {
    //     displayHour=hour;
    //     ampm="am";
    // }
    // }
    //  $timeElementSpn.text("${displayhour} ${ampm}");
    //  $rowDiv.append($colDiv);
    //  $colDiv.append($timeElementSpn);

    //building the rows
   //var 
    // stored times  

    // saved button
    $(".savedbtn").on("click", function(e) {
        console.log("text")
        var savedbtn =$(this)
        var key = savedbtn.parent().attr("id")
        var value= savedbtn.parent().children("text")
        localStorage.setItem(key,value)
        console.log(key)
    })
    //local drive










});