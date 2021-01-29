
$(document).ready(function () {
    // todays time
    var today = moment().format("YYYY MMM DDD");
    // hours 
    var nowTime = moment().format("H");
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
    // updating textarea
    //time loop
   for (var i=0; i < Hours.length; i++) {
    function updatetime(){
        if (Hours < today){
            $("#" + Hours[i]).attr("#.past");
            
        } else if (Hours > today){
        $("#" + Hours[i]).attr("#.future");
        } else {
            if ( Hours[i] == today){
                $("#"+ Hours[i].attr("#.present"))

            }
        }
        console.log(updatetime)
    }
   updatetime();
}

    // saved button
    $(".savedBtn").on("click", function(e) {
        //console.log("text")
        var savedbtn = $(this)
        var key = savedbtn.parent().attr("id")
        var value = savedbtn.parent().children("text")
        //SaveBTNlocal drive
        localStorage.setItem(key, value)
        //console.log(key)
    })



});