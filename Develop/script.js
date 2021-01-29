
$(document).ready(function () {
    // todays time
    var today = moment().format("YYYY MMM DDD");
    // hours 
    var Hours24 = moment().format("H");
    var Hours12 = moment().format("h");
    var ampm = "";
    var displayHour = 0;
    var Hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
    //header time
    var $todayHeader = $("#currentDay");
    $todayHeader.text(today);

    //storing the todos 
    var todos = JSON.parse(localStorage.getItem("todos"));
    if (todos !== null) {
        Usertext = todos;
    } else {
        Usertext = newArray(9);
    }

    // calling into planner-container
    var $scheduleDiv = $("planner-container");
    $scheduleDiv.empty();
    //calling hours
   for (var hour = 9; hour <= 17; hour++) {
        var index = hour - 9;

        var $timeElementSpn = $("<span>");
        $timeElementSpn.attr("class", "timeElement");
        // display the time
        if (hour > 12) {
            displayHour = hour - 12;
            ampm = "pm";
        } else {
            displayHour = hour;
            ampm = "am";
        }
        $timeElementSpn.text("${displayhour} ${ampm}")
    }

    //building the rows
    var $dailyplanspn = $("<input>");
    $dailyplanspn.attr("id,inpute")

    // stored times  

    // saved button
    $(".savedbtn").on("click", function (e) {
        //console.log("text")
        var savedbtn = $(this)
        var key = savedbtn.parent().attr("id")
        var value = savedbtn.parent().children("text")
        localStorage.setItem(key, value)
        //console.log(key)
    })
    //local drive



});