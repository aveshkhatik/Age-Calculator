const dataPicker = document.getElementById("datePicker");
const choseDate = document.getElementById("choseDate");

const ageYear = document.getElementById("ageYear");
const ageMonts = document.getElementById("ageMonts");
const ageDays = document.getElementById("ageDays");
const ageHours = document.getElementById("ageHours");
const ageSeconds = document.getElementById("ageSeconds");
const ageMiliSeconds = document.getElementById("ageMiliSeconds");

dataPicker.addEventListener("change", function () {
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  var selectedDate = new Date(this.value);
  var DOB = selectedDate.toLocaleDateString("en-US", options);

  choseDate.innerHTML = "DOB : " + " " + DOB;
//   console.log("DOB : " + " " + DOB);

  var miliSecondsBtwDob = Date.parse(DOB);
  var miliSecondsBtwNow = Date.now();

  var agemiliSeconds = miliSecondsBtwNow - miliSecondsBtwDob;
  console.log(agemiliSeconds);

  var miliSeconds = agemiliSeconds;
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var month = day * 30;
  var year = day * 365;

  var years = Math.round(miliSeconds / year);
  var months = years * 12;
  var days = years * 365;
  var hours = Math.round(miliSeconds / hour);
  var seconds = Math.round(miliSeconds / second);

  ageYear.innerHTML = years;
  ageMonts.innerHTML = months;
  ageDays.innerHTML = days;
  ageHours.innerHTML = hours;
  ageSeconds.innerHTML = seconds;
  ageMiliSeconds.innerHTML = miliSeconds;

  document.querySelector(".age-calc").classList.add("expand");
});
