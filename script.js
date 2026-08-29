/* ================================
   SCREENS
================================ */
const loginScreen =
    document.getElementById("login-screen");

const welcomeScreen =
    document.getElementById("welcome-screen");

const passwordScreen =
    document.getElementById("password-screen");

const puzzleScreen =
    document.getElementById("puzzle-screen");

const puzzleTrack =
    document.getElementById("puzzle-track");

const letterScreen =
    document.getElementById("letter-screen");

const surpriseScreen =
    document.getElementById("surprise-screen");


/* ================================
   LOGIN ELEMENTS
================================ */
const usernameInput =
    document.getElementById("username");

const loginPasswordInput =
    document.getElementById("login-password");

const hintButton =
    document.getElementById("password-hint");

const hintText =
    document.getElementById("hint-text");

const loginError =
    document.getElementById("login-error");

const loginButton =
    document.getElementById("login-button");


/* ================================
   PUZZLE DATA
================================ */
const puzzles = [
    {
        rows: 1,
        columns: 2,
        image:
            "image1.jpg",
        ratio:
            4 / 3,
        title:
            "The Spark of Noticing",
        instruction:
            "It was somewhere between an ordinary day and everything that came after. It's honestly cute how something so small can become the beginning of everything.<br><br>(Tap two tiles to swap them.<br>Next one will come after the picture is complete.)"
    },

    {
        rows: 2,
        columns: 1,
        image:
            "image2.jpg",
        ratio:
            3 / 2,
        title:
            "The Pull of Connection",
        instruction:
            "And from the calls to the texts, from meaningless to deep conversations, there was always something that made me want to stay just a little bit longer."
    },

    {
        rows: 2,
        columns: 2,
        image:
            "image3.jpg",
        ratio:
            4 / 3,
        title:
            "The Walls Begin to Fall",
        instruction:
            "And somewhere along the way, you became someone I could simply be beside. As if being close to you started feeling like home."
    },

    {
        rows: 2,
        columns: 2,
        image:
            "image4.jpg",
        ratio:
            4 / 3,
        title:
            "From Me and You to Us",
        instruction:
            "And we became two people, and one little world of our own, filled with our jokes, our moments, our chaos, and everything in between. Somewhere in that world, I found a version of myself that only seemed to exist with you."
    },

    {
        rows: 2,
        columns: 3,
        image:
            "image5.jpg",
        ratio:
            3429 / 1769,
        title:
            "The Choice",
        instruction:
            "Because some things are meant to be chosen, again and again. And loving you has never been something I wanted to leave to chance."
    },

    {
        rows: 3,
        columns: 3,
        image:
            "image6.jpg",
        ratio:
            4 / 3,
        title:
            "Growing Together",
        instruction:
            "Honestly Shayonti, growing older is better when I get to do it with you. And somehow, every version of us has been my favourite, still learning, still laughing, still becoming us, together. Here's to all the versions of us we've yet to become, and I know that I'll love them, equally if not more."
    }
];

/* ================================
   PRELOAD PUZZLE IMAGES
================================ */

puzzles.forEach(puzzle => {
    const img = new Image();
    img.src = puzzle.image;
});

/* ================================
   STATE
================================ */
let enteredPassword =
    "";

let celebrationStarted =
    false;

let currentPuzzleIndex =
    0;

let currentPuzzleState =
    null;

let puzzleTransitioning =
    false;


/* ================================
   LOGIN
================================ */
function isLoginCorrect() {

    return (
        usernameInput.value
            .trim()
            .toLowerCase() ===
        "shayonti"

        &&

        loginPasswordInput.value ===
        "the best girlfriend in the universe"
    );

}


function checkLogin() {

    const correct =
        isLoginCorrect();

    loginButton.disabled =
        !correct;

    loginButton.classList.toggle(
        "enabled",
        correct
    );

    if (correct) {

        loginError.classList.remove(
            "show"
        );

    }

}


/* ================================
   LOGIN HINT
================================ */
hintButton.addEventListener(
    "click",
    () => {

        hintText.classList.toggle(
            "show"
        );

    }
);


