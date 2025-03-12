let scentData = [];

function addScent(scent, feeling) {
    scentData.push({ scent, feeling });
}

function assignMoodScore(scentEntry) {
    const { feeling } = scentEntry;
    if (feeling === "calm") return 7;
    if (feeling === "energized") return 9;
    if (feeling === "gross") return 3;
    if (feeling === "happy") return 10;
    if (feeling === "sad") return 4;
    if (feeling === "relaxed") return 9;
    if (feeling === "tense") return 3;
    if (feeling === "worried") return 1;
    if (feeling === "angry") return 10;
    if (feeling === "sick") return 2;
    if (feeling === "disgusted") return 3;
    if (feeling === "nostalgia") return 6;
    if (feeling === "surprised") return 5;
    return 0; 
}

function analyzeMoods() {
    let averageScore = 0;
    let bestScent = '';
    let worstScent = '';
    let bestScore = 10;
    let worstScore = 0;
}

scentData.forEach(entry => {
    entry.score = assignMoodScore(entry);
    totalScore += entry.score;
    if (entry.score > bestScore) {
        bestScore = entry.score;
        bestScent = entry.scent;
    }
    if (entry.score < worstScore) {
        worstScore = entry.score;
        worstScent = entry.scent;
    }
});

let average = (totalScore / scentData.length).toFixed(1);
return { average, bestScent, worstScent };


function displayResults(analysis) {
document.getElementById("result").innerHTML = `
    <p>Average Mood Score: ${analysis.average}</p>
    <p>Best Scent: ${analysis.bestScent}</p>
    <p>Worst Scent: ${analysis.worstScent}</p>
`;
}

function submitScent() {
let scent = document.getElementById("scent").value;
let feeling = document.getElementById("feeling").value;
if (scent && feeling) {
    addScent(scent, feeling);
    document.getElementById("scent").value = "";
    document.getElementById("feeling").value = "";
} else {
    alert("Please enter both scent and feeling.");
}
}

function analyzeMoodsAndDisplay() {
let analysis = analyzeMoods();
displayResults(analysis);
}
