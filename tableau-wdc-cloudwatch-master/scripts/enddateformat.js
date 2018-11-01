window.onload = function() {
 
var el = document.getElementById("endtime")

var today = new Date();
 
var year = today.getFullYear();
var day = ("0" + (today.getDate())).slice(-2);
var month = ("0" +(today.getMonth() + 1)).slice(-2);
var minutes = today.getMinutes();
var hour = today.getHours();


el.value = year+"-"+month+"-"+day
  
  
};