/* ================================
   LOGIN INPUT
================================ */
usernameInput.addEventListener(
    "input",
    () => {

        loginError.classList.remove(
            "show"
        );

        checkLogin();

    }
);


loginPasswordInput.addEventListener(
    "input",
    () => {

        loginError.classList.remove(
            "show"
        );

        checkLogin();

    }
);


/* ================================
   LOGIN BUTTON
================================ */
loginButton.addEventListener(
    "click",
    () => {

        if (!isLoginCorrect()) {

            loginError.classList.add(
                "show"
            );

            return;
        }

        loginScreen.classList.add(
            "hide"
        );

        setTimeout(
            () => {

                welcomeScreen.classList.add(
                    "show"
                );

            },
            300
        );

    }
);


/* ================================
   WELCOME
================================ */
welcomeScreen.addEventListener(
    "click",
    () => {

        welcomeScreen.classList.add(
            "hide"
        );

        passwordScreen.classList.add(
            "show"
        );

    }
);


/* ================================
   NUMERICAL PASSWORD
================================ */
const numberButtons =
    document.querySelectorAll(
        ".number-button"
    );

const backspaceButton =
    document.getElementById(
        "backspace"
    );

const dots =
    document.querySelectorAll(
        ".dot"
    );


numberButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                if (
                    enteredPassword.length >= 8
                ) {

                    return;

                }

                enteredPassword +=
                    button.dataset.number;

                updateDots();

                if (
                    enteredPassword ===
                    "27022025"
                    &&
                    !celebrationStarted
                ) {

                    celebrationStarted =
                        true;

                    startCelebration();

                }

            }
        );

    }
);


backspaceButton.addEventListener(
    "click",
    () => {

        enteredPassword =
            enteredPassword.slice(
                0,
                -1
            );

        updateDots();

    }
);


function updateDots() {

    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "filled",
                index <
                enteredPassword.length
            );

        }
    );

}


/* ================================
FLOWER / HEART SHOWER
================================ */

/*
 * Creates the custom six-petal flower.
 */
function createCustomFlower(
    variant = null
) {

    const flower =
        document.createElement(
            "span"
        );

    flower.className =
        "custom-flower";

    const chosenVariant =
        variant ||
        Math.floor(
            Math.random() * 4
        ) + 1;

    flower.classList.add(
        `flower-variant-${chosenVariant}`
    );

    for (
        let i = 0;
        i < 6;
        i++
    ) {

        const petal =
            document.createElement(
                "span"
            );

        petal.className =
            "flower-petal";

        petal.style.setProperty(
            "--petal-index",
            i
        );

        flower.appendChild(
            petal
        );

    }

    const center =
        document.createElement(
            "span"
        );

    center.className =
        "flower-center";

    flower.appendChild(
        center
    );

    return flower;
}


/*
 * Creates the custom heart.
 */
function createCustomHeart() {

    const heart =
        document.createElement(
            "span"
        );

    heart.className =
        "custom-heart";

    heart.innerHTML = `
        <span class="heart-left"></span>
        <span class="heart-right"></span>
        <span class="heart-point"></span>
    `;

    return heart;
}


