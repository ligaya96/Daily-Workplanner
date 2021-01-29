
$(document).ready(function () {
    // todays time
    var today = moment().format("YYYY MMM DDD");
    // hours 
    var hours = moment().format("H")
    var ampm = "";

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

    //rows and colums to the HTML
    // var $scheduleDiv = $("planner-container")
    //$scheduleDiv.empty();

    // stored times  

    // saved button
    $(".savedbtn").on("click", function () {
        console.log("text")
    })
    //local drive










});