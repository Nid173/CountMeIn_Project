var days =["SUN","MON","TUE","WED","THU","FRI","SAT"];
var months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function DashCalendar(){
  var dashsection = document.getElementById("dashBoard");
  var date = new Date();
  dashsection.children[0].innerHTML=months[date.getMonth()];
  console.log(months[date.getMonth()]);
}