function startCelebration() {

    passwordScreen.style.pointerEvents =
        "none";


    const celebration =
        document.createElement(
            "div"
        );

    celebration.className =
        "celebration";

    document.body.appendChild(
        celebration
    );


    function createShowerRow() {

        /*
         * EXACT ORIGINAL:
         * one item per 85px column.
         */
        const columnWidth =
            85;

        const columns =
            Math.ceil(
                window.innerWidth /
                columnWidth
            );


        for (
            let column = 0;
            column < columns;
            column++
        ) {

            /*
             * Mostly flowers,
             * occasional heart.
             */
            const isHeart =
                Math.random() < 0.12;


            const item =
                isHeart
                    ? createCustomHeart()
                    : createCustomFlower();


            item.classList.add(
                "celebration-item"
            );


            /*
             * Preserve the original
             * absolute positioning.
             */
            item.style.position =
                "absolute";

            item.style.top =
                "-150px";


            /*
             * EXACT ORIGINAL
             * horizontal positioning.
             */
            item.style.left =
                (
                    (
                        column /
                        columns
                    ) * 100

                    +

                    Math.random() * 5

                    -

                    2.5

                ) + "%";


            /*
             * EXACT ORIGINAL
             * size: 65px → 115px.
             */
            const size =
                65 +
                Math.random() * 50;


            item.style.setProperty(
                "--item-size",
                size + "px"
            );


            /*
             * EXACT ORIGINAL
             * fall duration: 5s → 7.2s.
             */
            item.style.animationDuration =
                (
                    5 +
                    Math.random() * 2.2
                ) + "s";


            /*
             * EXACT ORIGINAL
             * horizontal drift: -90px → +90px.
             */
            item.style.setProperty(
                "--drift",
                (
                    Math.random() * 180 -
                    90
                ) + "px"
            );


            /*
             * EXACT ORIGINAL
             * rotation: -250deg → +250deg.
             */
            item.style.setProperty(
                "--rotation",
                (
                    Math.random() * 500 -
                    250
                ) + "deg"
            );


            /*
             * Keep the slight heart
             * timing variation.
             */
            if (isHeart) {

                item.style.animationDelay =
                    (
                        Math.random() * 0.4
                    ) + "s";

            }


            celebration.appendChild(
                item
            );

        }

    }


    /* Start the shower immediately */

    createShowerRow();


    /*
     * EXACT ORIGINAL:
     * complete new row every 150ms.
     */
    const shower =
        setInterval(
            createShowerRow,
            150
        );


    /* ================================
       SHOW PUZZLES HALFWAY THROUGH
       THE SHOWER
    ================================= */

    setTimeout(
        () => {

            puzzleScreen.classList.add(
                "show"
            );

            showFirstPuzzle();

        },
        5000
    );


    /* ================================
       STOP ADDING NEW FLOWERS
    ================================= */

    setTimeout(
        () => {

            clearInterval(
                shower
            );

        },
        10000
    );


    /* ================================
       MOVE FLOWER SHOWER AWAY
    ================================= */

    setTimeout(
        () => {

            celebration.style.overflow =
                "visible";

            celebration.style.transition =
                "transform 5.8s linear";

            celebration.style.transform =
                "translateY(110vh)";

        },
        15200
    );


    celebration.addEventListener(
        "transitionend",
        () => {

            celebration.remove();

            passwordScreen.classList.remove(
                "show"
            );

        },
        {
            once: true
        }
    );
}


/* ================================
FADED PUZZLE FLOWERS
================================ */

function createPuzzleFlowerLayer(
    density
) {

    const layer =
        document.createElement(
            "div"
        );

    layer.className =
        "puzzle-flower-layer";


    /*
     * EXACT ORIGINAL DENSITY:
     *
     * Puzzle 1 = 16
     * Puzzle 2 = 27
     * Puzzle 3 = 38
     * Puzzle 4 = 49
     * Puzzle 5 = 60
     * Puzzle 6 = 71
     */
    for (
        let i = 0;
        i < density;
        i++
    ) {

        const flower =
            createCustomFlower();


        flower.classList.add(
            "puzzle-flower"
        );


        /*
         * Restore the original
         * absolute positioning.
         */
        flower.style.position =
            "absolute";


        /*
         * EXACT ORIGINAL
         * random position.
         */
        flower.style.left =
            (
                Math.random() * 100
            ) + "%";

        flower.style.top =
            (
                Math.random() * 100
            ) + "%";


        /*
         * EXACT ORIGINAL
         * size calculation.
         */
        const size =
            10 +
            Math.random() *
            Math.min(
                58,
                18 + density
            );


        flower.style.setProperty(
            "--flower-size",
            size + "px"
        );


        /*
         * EXACT ORIGINAL
         * opacity.
         */
        flower.style.setProperty(
            "--opacity",
            0.10 +
            Math.random() * 0.24
        );


        /*
         * EXACT ORIGINAL
         * movement duration.
         */
        flower.style.setProperty(
            "--duration",
            (
                9 +
                Math.random() * 12
            ) + "s"
        );


        /*
         * EXACT ORIGINAL
         * animation delay.
         */
        flower.style.setProperty(
            "--delay",
            (
                -Math.random() * 12
            ) + "s"
        );


        layer.appendChild(
            flower
        );

    }


    return layer;
}


