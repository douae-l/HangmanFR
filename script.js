const wordList = [
    { word: "guitare", hint: "Instrument de musique à cordes." },
    { word: "oxygene", hint: "Gaz incolore et inodore essentiel à la vie." },
    { word: "montagne", hint: "Grande élévation naturelle de la surface de la terre." },
    { word: "peinture", hint: "Art créé en utilisant des couleurs sur une surface." },
    { word: "astronomie", hint: "L'étude des objets célestes et de l'espace." },
    { word: "football", hint: "Un sport populaire joué avec un ballon rond." },
    { word: "chocolat", hint: "Une friandise sucrée faite à partir de fèves de cacao." },
    { word: "papillon", hint: "Un insecte aux ailes colorées." },
    { word: "histoire", hint: "L'étude des événements passés." },
    { word: "pizza", hint: "Un plat savoureux composé d'une base ronde et aplatie avec des garnitures." },
    { word: "jazz", hint: "Un genre de musique caractérisé par l'improvisation." },
    { word: "camera", hint: "Un appareil utilisé pour capturer des images." },
    { word: "diamant", hint: "Une pierre précieuse connue pour sa brillance et sa dureté." },
    { word: "aventure", hint: "Une expérience inhabituelle et excitante." },
    { word: "science", hint: "L'étude systématique de la structure et du comportement du monde physique." },
    { word: "velo", hint: "Un véhicule à deux roues propulsé par des pédales." },
    { word: "soleil", hint: "L'étoile autour de laquelle la terre orbite." },
    { word: "cafe", hint: "Une boisson caféinée populaire." },
    { word: "danse", hint: "Bouger rythmiquement au son de la musique." },
    { word: "galaxie", hint: "Un vaste système d'étoiles, de gaz et de poussière." },
    { word: "verger", hint: "Un terrain planté d'arbres fruitiers." },
    { word: "volcan", hint: "Une montagne qui entre en éruption avec de la lave." },
    { word: "roman", hint: "Une longue histoire écrite." },
    { word: "sculpture", hint: "Art fait en taillant ou en façonnant des matériaux." },
    { word: "safari", hint: "Une expédition pour observer les animaux dans leur habitat naturel." },
    { word: "planete", hint: "Un corps céleste en orbite autour d'une étoile." },
    { word: "riviere", hint: "Un grand cours d'eau naturel." },
    { word: "concert", hint: "Une performance musicale en direct." },
    { word: "puzzle", hint: "Un jeu conçu pour tester l'ingéniosité." },
    { word: "pluie", hint: "Eau tombant des nuages." },
    { word: "telescope", hint: "Instrument utilisé pour voir des objets lointains." },
    { word: "internet", hint: "Réseau mondial connectant les ordinateurs." },
    { word: "sandwich", hint: "Nourriture composée de deux morceaux de pain avec une garniture." },
    { word: "pyramide", hint: "Structure monumentale à base carrée." },
    { word: "jungle", hint: "Terre recouverte d'une forêt dense." },
    { word: "aquarium", hint: "Un réservoir d'eau dans lequel on garde des poissons." },
    { word: "ballon", hint: "Un sac flexible gonflé de gaz." },
    { word: "cactus", hint: "Une plante épineuse originaire des climats chauds et arides." },
    { word: "desert", hint: "Une zone de paysage aride où il y a peu de précipitations." },
    { word: "eclipse", hint: "Obscurcissement de la lumière d'un corps céleste par le passage d'un autre." },
    { word: "fossile", hint: "Les restes ou l'empreinte d'un organisme préhistorique." },
    { word: "glacier", hint: "Une masse de glace se déplaçant lentement." },
    { word: "recolte", hint: "Le processus ou la période de collecte des cultures." },
    { word: "ile", hint: "Un morceau de terre entouré d'eau." },
    { word: "voyage", hint: "L'acte de se déplacer d'un endroit à un autre." },
    { word: "kangourou", hint: "Un grand marsupial herbivore avec une longue queue." },
    { word: "lanterne", hint: "Une lampe avec un boîtier transparent protégeant la flamme." },
    { word: "aimant", hint: "Un matériau ou un objet qui produit un champ magnétique." },
    { word: "nebuleuse", hint: "Un nuage de gaz et de poussière dans l'espace extra-atmosphérique." },
    { word: "ocean", hint: "Une très grande étendue de mer." },
    { word: "pingouin", hint: "Un oiseau de mer incapable de voler trouvé dans l'hémisphère sud." },
    { word: "ordinateur", hint: "Une machine électronique qui traite des données." },
    { word: "arc", hint: "Une partie d'une courbe, en particulier d'un cercle." },
    { word: "stade", hint: "Une arène sportive avec des gradins pour les spectateurs." },
    { word: "tonnerre", hint: "Un bruit fort de grondement entendu après un éclair." },
    { word: "parapluie", hint: "Un dispositif pour se protéger de la pluie." },
    { word: "vaccin", hint: "Une substance utilisée pour stimuler la production d'anticorps." },
    { word: "chuchoter", hint: "Parler très doucement en utilisant son souffle." },
    { word: "xylophone", hint: "Un instrument de musique joué en frappant une rangée de barres en bois." },
    { word: "yacht", hint: "Un bateau à voile de taille moyenne." },
    { word: "architecte", hint: "Une personne qui conçoit des bâtiments." },
    { word: "biographie", hint: "Un récit de la vie de quelqu'un écrit par quelqu'un d'autre." },
    { word: "calendrier", hint: "Un tableau montrant les jours, semaines et mois d'une année." },
    { word: "dialogue", hint: "Conversation entre deux ou plusieurs personnes." },
    { word: "ecologie", hint: "La branche de la biologie qui traite des relations des organismes." },
    { word: "festival", hint: "Un jour ou une période de célébration." },
    { word: "gravite", hint: "La force qui attire un corps vers le centre de la terre." },
    { word: "horizon", hint: "La ligne où la surface de la terre et le ciel semblent se rencontrer." },
    { word: "illusion", hint: "Une fausse idée ou croyance." },
    { word: "bijoux", hint: "Ornements personnels, tels que colliers, bagues ou bracelets." },
    { word: "royaume", hint: "Un pays ou un territoire dirigé par un roi ou une reine." },
    { word: "bibliotheque", hint: "Un bâtiment contenant des collections de livres." },
    { word: "musee", hint: "Un bâtiment où sont exposés des objets d'intérêt historique." },
    { word: "nature", hint: "Les phénomènes du monde physique collectivement." },
    { word: "oasis", hint: "Un endroit fertile dans un désert où l'on trouve de l'eau." },
    { word: "paradis", hint: "Un lieu ou un état idéal ou idyllique." },
    { word: "quartz", hint: "Un minéral dur blanc ou incolore." },
    { word: "robot", hint: "Une machine capable d'effectuer une série d'actions complexes." },
    { word: "ombre", hint: "Une zone sombre produite par un corps s'interposant devant la lumière." },
    { word: "theatre", hint: "Un bâtiment où sont données des pièces de théâtre." },
    { word: "univers", hint: "Toute la matière et l'espace existants considérés comme un tout." },
    { word: "village", hint: "Un groupe de maisons, plus petit qu'une ville." },
    { word: "cascade", hint: "Une chute d'eau tombant d'une hauteur." },
    { word: "yaourt", hint: "Un aliment semi-solide préparé à partir de lait fermenté." },
    { word: "brise", hint: "Un vent doux." },
    { word: "nuage", hint: "Une masse visible de vapeur d'eau condensée." },
    { word: "aube", hint: "La première apparition de la lumière dans le ciel avant le lever du soleil." }
];

