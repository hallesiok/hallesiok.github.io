let currentHorseIndex;
let myPoints = 0;

const horses = [
    {
        name: "Tillie",
        image: "0001.jpg"
    },
    {
        name: "Lars",
        image: "0002.jpg"
    },
    {
        name: "Letin",
        image: "0003.jpg"
    },
    {
        name: "Electra",
        image: "0004.jpg"
    },
]


const handleButtonClick = (horseName) => {
    const isCorrect = horseName === horses[currentHorseIndex].name;

    if (isCorrect) {
        myPoints = myPoints + 50;
        // alert("You're Correct!")
    } else {
        myPoints = myPoints - 10;
        // alert("You're wrong.  Try again.")
    }

    showAnswerOverlay(isCorrect);

    updatePoints();

    if (isCorrect) {
        next()
    }
}

const showAnswerOverlay = (isCorrect) => {
    const element = document.getElementById("answer");

    element.innerText = isCorrect ? "Correct!" : "Wrong!"

    element.style.display = "block";

    setTimeout( () => {
        element.style.display = "none";
    }, 2000)

}

const updatePoints = () => {
    if (myPoints < 0) {
        myPoints = 0;
    } else if (myPoints === 500) {
        alert("YOU WIN!!!");
        myPoints = 0;
    }

    const element = document.getElementById("myPoints");
    element.innerText = myPoints;
}


const next = () => {
    currentHorseIndex++;

    if (currentHorseIndex >= horses.length) {
        currentHorseIndex = 0;
    }

    const currentHorse = horses[currentHorseIndex];
    const horseImage = document.getElementById("horseImage");
    horseImage.src = "./photos/" + currentHorse.image;
}

const init = () => {
    currentHorseIndex = 0;
    const currentHorse = horses[currentHorseIndex];

    const horseImage = document.getElementById("horseImage");
    horseImage.src = "./photos/" + currentHorse.image;
}

init();