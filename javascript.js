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

function calculate() {
    // Get the values of the selected options
    var multiplier = parseInt(document.getElementById("multiplier").value);
    var strength = parseInt(document.getElementById("strength").value);
    var evolve = parseInt(document.getElementById("evolve").value);
    var rank = parseInt(document.getElementById("rank").value);
  
    // Calculate the results using the given formulas
    var result1 = 1 * multiplier * strength * evolve * rank;
    var result2 = 60 * multiplier * strength * evolve * rank;
    var result3 = 3600 * multiplier * strength * evolve * rank;
    var result4 = 86400 * multiplier * strength * evolve * rank;
  
    // Display the results in the HTML
    document.getElementById("result1").innerHTML = result1.toLocaleString() + " Per Second";
    document.getElementById("result2").innerHTML = result2.toLocaleString() + " Per Minute";
    document.getElementById("result3").innerHTML = result3.toLocaleString() + " Per Hour";
    document.getElementById("result4").innerHTML = result4.toLocaleString() + " Per Day";
  }
  