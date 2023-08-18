

function calculatePowerTime() {
    const desiredPower = parseFloat(document.getElementById('desiredPower').value);
    const desiredPowerUnit = parseInt(document.getElementById('desiredPowerUnit').value);
    const currentPower = parseFloat(document.getElementById('currentPower').value);
    const currentPowerUnit = parseInt(document.getElementById('currentPowerUnit').value);
    const tickRate = parseFloat(document.getElementById('tickRate').value);
    const tickRateUnit = parseInt(document.getElementById('tickRateUnit').value);
  
    const timeInSeconds = ((desiredPower * Math.pow(1000, desiredPowerUnit)) - (currentPower * Math.pow(1000, currentPowerUnit))) / (tickRate * Math.pow(1000, tickRateUnit));
  
    const days = Math.floor(timeInSeconds / 86400);
    const hours = Math.floor((timeInSeconds % 86400) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.ceil(timeInSeconds % 60);
    
    document.getElementById('result').innerHTML = `${String(days).padStart(2, '0')} Days / ${String(hours).padStart(2, '0')} Hours / ${String(minutes).padStart(2, '0')} Minutes`;

  }

function calculateTokenTime() {
    var currentTokens = parseInt(document.getElementById("current_tokens").value);
    var desiredTokens = parseInt(document.getElementById("desired_tokens").value);
    var evolution = parseInt(document.getElementById("evolution").value);
    var timeInSeconds = Math.floor((desiredTokens - currentTokens) / evolution * 60);

    var days = Math.floor(timeInSeconds / (24 * 60 * 60));
    var hours = Math.floor((timeInSeconds % (24 * 60 * 60)) / (60 * 60));
    var minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);

    document.getElementById("results").innerHTML =  padZero(days) + " Days  / " + padZero(hours) + " Hours   / " + padZero(minutes) + " Minutes";
}

function padZero(num) {
    return (num < 10) ? "0" + num : num;
}

function formatNumber(num) {
  var magnitudes = ["", "K", "M", "B", "T", "Qd", "Qn", "Sx", "Sp", "Oc", "N", "Dc", "Ud", "Dd", "Td", "Qua", "Qid", "Sxd"];
  var magnitudeIndex = 0;
  while (num >= 1000 && magnitudeIndex < magnitudes.length - 1) {
    num /= 1000;
    magnitudeIndex++;
  }
  var formattedNum = num.toFixed(2);
  return (formattedNum % 1 === 0 ? num.toFixed(0) : formattedNum) + " " + magnitudes[magnitudeIndex];
}


function generateExponentialOptions() {
  var select = document.getElementById("multiplier");
  var exponent = 1;
  for (var i = 1; i <= 40; i++) {
    exponent *= 2;
    var option = document.createElement("option");
    option.value = exponent;
    option.text = formatNumber(exponent);
    select.appendChild(option);
  }
}



function calculate() {
  var multiplier = parseInt(document.getElementById("multiplier").value);
  var zone = parseInt(document.getElementById("zone").value);
  var evolve = parseInt(document.getElementById("evolve").value);
  var rank = parseInt(document.getElementById("rank").value);
  var wisp1 = parseFloat(document.getElementById("wisp1").value);
  var wisp2 = parseFloat(document.getElementById("wisp2").value);
  var wisp3 = parseFloat(document.getElementById("wisp3").value);
  var wisp4 = parseFloat(document.getElementById("wisp4").value);
  var boost = parseFloat(document.getElementById("boost").value);
  var upgrades = parseFloat(document.getElementById("upgrades").value);

  var wisp = (wisp1-1) + (wisp2-1) + (wisp3-1)+ (wisp4-1);

  if (wisp <= 1) {
    wisp = 1 + wisp;
  }

  var result1 = 1 * multiplier * zone * rank * evolve * wisp * boost * upgrades;
  var result2 = 60 * multiplier * zone * rank * evolve * wisp * boost * upgrades;
  var result3 = 3600 * multiplier * zone * rank * evolve * wisp * boost * upgrades;
  var result4 = 86400 * multiplier * zone * rank * evolve * wisp * boost * upgrades;
  var result5 = 604800 * multiplier * zone * rank * evolve * wisp * boost * upgrades;

  document.getElementById("result1").innerHTML = formatNumber(result1) + " Per Second";
  document.getElementById("result2").innerHTML = formatNumber(result2) + " Per Minute";
  document.getElementById("result3").innerHTML = formatNumber(result3) + " Per Hour";
  document.getElementById("result4").innerHTML = formatNumber(result4) + " Per Day";
  document.getElementById("result5").innerHTML = formatNumber(result5) + " Per Week";

  // Print the values used in calculations
 document.getElementById("baseMulti").innerHTML = "Base Multiplier: " + multiplier.toFixed(2);
  document.getElementById("zoneMulti").innerHTML = "Zone Multiplier: " + zone.toFixed(2);
  document.getElementById("rankMulti").innerHTML = "Rank Multiplier: " + rank.toFixed(2);
  document.getElementById("evolveMulti").innerHTML = "Evolve Multiplier: " + evolve.toFixed(2);
  document.getElementById("wisp1Multi").innerHTML = "Wisp 1 Multiplier: " + wisp1.toFixed(2);
  document.getElementById("wisp2Multi").innerHTML = "Wisp 2 Multiplier: " + wisp2.toFixed(2);
  document.getElementById("wisp3Multi").innerHTML = "Wisp 3 Multiplier: " + wisp3.toFixed(2);
  document.getElementById("wispMulti").innerHTML = "Total Wisp Multiplier: " + wisp.toFixed(2);
  document.getElementById("boostMulti").innerHTML = "Boost Multiplier: " + boost.toFixed(2);
}

generateExponentialOptions();
