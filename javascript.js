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
    
    document.getElementById('result').innerHTML = `d:${String(days).padStart(2, '0')} h:${String(hours).padStart(2, '0')} m:${String(minutes).padStart(2, '0')} s:${String(seconds).padStart(2, '0')}`;
    
  }

function calculateTokenTime() {
    var currentTokens = parseInt(document.getElementById("current_tokens").value);
    var desiredTokens = parseInt(document.getElementById("desired_tokens").value);
    var evolution = parseInt(document.getElementById("evolution").value);
    var timeInSeconds = Math.floor((desiredTokens - currentTokens) / evolution * 60);

    var days = Math.floor(timeInSeconds / (24 * 60 * 60));
    var hours = Math.floor((timeInSeconds % (24 * 60 * 60)) / (60 * 60));
    var minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);

    document.getElementById("results").innerHTML = "d:" + padZero(days) + " h:" + padZero(hours) + " m:" + padZero(minutes);
}

function padZero(num) {
    return (num < 10) ? "0" + num : num;
}