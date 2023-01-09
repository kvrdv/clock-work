let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();

console.log(hours + ':' + minutes);

function getTime(hours, minutes) {
  if (hours > 12) {
    hours = hours - 12;
  }
  
  if (minutes > 37) {
    hours = hours + 1;
  }

  switch (hours) {
    case 0:
      console.log('twelve'); // row-9
      break;
    case 1:
      console.log('one'); // row-6
      break;
    case 2:
      console.log('two'); // row-7
      break;
    case 3:
      console.log('three'); // row-6
      break;
    case 4:
      console.log('four'); // row-7
      break;
    case 5:
      console.log('five'); // row-7
      break;
    case 6:
      console.log('six'); // row-6
      break;
    case 7:
      console.log('seven'); // row-9
      break;
    case 8:
      console.log('eight'); // row-8
      break;
    case 9:
      console.log('nine'); // row-5
      break;
    case 10:
      console.log('ten'); // row-4
      break;
    case 11:
      console.log('eleven'); // row-8
      break;
  }

  switch (minutes) {
    case 58:
    case 59:
    case 0:
    case 1:
    case 2:
      console.log("o'clock"); // row-10
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      console.log('five past'); // row-3 + row-5
      break;
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      console.log('ten past'); // row-4 + row-5
      break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      console.log('quarter past'); // row-2 + row-5
      break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
      console.log('twenty past'); // row-3  + row-5
      break;
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
      console.log('twenty five past'); // row-3  + row-5
      break;
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
      console.log('half past'); // row-4  + row-5
      break;
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
      console.log('twenty five to'); // row-3  + row-4
      break;
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
      console.log('twenty  to'); // row-3  + row-4
      break;
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
      console.log('quarter to'); // row-2  + row-4
      break;
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
      console.log('ten to'); // row-4
      break;
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      console.log('five to'); // row-3  + row-4
      break;
  }
}

getTime(hours, minutes);