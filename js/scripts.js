function renderTime(){

    var mydate = new Date();
    var year = mydate.getYear();
      if(year<1000){
        year += 1900
      } //need this incase there is an error with date

    var day = mydate.getDay();
    var month = mydate.getMonth();
    var dayOfTheMonth = mydate.getDate();
    var dayArray = new Array("Sunday","Monday","Tuesday","Wednesday"
    ,"Thursday","Friday","Saturday");
    var monthArray = new Array("Jan","Feb","Mar","Apr","May","June"
    ,"July","Aug","Sept","Oct","Nov","Dec");
    //-----------------------------------------------------------------------

    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    /*var second = currentTime.getSeconds();*/
      if(hour == 24){
        hour = 0;
      }else if(hour > 12){
        hour = hour - 0;
      }// ????????
      if(hour < 10){
        hour = "0"+ hour;
      }// adds 0 infront if hours is less then 10;
      if(minute<10){
        minute = "0"+minute;
      }//^
      /*if(second<10){
        second = "0"+second;
      }//^*/
      var myClock = document.getElementById("clockDisplay");
      var clockTime = "\n" + hour + ":" + minute;
      var clockDate = dayArray[day] + " " + dayOfTheMonth + " " + monthArray[month];
      myClock.textContent = clockDate + clockTime;
      myClock.innerText = clockDate + clockTime;

      setTimeout("renderTime()",1000);
      //function will trigger every 1 second.

}//end renderTime
