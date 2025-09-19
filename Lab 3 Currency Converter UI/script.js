function convert() {
    var usd = document.getElementById("usd").value;
    var bgn = usd * 1.655;
    document.getElementById("bgn").value = bgn.toFixed(2);
}