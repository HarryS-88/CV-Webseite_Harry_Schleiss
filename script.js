function toggleDarkMode() {
    document.body.classList.toggle("darkmode");

    let button = document.getElementById("mode-button");
    if (document.body.classList.contains("darkmode")) {
        button.innerHTML = "Light Mode";
    } else {
        button.innerHTML = "Dark Mode";
    }
}

let startTime;
function startReactionTest() {
    const box = document.getElementById("reaction-box");
    const result = document.getElementById("reaction-result");

    result.innerHTML = "Warte auf Grün...👀";
    box.style.display = "block";
    box.style.backgroundColor = "#475569";

    let randomTime = Math.random()*3000 +2000; // 2-5 Sekunden

    setTimeout(function() {
        box.style.display = "block";
        box.style.backgroundColor = "green";
        result.innerHTML = "Klick jetzt!👆";

        startTime = Date.now();
    }, randomTime);
}

document.getElementById("reaction-box").onclick = function() {
    if (this.style.backgroundColor !== "green") {
        return;
    }

    let endTime = Date.now();
    let reactionTime = (endTime - startTime) / 1000; // in Sekunden

    document.getElementById("reaction-result").innerHTML = "🏆Deine Reaktionszeit: " + reactionTime.toFixed(3) + " Sekunden💪";

    this.style.display = "none";
} 
