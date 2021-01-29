
$(document).ready(function () {
    // todays time
    var today = moment().format("YYYY MMM DDD");
    // hours 
    var nowTime = moment().format("H");
    var Hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
    //header time
    var $todayHeader = $("#currentDay");
    $todayHeader.text(today);
    
    // //storing the todos 
    var todos = JSON.parse(localStorage.getItem("todos"));
    if (todos !== null) {
        Usertext = todos;
    } else {
        Usertext = newArray(9);
    }
    // updating userInput
    $(document).on("click","i", function(event){
        event.preventDefault();
        Usertext = localStorage.getItem("todos")
          
       $(".time-block").each(function() {
         nowTime = $(this).attr("input");
        todos = localStorage.getItem(todos);
         $(this).find("id").val(todos);
           });
    });
    //time loop
   for (var i=0; i < Hours.length; i++) {

    //updating the current time with change of backgroud color
    function updatetime(){
        if (Hours < today){
            $(Hours[i]).attr("#.past");
            
        } else if (Hours > today){
        $( Hours[i]).attr("#.future");
        } else {
            if ( Hours[i] == today){
                $(Hours[i].attr("#.present"))

            }
        }
       // console.log(updatetime)
    }
   updatetime();
}

//savedbtn using "this"
$(".savedBtn").on("click", function(event) {
    event.preventDefault();
     savedBtn =  $(this).parent().attr("id");
     todos = $(this).parent().find("input").val();
    localStorage.setItem(savedBtn, todos);
    //console.log(savedBtn)
    });
  

});