/* ================================
CREATE PUZZLE STAGE
================================ */

function createPuzzleStage(
    index
) {

    const puzzle =
        puzzles[index];


    const stage =
        document.createElement(
            "article"
        );

    stage.className =
        "puzzle-stage";


    /*
     * EXACT ORIGINAL INCREASING
     * BACKGROUND FLOWER DENSITY.
     */
    stage.appendChild(
        createPuzzleFlowerLayer(
            16 +
            index * 11
        )
    );


    const content =
        document.createElement(
            "div"
        );

    content.className =
        "puzzle-content";


    content.innerHTML = `
        <h1 id="puzzle-title">
            ${puzzle.title}
        </h1>

        <p id="puzzle-instruction">
            ${puzzle.instruction}
        </p>
    `;


    const board =
        document.createElement(
            "div"
        );

    board.className =
        "puzzle-board";

    board.dataset.columns =
        puzzle.columns;


    content.appendChild(
        board
    );


    const state = {
        index,
        puzzle,
        stage,
        content,
        board,
        pieces: [],
        selected: null,
        solved: false
    };


    const totalPieces =
        puzzle.rows *
        puzzle.columns;


    for (
        let i = 0;
        i < totalPieces;
        i++
    ) {

        state.pieces.push(i);

    }


    shufflePuzzle(
        state.pieces
    );


    renderPuzzleBoard(
        state
    );


    stage.appendChild(
        content
    );


    return state;
}

/* ================================
   SIZE BOARD
================================ */
function sizePuzzleBoard(
    state
) {

    const ratio =
        state.puzzle.ratio;

    let width =
        Math.min(
            window.innerWidth * 0.65,
            520
        );

    let height =
        width / ratio;

    const maxHeight =
        window.innerHeight * 0.42;


    if (
        height >
        maxHeight
    ) {

        height =
            maxHeight;

        width =
            height *
            ratio;

    }


    state.board.style.width =
        Math.round(
            width
        ) + "px";


    state.board.style.height =
        Math.round(
            height
        ) + "px";


    state.board.style.gridTemplateRows =
        `repeat(
            ${state.puzzle.rows},
            1fr
        )`;


    state.board.style.gridTemplateColumns =
        `repeat(
            ${state.puzzle.columns},
            1fr
        )`;

}


/* ================================
   CALCULATE IMAGE POSITION
================================ */
function getBackgroundPosition(
    piece,
    puzzle
) {

    const row =
        Math.floor(
            piece /
            puzzle.columns
        );

    const column =
        piece %
        puzzle.columns;


    let x = 0;
    let y = 0;


    if (puzzle.columns > 1) {

        x =
            (
                column /
                (puzzle.columns - 1)
            ) * 100;

    }


    if (puzzle.rows > 1) {

        y =
            (
                row /
                (puzzle.rows - 1)
            ) * 100;

    }


    return {
        x,
        y
    };

}


/* ================================
   RENDER BOARD
================================ */
function renderPuzzleBoard(
    state
) {

    sizePuzzleBoard(
        state
    );


    const puzzle =
        state.puzzle;


    state.board.innerHTML =
        "";


    state.pieces.forEach(
        (
            piece,
            position
        ) => {

            const tile =
                document.createElement(
                    "button"
                );


            tile.type =
                "button";


            tile.className =
                "puzzle-tile";


            tile.style.backgroundImage =
                `url("${puzzle.image}")`;


            tile.style.setProperty(
                "--image-width",
                `${puzzle.columns * 100}%`
            );


            tile.style.setProperty(
                "--image-height",
                `${puzzle.rows * 100}%`
            );


            const positionData =
                getBackgroundPosition(
                    piece,
                    puzzle
                );


            tile.style.setProperty(
                "--image-x",
                `${positionData.x}%`
            );


            tile.style.setProperty(
                "--image-y",
                `${positionData.y}%`
            );


            tile.addEventListener(
                "click",
                () => {

                    selectPuzzleTile(
                        state,
                        position
                    );

                }
            );


            state.board.appendChild(
                tile
            );

        }
    );

}


