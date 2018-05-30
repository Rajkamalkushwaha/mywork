function eraseCache(){
  window.location = window.location.href+'?eraseCache=true';
}
$(document).ready(function(){
   $.get( "data.json", function raj( shopSetting ) {
	
	       var counter=0,                                                            
           dt = new Date(),hrs=dt.getHours(), m = dt.getMonth(),d = dt.getDate(),y = dt.getFullYear(),currentdate = y+ '-' + 0+(m + 1) + '-' + d,
	       i,j=0,weekIndex='',finalDate='',getWeekend=[],weekends=[],totalDate=[];
	   
	   var Data={
        	blacklistDates:shopSetting.dates,
  	        active:shopSetting.setting.is_active,
  	        require:shopSetting.setting.date_require,
  	        message:shopSetting.setting.date_label,
  	        cTime:shopSetting.setting.cut_off,
            minDays:parseInt(shopSetting.setting.minimum_day)+1,
  	        maxDays:parseInt(shopSetting.setting.maximum_day)-parseInt(shopSetting.setting.minimum_day),
	        weekArray:shopSetting.setting.week.split(','),
  	        weekdays:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        }; 
 
       Data.minDays = hrs >= Data.cTime ? Data.minDays+1 : Data.minDays;

       Data.totalDays=getThreeMonthDates();
       Data.disableWeekends=getWeekendsIndex();
       Data.totalWeekends=getWeekends(Data.disableWeekends);
       Data.totalholliday=Data.blacklistDates.concat(Data.totalWeekends);//join total weekends and total holidays
       Data.minimumDate= getMinMaxDate(Data.minDays);
       Data.maximumDate= getMinMaxDate(Data.maxDays);
 
   if(Data.active==1)
      {
        if(Data.require==1)
          {
              //document.getElementById("spice_delivery_date").required = true;

       }
	

       
 
     function DisableBlacklistDates(date) {
         var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
          return [Data.totalholliday.indexOf(string) == -1];
        }
       
	   $('#message').text(Data.message);
       $('#filter-date').datepicker({
            minDate: new Date(Data.minimumDate),
            maxDate:new Date(Data.maximumDate),
            disabledWeekDays:Data.disableWeekends,
            beforeShowDay: DisableBlacklistDates, 
            dateFormat:'MM dd,yy',
          });
     }
     else {

      $('.spice_odd_cart_attribute').html('');
     }


///////////ajax for get setting
function getSetting()
{

    var host=window.location.host;

    if(host=='')
    {
      onException();
    }
    var tmp_res=$.ajax({

        type:'get',
        url:"https://localhost/orderduedate/public/settings/"+host,
        dataType: 'JSON',
        async: false,
        error:function(err){

            onException();


        },
        success: function(data) {
         },
    }).responseText;
    return tmp_res;

}

<!--------------------------------------------------------------------------------------------->
 function getWeekendDate(c,d){                                              //find all weekends
    for (i = 0; i < c.length; i++ ) {
       for (j = 0; j < d.length; j++) {
              weekIndex = c[i].slice(0,1);
             if( weekIndex == d[j] ) {
               getWeekend.push(c[i].slice(2));
            }
         }
      }

	return getWeekend;
  }
<!--------------------------------------------------------------------------------------------->
 function arr_diff (a1, a2) {                        //check hide week days
    var a = [], diff = [];
	  for (i = 0; i < a1.length; i++) {
      a[a1[i]] = true;
      }
      for (i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
          delete a[a2[i]];
        } else {
            a[a2[i]] = true;
      }
    }
     for (var k in a) {
        diff.push(k);
     }
     return diff;                               //return hide week days
 }

<!--------------------------------------------------------------------------------------------->
//Find dates
  function getThreeMonthDates()
    {                                                    //find Total 90 dates
     for(i=0;i<90;i++){
      var TDays=new Date(y, m, d + i);
      dd=TDays.getDate()<10?"0"+TDays.getDate():TDays.getDate();
	  totalDate.push(TDays.getDay()+' '+TDays.getFullYear()+'-' +0+(TDays.getMonth()+1) + '-' + dd);
  }
  return totalDate;
 }


 <!--------------------------------------------------------------------------------------------->
function getWeekendsIndex()
{                                                          //find weekend days
  var diff = arr_diff( Data.weekArray , Data.weekdays ) ;
    for(i=0 ; i<diff.length ; i++) {
        weekends.push(Data.weekdays.indexOf(diff[i])) ;   //index value hide week
   }
   return weekends;
}
function getWeekends(weekends)
{
  totalWeekend=getWeekendDate(Data.totalDays, weekends);
  return totalWeekend;
  //return totalWeekend;
}      //find total weekends
<!--------------------------------------------------------------------------------------------->
//find maximum  date
function getMinMaxDate(days)
{
  Data.totalDays.splice(0, counter-1);
  for(i=0 ; i<days ; i++ ) {
     var date=Data.totalDays[i].slice(2);

         if( Data.totalholliday.indexOf(date) > -1 ){
           //console.log(totalDays[i]);
           days++;
       }else{

         finalDate=date;
       }
       counter++;
   }
   return finalDate;
}



<!--------------------------------------------------------------------------------------------->

   function IsEmpty(){                                //check input field empty or not if value is require
		var datevalue=$('.form-control').val();
		if(require=1){
          if(datevalue === ""){
			 $('#errorval').text("This field is required.");

			 return false;
	   }
	}
          return true;
  }
  function onException()
  {
    $('.spice_odd_cart_attribute').html('');
    return false;
    die;
   }

 });
});
