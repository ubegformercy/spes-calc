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
  var magnitudes = ["", "K", "M", "B", "T", "Qd", "Qn", "Sx", "Sp", "Oc", "N", "Dc", "Ud", "Dd", "Td", "Qua", "Qui", "Sxd"];
  var magnitudeIndex = 0;
  while (num >= 1000 && magnitudeIndex < magnitudes.length - 1) {
    num /= 1000;
    magnitudeIndex++;
  }
  return num.toFixed(2) + " " + magnitudes[magnitudeIndex];
}

function calculate() {
  // Get the values of the selected options
  var multiplier = parseInt(document.getElementById("multiplier").value);
  var zone = parseInt(document.getElementById("zone").value);
  var evolve = parseInt(document.getElementById("evolve").value);
  var rank = parseInt(document.getElementById("rank").value);
  

  var wisp1 = parseInt(document.getElementById("wisp1").value);
  var wisp2 = parseInt(document.getElementById("wisp2").value);
  var wisp3 = parseInt(document.getElementById("wisp3").value);
var boost = parseInt(document.getElementById("boost").value);
  var wisp = wisp1 + wisp2 + wisp3
  if (wisp <= 0) {
    wisp = 1;
}
  
  // Calculate the results using the given formulas
  var result1 = 1 * multiplier * zone * rank * evolve *  wisp * boost;
  var result2 = 60 * multiplier * zone * rank * evolve *  wisp * boost;
  var result3 = 3600 * multiplier * zone * rank * evolve *  wisp * boost;
  var result4 = 86400 * multiplier * zone * rank * evolve *  wisp * boost;
  var result5 = 604800 * multiplier * zone * rank * evolve *  wisp * boost;

  // Format the results and display them in the HTML
  document.getElementById("result1").innerHTML = formatNumber(result1) + " Per Second";
  document.getElementById("result2").innerHTML = formatNumber(result2) + " Per Minute";
  document.getElementById("result3").innerHTML = formatNumber(result3) + " Per Hour";
  document.getElementById("result4").innerHTML = formatNumber(result4) + " Per Day";
  document.getElementById("result5").innerHTML = formatNumber(result5) + " Per Week"; // For the new per week result
}