/* ================================
   SHUFFLE
================================ */
function shufflePuzzle(
    pieces
) {

    if (pieces.length <= 1) {

        return;

    }


    do {

        for (
            let i =
                pieces.length - 1;

            i > 0;

            i--
        ) {

            const randomIndex =
                Math.floor(
                    Math.random() *
                    (i + 1)
                );


            [
                pieces[i],
                pieces[randomIndex]
            ] = [
                pieces[randomIndex],
                pieces[i]
            ];

        }

    } while (
        pieces.every(
            (
                piece,
                index
            ) =>
                piece === index
        )
    );

}


/* ================================
   PUZZLE TILE SELECTION
================================ */
function selectPuzzleTile(
    state,
    index
) {

    if (
        state.solved ||
        puzzleTransitioning
    ) {

        return;

    }


    const tiles =
        [
            ...state.board.children
        ];


    if (
        state.selected === null
    ) {

        state.selected =
            index;

        tiles[index].classList.add(
            "selected"
        );

        return;

    }


    if (
        state.selected === index
    ) {

        tiles[index].classList.remove(
            "selected"
        );

        state.selected =
            null;

        return;

    }


    [
        state.pieces[
            state.selected
        ],
        state.pieces[index]
    ] = [
        state.pieces[index],
        state.pieces[
            state.selected
        ]
    ];


    state.selected =
        null;


    renderPuzzleBoard(
        state
    );


    const solved =
        state.pieces.every(
            (
                piece,
                position
            ) =>
                piece === position
        );


    if (solved) {

        completePuzzle(
            state
        );

    }

}


/* ================================
   COMPLETE PUZZLE
================================ */
function completePuzzle(
    state
) {

    state.solved =
        true;


    state.board.classList.add(
        "puzzle-complete"
    );


    const continueText =
        document.createElement(
            "p"
        );


    continueText.className =
        "puzzle-continue";


    if (
        state.index ===
        puzzles.length - 1
    ) {

        continueText.textContent =
            "are you ready for a little surprise?";

        continueText.classList.add(
            "final-surprise"
        );

    } else {

        continueText.textContent =
            "tap to continue";

    }


    continueText.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            if (
                state.index ===
                puzzles.length - 1
            ) {

                revealLetter();

                return;

            }


            continueToNextPuzzle();

        }
    );


    state.content.appendChild(
        continueText
    );


    setTimeout(
        () => {

            if (
                state.solved &&
                !puzzleTransitioning
            ) {

                continueText.classList.add(
                    "show"
                );

            }

        },
        650
    );

}


/* ================================
   FINAL FOLDED-PAPER REVEAL
================================ */
function revealLetter() {

    if (
        puzzleTransitioning
    ) {

        return;

    }


    puzzleTransitioning =
        true;


    /* ================================
       STOP PUZZLE INTERACTION
    ================================= */

    puzzleScreen.style.pointerEvents =
        "none";


    /* ================================
       EXIT THE FINAL PUZZLE
    ================================= */

    puzzleScreen.classList.add(
        "final-exit"
    );


    /* ================================
       SHOW SURPRISE SCREEN
    ================================= */

    if (surpriseScreen) {

        surpriseScreen.classList.remove(
            "hide"
        );

        surpriseScreen.classList.add(
            "show"
        );

    }


    /* ================================
       GET THE PAPER
    ================================= */

    const surprisePaper =
        document.querySelector(
            ".surprise-paper"
        );


    /*
     * IMPORTANT:
     * The paper NO LONGER opens
     * automatically.
     * The user must click the paper.
     */

    if (surprisePaper) {

        surprisePaper.addEventListener(
            "click",
            openSurprisePaper,
            {
                once: true
            }
        );

    }

}


