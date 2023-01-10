const wordIt = [...document.getElementsByClassName('word-it')]; // row-1
const wordIs = [...document.getElementsByClassName('word-is')]; // row-1
const wordQuarter = [...document.getElementsByClassName('word-quarter')]; // row-2
const wordTwenty = [...document.getElementsByClassName('word-twenty')]; // row-3
const wordFive = [...document.getElementsByClassName('word-five')]; // row-3
const wordHalf = [...document.getElementsByClassName('word-half')]; // row-4
const wordTen1 = [...document.getElementsByClassName('word-ten-1')]; // row-4
const wordTo = [...document.getElementsByClassName('word-to')]; // row-4
const wordPast = [...document.getElementsByClassName('word-past')]; // row-5
const wordNine = [...document.getElementsByClassName('word-nine')]; // row-5
const wordOne = [...document.getElementsByClassName('word-one')]; // row-6
const wordSix = [...document.getElementsByClassName('word-six')]; // row-6
const wordThree = [...document.getElementsByClassName('word-three')]; // row-6
const wordFour = [...document.getElementsByClassName('word-four')]; // row-7
const wordTwentyFive = [...document.getElementsByClassName('word-twenty-five')]; // row-3 + row-7
const wordTwo = [...document.getElementsByClassName('word-two')]; // row-7
const wordEight = [...document.getElementsByClassName('word-eight')]; // row-8
const wordEleven = [...document.getElementsByClassName('word-eleven')]; // row-8
const wordSeven = [...document.getElementsByClassName('word-seven')]; // row-9
const wordTwelve = [...document.getElementsByClassName('word-twelve')]; // row-9
const wordTen2 = [...document.getElementsByClassName('word-ten-2')]; // row-10
const wordOclock = [...document.getElementsByClassName('word-oclock')]; // row-10

function showTime() {
  wordIt.forEach(element => {
    element.classList.toggle('on');
  });

  wordIs.forEach(element => {
    element.classList.toggle('on');
  });

  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  console.log(hours + ':' + minutes);
 
  if (minutes > 37) {
    hours = hours + 1;
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  switch (hours) {
    case 0:
    case 12:
      wordTwelve.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 1:
      wordOne.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 2:
      wordTwo.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 3:
      wordThree.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 4:
      wordFour.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 5:
      wordFive.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 6:
      wordSix.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 7:
      wordSeven.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 8:
      wordEight.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 9:
      wordNine.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 10:
      wordTen2.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 11:
      wordEleven.forEach(element => {
        element.classList.toggle('on');
      });
      break;
  }

  switch (minutes) {
    case 58:
    case 59:
    case 0:
    case 1:
    case 2:
      wordOclock.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      wordFive.forEach(element => {
        element.classList.toggle('on');
      });
      wordPast.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      wordTen1.forEach(element => {
        element.classList.toggle('on');
      });
      wordPast.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      wordQuarter.forEach(element => {
        element.classList.toggle('on');
      });
      wordPast.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
      wordTwenty.forEach(element => {
        element.classList.toggle('on');
      });
      wordPast.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
      wordTwentyFive.forEach(element => {
        element.classList.toggle('on');
      });
      wordPast.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
      wordHalf.forEach(element => {
        element.classList.toggle('on');
      });
      wordPast.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
      wordTwentyFive.forEach(element => {
        element.classList.toggle('on');
      });
      wordTo.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
      wordTwenty.forEach(element => {
        element.classList.toggle('on');
      });
      wordTo.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
      wordQuarter.forEach(element => {
        element.classList.toggle('on');
      });
      wordTo.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
      wordTen1.forEach(element => {
        element.classList.toggle('on');
      });
      wordTo.forEach(element => {
        element.classList.toggle('on');
      });
      break;
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      wordFive.forEach(element => {
        element.classList.toggle('on');
      });
      wordTo.forEach(element => {
        element.classList.toggle('on');
      });
      break;
  }
}

showTime();