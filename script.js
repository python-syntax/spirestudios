// Secret "spire" sequence trigger
let inputBuffer = "";
const secretCode = "/spire";

document.addEventListener('keydown', (e) => {
    inputBuffer += e.key.toLowerCase();
    
    // Keep buffer short
    if (inputBuffer.length > 10) {
        inputBuffer = inputBuffer.substring(1);
    }

    // Check for the secret word
    if (inputBuffer.includes(secretCode)) {
        window.location.href = "devpage.html";
    }
});

// Also keep the subtle footer link for convenience
document.getElementById("dev-trigger").addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "devpage.html";
});

const favicon = document.getElementById('favicon');
        function setFavicon() {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                favicon.href = 'spire_light.png';
            } else {
                favicon.href = 'spire_dark.png';
            }
        }
        setFavicon();
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);