/* ================================
   OPEN SURPRISE PAPER
================================ */
function openSurprisePaper(
    event
) {

    if (
        event
    ) {

        event.stopPropagation();

    }


    const surprisePaper =
        document.querySelector(
            ".surprise-paper"
        );


    if (
        !surprisePaper
    ) {

        return;

    }


    /*
     * Prevent multiple clicks
     * while the paper is opening.
     */

    surprisePaper.style.pointerEvents =
        "none";


    surprisePaper.classList.add(
        "opening"
    );


    /* ================================
       AFTER PAPER FOLDS AWAY,
       SHOW LETTER
    ================================= */

    setTimeout(
        () => {

            if (surpriseScreen) {

                surpriseScreen.classList.add(
                    "hide"
                );

            }


            letterScreen.classList.add(
                "show"
            );

        },
        950
    );


    /* ================================
       REMOVE OLD PUZZLE
    ================================= */

    setTimeout(
        () => {

            puzzleScreen.classList.remove(
                "show"
            );

            puzzleScreen.classList.remove(
                "final-exit"
            );

            puzzleTrack.replaceChildren();

        },
        1100
    );


    /* ================================
       OPEN LETTER PAPER
    ================================= */

    setTimeout(
        () => {

            const letterPaper =
                document.querySelector(
                    ".letter-paper"
                );


            if (letterPaper) {

                requestAnimationFrame(
                    () => {

                        letterPaper.classList.add(
                            "letter-open"
                        );

                    }
                );

            }


            puzzleTransitioning =
                false;

        },
        1550
    );

}


/* ================================
   FIRST PUZZLE
================================ */
function showFirstPuzzle() {

    currentPuzzleIndex =
        0;


    currentPuzzleState =
        createPuzzleStage(
            0
        );


    puzzleTrack.replaceChildren(
        currentPuzzleState.stage
    );


    puzzleTrack.style.transform =
        "translateY(0)";

}


/* ================================
   PUZZLE TRANSITION
================================ */
function continueToNextPuzzle() {

    if (
        !currentPuzzleState ||
        !currentPuzzleState.solved ||
        puzzleTransitioning ||
        currentPuzzleIndex >=
            puzzles.length - 1
    ) {

        return;

    }


    puzzleTransitioning =
        true;


    const nextIndex =
        currentPuzzleIndex + 1;


    const nextPuzzleState =
        createPuzzleStage(
            nextIndex
        );


    nextPuzzleState.stage.classList.add(
        "next"
    );


    puzzleTrack.appendChild(
        nextPuzzleState.stage
    );


    void puzzleTrack.offsetHeight;


    requestAnimationFrame(
        () => {

            puzzleTrack.style.transform =
                "translateY(-100vh)";

        }
    );


    setTimeout(
        () => {

            currentPuzzleIndex =
                nextIndex;


            currentPuzzleState =
                nextPuzzleState;


            puzzleTrack.replaceChildren(
                nextPuzzleState.stage
            );


            nextPuzzleState.stage.classList.remove(
                "next"
            );


            puzzleTrack.style.transition =
                "none";


            puzzleTrack.style.transform =
                "translateY(0)";


            void puzzleTrack.offsetHeight;


            puzzleTrack.style.transition =
                `
                transform 0.72s
                cubic-bezier(
                    0.25,
                    0.8,
                    0.25,
                    1
                )
                `;


            puzzleTransitioning =
                false;

        },
        740
    );

}


/* ================================
   RESIZE
================================ */
window.addEventListener(
    "resize",
    () => {

        if (
            currentPuzzleState &&
            !puzzleTransitioning
        ) {

            renderPuzzleBoard(
                currentPuzzleState
            );

      const numericalHint =
    document.getElementById("numerical-hint");

const numericalHintText =
    document.getElementById("numerical-hint-text");

if (numericalHint && numericalHintText) {

    numericalHint.addEventListener("click", function () {

        numericalHintText.classList.toggle("show");

    });

}
    }
);
