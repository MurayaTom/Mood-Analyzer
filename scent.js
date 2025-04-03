let scentData = [];

function addScent() {
    let scent = document.getElementById("scent").value.trim();
    let feeling = document.getElementById("feeling").value.trim();
    
    if (scent && feeling) {
        let moodScore = prompt(`On a scale of 0-10, how did '${scent}' make you feel?`);
        moodScore = parseInt(moodScore);
        
        if (isNaN(moodScore) || moodScore < 0 || moodScore > 10) {
            alert("Please enter a valid mood score between 0 and 10.");
            return;
        }

        let scentEntry = { scent, feeling, moodScore };
        scentData.push(scentEntry);
        document.getElementById("scent").value = "";
        document.getElementById("feeling").value = "";
    } else {
        alert("Please enter both scent and feeling.");
    }
}

function analyzeMoods() {
    if (scentData.length === 0) {
        alert("No data to analyze.");
        return;
    }

    let totalScore = 0, bestScent = "", worstScent = "";
    let highestScore = -1, lowestScore = 11;
    
    scentData.forEach(entry => {
        totalScore += entry.moodScore;
        if (entry.moodScore > highestScore) {
            highestScore = entry.moodScore;
            bestScent = entry.scent;
        }
        if (entry.moodScore < lowestScore) {
            lowestScore = entry.moodScore;
            worstScent = entry.scent;
        }
    });
    
    let average = (totalScore / scentData.length).toFixed(1);
    let analysis = { average, bestScent, worstScent };
    displayResults(analysis);
}

function displayResults(analysis) {
    document.getElementById("results").innerHTML = 
        `<p><strong>Average Mood Score:</strong> ${analysis.average}</p>
         <p><strong>Best Scent:</strong> ${analysis.bestScent}</p>
         <p><strong>Worst Scent:</strong> ${analysis.worstScent}</p>`;
}
