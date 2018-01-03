
var appointmentsArr = new Array(); // Appointment array

// object literal notation to create your structures
appointmentsArr.push({ name1: 'nidal', purposeIndex: '1' ,infoContent:'hey im info for nidal'});
appointmentsArr.push({ name1: 'adham', purposeIndex: '0' ,infoContent:'hey im info for adham'});
appointmentsArr.push({ name1: 'UnplannedTime', purposeIndex: '0' ,infoContent:'hey im info for adham'});
appointmentsArr.push({ name1: 'adham', purposeIndex: '0' ,infoContent:'hey im info for adham'});
appointmentsArr.push({ name1: 'Break', purposeIndex: '0' ,infoContent:'hey im info for adham'});
appointmentsArr.push({ name1: 'adham', purposeIndex: '0' ,infoContent:'hey im info for adham'});
appointmentsArr.push({ name1: 'UnplannedTime'});
appointmentsArr.push({ name1: 'Break'});

var purposeArr = new Array(); // Purpose array

// object literal notation to create your structures
purposeArr.push({ purposeName: 'Kill', time: '1Hour' });
purposeArr.push({ purposeName: 'ghi', time: '30Minutes' });





function addTableRow(){
	
	for (var i = 0; i < appointmentsArr.length; i++) {
  // use array[i] here 
  //check if syntax
  if(appointmentsArr[i].name1=='UnplannedTime'){
	  var code2Append = 	  `<tr>
							   <td  class="alert-warning"> 
							   		 &nbsp;<span class="glyphicon glyphicon-warning-sign alert-warning"></span> 
							   </td>
							   <td class="alert-warning"> UnplannedTime </td>
							   <td class="alert-warning">30Minutes </td>
							   <td Colspan="" class="alert-warning"><button type="button" class="btn btn-success disabled">Mark as break</button>
							   <button type="button" class="btn btn-primary disabled">Set appointment</button> </td>
							   <td class="alert-warning"> </td>
							  </tr>`;
  }else if(appointmentsArr[i].name1=="Break"){
	  var code2Append = `<tr>
							   <td  class="alert-success"> 
							   		 &nbsp;<span class="glyphicon glyphicon-ok alert-success"></span>
							   </td>
							   <td class="alert-success"> Break </td>
							   <td class="alert-success">30Minutes </td>
							   <td class="alert-success"> </td>
							   <td class="alert-success">&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-remove alert-success"></span></td>
							  </tr>`;;  
  }else{
  var code2Append = 			`<tr >
							     <th scope="row" ><div  class="toggle"></div></th>
							     <td>`+ appointmentsArr[i].name1+  `</td>
							     <td>`+ purposeArr[ appointmentsArr[i].purposeIndex ].time +`</td>
							     <td>`+ purposeArr[appointmentsArr[i].purposeIndex].purposeName +`</td>
							     <td><button type="button" class="btn" disabled>
								 <span class="glyphicon glyphicon-cog"></span><span class="caret"></span>
								 </button>						
								 </td>
							     </tr>
							     <tr  scope="row" id=info`+i+` class="showContent hiddenStyle"><td Colspan="5">
								 	Info: `+ appointmentsArr[i].infoContent+`
							     </td></tr><tr></tr>`;
	}
	if(i == appointmentsArr.length){
		
	}		
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
    index: ValidateDay(date.getDay())-3,
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
      elem.className+=" col-xs-offset-2";
    dashsection.children[1].children[0].appendChild(elem);
  }
};

$(document).ready(function(){
  $('.showContent').hide();
  $('.toggle').on("click", function(e){
    $(this).toggleClass("expanded");
	$(this).closest('tr').next('tr').slideToggle();
  });
});


