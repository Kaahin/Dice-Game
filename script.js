// När man kastar tärningen
let throws = 0;
let currentGoal = 1;

//Tärningen
const dice = {
  sides: 6,
  throw() {
    return Math.ceil(Math.random() * this.sides);
  },
};

// När användare klickar på knappen så ska logiken köras igång
document.querySelector("button").addEventListener("click", () => {
  
    // Throw dice
  let result = dice.throw();

  // ´Show dice in UI === hemsidan
  document.querySelector("#dice").classList = "";
  document.querySelector("#dice").classList.add("dice", `dots-${result}`);

  // Increase throws with 1
  throws++;
  document.querySelector("button").innerText = `Kasta (${throws})`;
  console.log(`You threw ${result}`);

  // Jämföra för vinst
  if (result === currentGoal && currentGoal < 6) {

    // Ta bort klassen fadded
    document.querySelector(`.dots-${result}`).classList.remove("faded");

    // öka goal with 1
    currentGoal++;
  } else if (result === currentGoal && currentGoal === 6) {
    document.querySelector(`.dots-${result}`).classList.remove("faded");
    console.log(`You rolled a ladder in ${throws} throws`);

    setTimeout(() => {
      alert(`You rolled a ladder in ${throws} throws`);
    }, 100);

    // Starta om spelet
    setTimeout(() => {
      const reset = confirm("Reset Game?"); // boolean result
      if (reset) {
        console.log("resetting game");

        // Reset spel
        currentGoal = 1;
        throws = 0;
        // Lägg 'faded' class tillbaka på alla tärningar i toppen.
        document.querySelectorAll(".dice").forEach((el) => {
          // varje tärning får classen .faded tillbaka
          el.classList.add("faded");
        });

        document.querySelector("#dice").classList = "dice";
      }
    }, 1500);
  }
});