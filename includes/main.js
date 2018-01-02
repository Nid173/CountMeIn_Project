
function ValidateDay(d){
  if(d-3 < 0){
    while (d>0) d--;
    d=6-d;
  }
  console.log(d);
  return d;
};
function ValidateDayUp(d){
  if(d+1==7){
    d=-1;
  }
  return d;
};

function DashCalendar(){
  var days =["SUN","MON","TUE","WED","THU","FRI","SAT"];
  var months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dashsection = document.getElementById("dashBoard");
  var date = new Date();
  dashsection.children[0].innerHTML=months[date.getMonth()];
  console.log(months[date.getMonth()]);
  var week = {
    index: ValidateDay(date.getDay()),
    day: days[0],
    date: date.getDate()-3
  };
  week.day=days[week.index];
  console.log(week.date+" "+week.day);
  console.log(dashsection.children[1].children[0].tagName);

  for(var i=0;i<7;i++){

    var elem = document.createElement('div');
    elem.className = "col-xs-1";
    elem.innerHTML=days[week.index];
        week.index = ValidateDayUp(week.index)+1;
    var insideelem = document.createElement('article');
    insideelem.className ="dateCircle";
    var today = week.date+i;
    if( today == date.getDate())
      insideelem.className +=" active";
    insideelem.innerHTML=today;
    elem.appendChild(insideelem);
    if(i==0)
      elem.className+=" col-md-offset-2";
    dashsection.children[1].children[0].appendChild(elem);
  }
};
