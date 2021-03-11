const makeDieBtn = document.getElementById("make-die-btn") as HTMLButtonElement;
const rerollBtn = document?.getElementById("reroll-btn") as HTMLButtonElement;
const sumBtn = document.getElementById("sum-btn") as HTMLButtonElement;
const container = document.getElementById("container") as HTMLDivElement;
const diceContain = document.getElementById("dice-container") as HTMLDivElement;
let diceArr: number[] = [];

makeDieBtn?.addEventListener("click", () => {
  new Die(); 
});

class Die {
  constructor(this: any, value: number, die: any) {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.die = document.createElement("div");
    this.die.className = "dice";
    this.roll();
    diceArr.push(this);
    diceContain?.appendChild(this.die);

    this.die.addEventListener("click", () => {
      this.roll();
    });

    this.die.addEventListener("dblclick", () => {
      let dieIndex = diceArr.indexOf(this);
      diceArr.splice(dieIndex, 1);
      this.die.remove();
    });
  }

  roll() {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    this.value = randomNum;
    dieFace(this.value, this.die)
  }
}
let dieFace = (value: number, die: any) => {
    let unicode = ""
  if (value === 1) {
    unicode = "&#9856";
    die.innerHTML = unicode;
  } else if(value === 2) {
      unicode = "&#9857"
      die.innerHTML = unicode
  } else if (value === 3){
      unicode = "&#9858"
      die.innerHTML = unicode
  } else if (value === 4){
      unicode = "&#9859"
      die.innerHTML = unicode
  } else if(value === 5) {
    unicode = "&#9860"
    die.innerHTML = unicode
  } else if (value === 6){
    unicode = "&#9861"
    die.innerHTML = unicode
  }
};

rerollBtn?.addEventListener("click", () => {
  diceArr.forEach((die) => {
    die.roll();
  });
});

sumBtn?.addEventListener("click", () => {
  let sum = 0;

  diceArr.forEach((die) => {
    sum = sum + die.value;
  });

  alert(`The sum of the dice is ${sum}`);

  
});
