function clock (){
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  
 
  if(hrs == 0){
    hrs = 12;
  }if(hrs > 12){
    hrs = hrs -12;
    period = "PM";
  }
 if (hrs <10){
   hrs = "0" + hrs;
 }
 if (mins < 10){
   mins = "0" + mins;
 }
 if (secs < 10){
   secs = "0" + secs;
 }

  let time = `${hrs}:${mins}:${secs}:${period}`;
  document.getElementById("clock").innerText = time;


  let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  if (dd === 1 || dd === 21 || dd === 31) {
    return dd + "st";
  } else if (dd === 2 || dd === 22) {
    return dd + "nd";
  } else if (dd === 3 || dd === 23) {
    return dd + "rd";
  } else {
    return dd + "th";
  }

  let wd = days[date.getDay()];
  let dd = date.getDate();
  let mm = months[date.getMonth()];
  let yyyy = date.getFullYear();
 
  let calendar = `${wd}, ${mm} ${dd} ${yyyy}`; 

  document.getElementById("date").innerText = calendar;
}
  setInterval(clock, 100);
  clock();
