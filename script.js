/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert("Markmiðið er að svara eins mörgum af 10 dæmum eins hratt og mögulegt er.");
  do { 
    play();
  } while (confirm('Spila annan?'));
}


/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  let start = new Date();
  let fjoldi = 0;

  for (let i = 0; i<GAMES_TO_PLAY; i++) {
    let rightAnswer = ask();
    if (rightAnswer) {
      //fjoldi++;
    }
  }
  let end = new Date();
  let time = (end - start)/60;

  let medalrett = (fjoldi/time);

  console.log("Þú svaraðir {$fjoldi} af {$GAMES_TO_PLAY} dæmum rétt á {$time} sekúndum");
  console.log("Meðalrétt svör á secúndu eru {$medalrett}")
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  const signNumber = randomNumber(1, 4);
  const sign;
  const truth;
  if (singNumber = 1) { truth = plus(); }
  switch (sign) {
    case 1:
      truth = plus();
    case 2:
      truth = minus();
    case 3:
      truth = multiplication();
    case 4:
      truth = division();
  }
  return truth;
 // promt
}

function plus() {
  promt('+');
  return true;

}

function minus() {
  promt('-');
  return true;
}

function multiplication() {
  promt('*');
  return true;
}

function division() {
  promt('/');
  return true;
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();