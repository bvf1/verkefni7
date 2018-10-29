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
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');
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
 * Ef notandi ýtir á 'Cancel' í leik eru skilaboðin 'Hætt í leik.' birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  let fjoldiRettraSvara = 0;
  const start = new Date();

  for (let i = 0; i<GAMES_TO_PLAY; i++) {
    let rightAnswer = ask();
    if (rightAnswer == null) {
      return alert("Hætt í leik");
    } 
    
    if (rightAnswer) {
      fjoldiRettraSvara++;
    }
  }

  const end = new Date();
  const time = (end - start) / 60;
  let medalrett = (time/fjoldiRettraSvara);
  if (fjoldiRettraSvara ===0) medalrett = 0;

  alert(`Þú svaraðir ${fjoldiRettraSvara} af ${GAMES_TO_PLAY} dæmum rétt á ${time.toFixed(2)} sekúndum \nMeðalrétt svör á secúndu eru ${medalrett.toFixed(2)}`);
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar með því að
 * nota true, false og null ef notandi hættir. Birtir notanda propmpt til að
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
  let truth = false;
  // randomtala sem segir til um hvort á að gera + - * eða / dæmi
  const sign = randomNumber(1, 4);
  switch (sign) {
    case 1:
      truth = plus();
      break;
    case 2:
      truth = minus();
      break;
    case 3:
      truth = multiplication();
      break;
    case 4:
      truth = division();
      break;
  }
  return truth;
}

/**
 * Ber sama rétt svar og svar sem notandi gefur
 * skilar true ef svörin eru eins og annars false
 */
function rightAnswer(result, svar) {
  svar 
  if (result == svar) return true;
  return false;
}

/**
 * Sér föll fyrir mismunandi útreikninga
 * Föllin búa til tvær random tölur á réttu bili,
 * gerir útreikninga á þeim og biður notenda um að gefa rétt svar.
 * Ef ýtt er á cancel skilar fallið null,
 * annars skilar það útkominni úr rightAnser fallinu.
 */
function plus() {
  let nr1 = randomNumber(1, 100);
  let nr2 = randomNumber(1, 100);
  let result = nr1 + nr2;
  let svar = prompt(`Hvað er ${nr1} + ${nr2} ?`); 
  if (svar == null) return null;
  return rightAnswer(result, svar);

}

function minus() {
  let nr1 = randomNumber(1, 100);
  let nr2 = randomNumber(1, 100);
  let result = nr1 - nr2;
  let svar = prompt(`Hvað er ${nr1} - ${nr2} ?`);
  if (svar == null) return null;
  return rightAnswer(result, svar);
}

function multiplication() {
  let nr1 = randomNumber(1, 10);
  let nr2 = randomNumber(1, 10);
  let result = nr1 * nr2;
  let svar = prompt(`Hvað er ${nr1} * ${nr2} ?`);
  if (svar == null) return null;
  return rightAnswer(result, svar);
}

function division() {
  let nr1 = randomNumber(2, 10);
  let nr2 = randomNumber(2, 10) * nr1;
  let result = nr2 / nr1;
  let svar = prompt(`Hvað er ${nr2} / ${nr1} ?`);
  if (svar == null) return null;
  return rightAnswer(result, svar);
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();