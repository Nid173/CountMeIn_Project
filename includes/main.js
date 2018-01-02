
var appointmentsArr = new Array(); // empty array

// object literal notation to create your structures
appointmentsArr.push({ name1: 'nidal', purposeIndex: '1' });
appointmentsArr.push({ name1: 'adham', purposeIndex: '0' });

var purposeArr = new Array(); // empty array

// object literal notation to create your structures
purposeArr.push({ purposeName: 'Kill', time: '1Hour' });
purposeArr.push({ purposeName: 'ghi', time: '30Minutes' });

// PLUS MINUS




function addTableRow(){
	
	for (var i = 0; i < appointmentsArr.length; i++) {
  // use array[i] here 
  var code2Append = 			`
  								<tr>
							     <th scope="row" ><div class="toggle"></div></th>
							     <div class="content">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
							     <td>`+appointmentsArr[i].name1+  `</td>
							     <td>`+ purposeArr[ appointmentsArr[i].purposeIndex ].time +`</td>
							     <td>`+ purposeArr[appointmentsArr[i].purposeIndex].purposeName +`</td>
							     </tr>`;		
	var mTbody = $('#tbody');
	mTbody.append(code2Append);
}
	
							
};

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

$(document).ready(function(){
  var $content = $(".content").hide();
  $(".toggle").on("click", function(e){
    $(this).toggleClass("expanded");
    $content.slideToggle();
  });
});


