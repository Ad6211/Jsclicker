let clicks = Number(localStorage.getItem("clicks")) || 0;

document.getElementById("compteur").textContent = clicks;

function clickbtn() {
    clicks++;
    document.getElementById("compteur").textContent = clicks;
    localStorage.setItem("clicks", clicks);
}
function reset() (
    localStorage.setItem("clicks", 0);
    document.getElementById("compteur").textContent = 0;
)