const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".wrong-guesses");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img"); // Not used anymore
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again-btn");
const hangmanParts = document.querySelectorAll(".body-part");
const themeToggle = document.getElementById("theme-toggle");
const streakElement = document.getElementById("streak-count");

let currentWord, correctLetters, wrongGuessCount;
let streak = localStorage.getItem('hangmanStreak') ? parseInt(localStorage.getItem('hangmanStreak')) : 0;
const maxGuesses = 6;

// Init Streak UI
streakElement.innerText = streak;

const resetGame = () => {
    // Resetting game variables and UI
    correctLetters = [];
    wrongGuessCount = 0;

    // Reset SVG parts
    hangmanParts.forEach(part => {
        part.style.display = "none";
    });

    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("correct", "incorrect");
    });
    gameModal.classList.remove("show");
}

const getRandomWord = () => {
    // Selecting a random word and hint from the wordList
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    document.querySelector(".hint-text").innerText = hint;
    resetGame();
}

// Sound Effects using Web Audio API
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const playSound = (type) => {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === 'correct') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    } else if (type === 'wrong') {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
        oscillator.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.2);
    } else if (type === 'win') {
        // Simple Major Arpeggio
        const now = audioCtx.currentTime;
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.1, now + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.3);
            osc.start(now + i * 0.1);
            osc.stop(now + i * 0.1 + 0.3);
        });
    } else if (type === 'lose') {
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
        oscillator.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.5);
        gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.5);
    }
};

const gameOver = (isVictory) => {
    // Update Streak
    if (isVictory) {
        streak++;
        playSound('win');
    } else {
        streak = 0;
        playSound('lose');
    }
    localStorage.setItem('hangmanStreak', streak);
    streakElement.innerText = streak;

    // After game complete.. showing modal with relevant details
    const modalText = isVictory ? `Vous avez trouvé le mot:` : 'Le mot correct était:';
    const modalTitle = isVictory ? 'Victoire !' : 'Perdu !';

    // Set content
    const imgElement = gameModal.querySelector(".modal-img");
    imgElement.style.display = "block";
    gameModal.querySelector("img").src = isVictory ? 'https://cdn-icons-png.flaticon.com/512/2660/2660205.png' : 'https://cdn-icons-png.flaticon.com/512/9308/9308892.png';

    gameModal.querySelector(".modal-title").innerText = modalTitle;
    gameModal.querySelector(".modal-text").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

const initGame = (button, clickedLetter) => {
    // Checking if clickedLetter is exist on the currentWord
    if (currentWord.includes(clickedLetter)) {
        playSound('correct');
        // Showing all correct letters on the word display
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        playSound('wrong');
        // If clicked letter doesn't exist then update the wrongGuessCount and hangman image
        wrongGuessCount++;

        // Show corresponding hangman part
        // wrongGuessCount 1 -> show part index 0
        if (wrongGuessCount <= hangmanParts.length) {
            hangmanParts[wrongGuessCount - 1].style.display = "block";
        }
    }

    button.disabled = true;
    button.classList.add(currentWord.includes(clickedLetter) ? "correct" : "incorrect");
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Calling gameOver function if any of these condition meets
    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
}

// Creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    const letter = String.fromCharCode(i);
    button.innerText = letter;
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, letter));
}

// Physical Keyboard Support
document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    if (key >= 'a' && key <= 'z' && !gameModal.classList.contains("show")) {
        // Find the button associated with this key
        const buttons = document.querySelectorAll(".keyboard button");
        for (let btn of buttons) {
            if (btn.innerText === key && !btn.disabled) {
                initGame(btn, key);
                break;
            }
        }
    }
});

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);

// Theme Toggle Logic
themeToggle.addEventListener("click", () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});
