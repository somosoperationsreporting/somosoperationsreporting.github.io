const el = document.getElementById("endtime")

let today = new Date();

const year = today.getFullYear();
const day = today.getDate();
const month = today.getMonth() + 1;
const minutes = today.getMinutes();
const hour = today.getHours();

el.value = '${year}-${month}-${day}T${hour}:${minutes}'
