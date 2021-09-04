document.addEventListener("DOMContentLoaded", () => {
  const scoreDisplay = document.getElementById("score");
  const width = 28;
  let score = 0;
  const grid = document.querySelector(".grid");
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
    1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
    2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
    2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - electro-pellet
  // 4 - empty

  const squares = [];

  //create your board
  const createGrid = () => {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      //add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("electro-pellet");
      }
    }
  };
  createGrid();
  //starting pacman position
  let pacManCurrentIndex = 490;
  squares[pacManCurrentIndex].classList.add("pac-man");

  //move pacman
  const movePacman = (e) => {
    squares[pacManCurrentIndex].classList.remove("pac-man");

    switch (e.keyCode) {
      case 65: //left
        if (
          pacManCurrentIndex % width !== 0 &&
          !squares[pacManCurrentIndex - 1].classList.contains("wall") &&
          !squares[pacManCurrentIndex - 1].classList.contains("ghost-lair")
        )
          pacManCurrentIndex--;
        //check is pac is at left exit
        if (pacManCurrentIndex - 1 === 363) {
          pacManCurrentIndex = 391;
        }
        break;
      case 87: //up
        if (
          pacManCurrentIndex - width >= 0 &&
          !squares[pacManCurrentIndex - width].classList.contains("wall") &&
          !squares[pacManCurrentIndex - width].classList.contains("ghost-lair")
        )
          pacManCurrentIndex -= width;
        break;
      case 68: //right
        if (
          (pacManCurrentIndex + 1) % width !== 0 &&
          !squares[pacManCurrentIndex + 1].classList.contains("wall") &&
          !squares[pacManCurrentIndex + 1].classList.contains("ghost-lair")
        )
          pacManCurrentIndex++;
        //check is pac is at right exit
        if (pacManCurrentIndex + 1 === 392) {
          pacManCurrentIndex = 364;
        }
        break;
      case 83: //down
        if (
          pacManCurrentIndex + width < width * width &&
          !squares[pacManCurrentIndex + width].classList.contains("wall") &&
          !squares[pacManCurrentIndex + width].classList.contains("ghost-lair")
        )
          pacManCurrentIndex += width;
        break;
    }

    squares[pacManCurrentIndex].classList.add("pac-man");
    pacDotEaten();
    electroPelletEaten();
    checkGameOver();
    checkForWin();
  };

  document.addEventListener("keyup", movePacman);
  // function if pac eats a pac-dot
  const pacDotEaten = () => {
    if (squares[pacManCurrentIndex].classList.contains("pac-dot")) {
      score++;
      scoreDisplay.innerHTML = score;
      squares[pacManCurrentIndex].classList.remove("pac-dot");
      squares[pacManCurrentIndex].classList.add("dot-eaten");
    }
  };
  //when you eat an E-Pellet
  function electroPelletEaten() {
    if (squares[pacManCurrentIndex].classList.contains("electro-pellet")) {
      score += 10;
      ghosts.forEach((ghost) => (ghost.isScared = true));
      setTimeout(unScareGhosts, 10000);
      squares[pacManCurrentIndex].classList.remove("electro-pellet");
    }
  }

  // make the ghosts stop appearing scared
  function unScareGhosts() {
    ghosts.forEach((ghost) => (ghost.isScared = false));
  }
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className;
      this.speed = speed;
      this.startIndex = startIndex;
      this.isScared = false;
      this.currIndex = startIndex;
      this.timerId = NaN;
    }
  }

  ghosts = [
    new Ghost("blinky", 348, 250),
    new Ghost("stinky", 376, 400),
    new Ghost("zappy", 351, 300),
    new Ghost("bulky", 379, 550),
  ];

  //draw ghosts
  ghosts.forEach((ghost) => {
    squares[ghost.currIndex].classList.add(ghost.className);
    squares[ghost.currIndex].classList.add("ghost");
  });
  //move the ghosts randomly
  ghosts.forEach((ghost) => moveGhost(ghost));
  //

  function moveGhost(ghost) {
    const directions = [-1, +1, width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    ghost.timerId = setInterval(function () {
      //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
      if (
        !squares[ghost.currIndex + direction].classList.contains("ghost") &&
        !squares[ghost.currIndex + direction].classList.contains("wall")
      ) {
        //remove the ghosts classes
        squares[ghost.currIndex].classList.remove(ghost.className);
        squares[ghost.currIndex].classList.remove("ghost", "scared-ghost");
        //move into that space
        ghost.currIndex += direction;
        squares[ghost.currIndex].classList.add(ghost.className, "ghost");
        //else find a new random direction ot go in
      } else direction = directions[Math.floor(Math.random() * directions.length)];
      //if pac get E-pellet ghosts turn blue
      if (ghost.isScared) {
        squares[ghost.currIndex].classList.add("scared-ghost");
      }
      //if ghost is scared and pacman runs into it
      if (
        ghost.isScared &&
        squares[ghost.currIndex].classList.contains("pac-man")
      ) {
        squares[ghost.currIndex].classList.remove(
          ghost.className,
          "ghost",
          "scared-ghost"
        );
        ghost.currIndex = ghost.startIndex;
        score += 100;
        squares[ghost.currIndex].classList.add(ghost.className, "ghost");
      }
      checkGameOver();
    }, ghost.speed);
  }
  //check for game over- add to both movePacmana and moveGhost
  function checkGameOver() {
    if (
      squares[pacManCurrentIndex].classList.contains("ghost") &&
      !squares[pacManCurrentIndex].classList.contains("scared-ghost")
    ) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      //   setTimeout(() => alert("Game Over!"), 500);
      scoreDisplay.innerHTML = "Game Over!!!";
    }
  }
  //check for a win-- only add to movePacman
  function checkForWin() {
    if (score === 274) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      coreDisplay.innerHTML = "You Won!!!";
    }
  }

  //   --------------------------------------------------------
});
