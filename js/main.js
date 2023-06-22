let playerGameScore = 0
let computerGameScore = 0

const playerGameScoreElement = document.getElementById("playerGameScore");
const computerGameScoreElement = document.getElementById("computerGameScore")


let leeftijd = 0;
let spelerNaam = "Mark";

let resetButton = document.body.querySelector(".reset-button");
resetButton.addEventListener('click', resetGame);
   
if(oldEnough) {
    console.log("Welkom:je bent oud genoeg om het hoger lager spel te spelen");
    gameLaden();
} else {
    console.log("helaas: je bent nog te jong je moet minstens 18 jaar zijn op te kunnen spelen");
}

function gameLaden() {
    setName();// Vraag de naam van de speler
    const oldEnough = getAge();//leeftijfverificatie
    // het genereren van een willekeurige nummer die door computer in het spel wordt gegooid
    const randomNumberFromComputer = randomBetweenMinAndMax(2, 12);

    // start
    let higherOrLowerQuestionResponse = prompt(
        `Hallo! ${spelerNaam}
    
Laten we spelen, We gaan met 2 dobbelstenen spelen.
De computer heeft gegooid: ${randomNumberFromComputer}


Denk je dat je hoger of lager gaat gooien?
Vul 'Hoger' of 'Lager' in:
    `)

    // controleer of het gebruik van invoer correct is (hoger of lager) en zo niet, blijf vragen.
    while(higherOrLowerQuestionResponse.toLowerCase() !== 'lager' && higherOrLowerQuestionResponse.toLowerCase() !== 'hoger') {
        higherOrLowerQuestionResponse = prompt(`Onjuiste invoer ${higherOrLowerQuestionResponse},fout vul hoger of lager in te vullen`)
    }

    // het genereren van een willekeurig nummer voor de speler in het spel
    const randomNumberFromPlayer = randomBetweenMinAndMax(2, 12);

    // als het aantal hetzelfde is, heeft de speler verloren, is de ronde voorbij.
    if (randomNumberFromPlayer === randomNumberFromComputer) {
        playerHasLostWithDraw();
    }

    if (randomNumberFromPlayer > randomNumberFromComputer) {
        if (higherOrLowerQuestionResponse === 'hoger') {
            playerHasWon(randomNumberFromPlayer)
        } else {
            playerHasLost(randomNumberFromPlayer)
        }
    }

    if (randomNumberFromPlayer < randomNumberFromComputer) {
        if (higherOrLowerQuestionResponse === 'lager') {
            playerHasWon(randomNumberFromPlayer)
        } else {
            playerHasLost(randomNumberFromPlayer)
        }
    }
}

function getAge() {
    leeftijd = prompt(" Wat is jouw leeftijd?", 18);

    if (leeftijd >= 18) {
        alert('Je bent oud genoeg om het hogere lagere spel te spelen')
        return true;
        
    } else  if (leeftijd < 18) {
        alert('Je bent te jong om hoger lager te spelen.Kom later terug als je 18 jaar oud bent')

        return false();
    }
}


function setName() {
    spelerNaam = prompt("Wat is jouw naam?", "Mark");
    console.log("speler naam is " + spelerNaam);
}

/**
 * Genereert een willekeurig getal tussen min en max 
 */
 function randomBetweenMinAndMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 
De speler heeft verloren met een gelijkspel, de computer krijgt 1 punt
 */
function playerHasLostWithDraw() {
    alert("helaas, je hebt hetzelfde nummer gegooid als de computer, helaas heb je verloren")
    computerGameScore++;
    computerGameScoreElement.innerText = computerGameScore.toString();
}

/**
 * 
De speler heeft  gewonnen, de speler krijgt 1 punt
 */
function playerHasWon(randomNumberFromPlayer) {
    alert(`Juist! jij hebt gegooid ${randomNumberFromPlayer}. Je hebt 1 punt verdiend`)
    playerGameScore++;
    playerGameScoreElement.innerText = playerGameScore.toString();
}

/**
 * De speler heeft a verloren, de computer krijgt 1 punt
 */
function playerHasLost(randomNumberFromPlayer) {
    alert(`helaas! jij hebt gegooid ${randomNumberFromPlayer},  helaas heb je verloren `)
    computerGameScore++;
    computerGameScoreElement.innerText = computerGameScore.toString();
}


function resetGame() {
    alert('Je hebt op de resetknop geklikt. Veel plezier met de nieuwe ronde');
    
    leeftijd = 0;
    spelerNaam = "mark";
    let playerGameScore = 0
    let computerGameScore = 0

    gameLaden();
}