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

  //This grabs Unix Time based on the users IP from an API via a JSON GET; Browse the below URL for more detail.
  $.getJSON('https://worldtimeapi.org/api/ip', function(data){

  //getting the value from the "unixtime" JSON object hosted from the API
  var text = `${data.unixtime}`
  var ut = text;

  //Parse returned string to int
  var unixTime = parseInt(ut);
  var date = new Date(unixTime * 1000);
  var hour = date.getHours();
  var minute = "0" + date.getMinutes();

  //Uncomment below for seconds. **NOTE** This is updated once every 5 seconds due to limitaions of API requests.
  var second = "0" + date.getSeconds();
   
  //Not needed
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
    }
    if(second<10){
      second = "0"+second;
    } 
  
    var myClock = document.getElementById("clockDisplay");
    var clockTime =  "\n" + hour + ':' + minute.substr(-2);
    var clockDate = dayArray[day] + " " + dayOfTheMonth + " " + monthArray[month];
    myClock.textContent = clockDate + clockTime;
    myClock.innerText = clockDate + clockTime;

    setTimeout(renderTime, 5000);
    //function will trigger every 5 seconds.

})};//end renderTime