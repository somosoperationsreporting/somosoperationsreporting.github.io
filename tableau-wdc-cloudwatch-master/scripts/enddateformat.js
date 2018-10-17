window.onload = function() {
 
var el = document.getElementById("endtime")

var today = new Date();

var year = today.getFullYear();
var day = today.getDate();
var month = today.getMonth() + 1;
var minutes = today.getMinutes();
var hour = today.getHours();

el.value = year+"-"+month+"-"+day+"T"+hour+":"+minutes
  
  
};
