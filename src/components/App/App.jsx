import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const wordIt = [...document.getElementsByClassName('word-it')]; // row-1
  const wordIs = [...document.getElementsByClassName('word-is')]; // row-1
  const wordAm = [...document.getElementsByClassName('word-am')]; // row-1
  const wordPm = [...document.getElementsByClassName('word-pm')]; // row-1
  const wordQuarter = [...document.getElementsByClassName('word-quarter')]; // row-2
  const wordTwenty = [...document.getElementsByClassName('word-twenty')]; // row-3
  const wordTwentyFive = [...document.getElementsByClassName('word-twenty-five')]; // row-3
  const wordFive1 = [...document.getElementsByClassName('word-five-1')]; // row-3
  const wordHalf = [...document.getElementsByClassName('word-half')]; // row-4
  const wordTen1 = [...document.getElementsByClassName('word-ten-1')]; // row-4
  const wordTo = [...document.getElementsByClassName('word-to')]; // row-4
  const wordPast = [...document.getElementsByClassName('word-past')]; // row-5
  const wordNine = [...document.getElementsByClassName('word-nine')]; // row-5
  const wordOne = [...document.getElementsByClassName('word-one')]; // row-6
  const wordSix = [...document.getElementsByClassName('word-six')]; // row-6
  const wordThree = [...document.getElementsByClassName('word-three')]; // row-6
  const wordFour = [...document.getElementsByClassName('word-four')]; // row-7
  const wordFive2 = [...document.getElementsByClassName('word-five-2')]; // row-7
  const wordTwo = [...document.getElementsByClassName('word-two')]; // row-7
  const wordEight = [...document.getElementsByClassName('word-eight')]; // row-8
  const wordEleven = [...document.getElementsByClassName('word-eleven')]; // row-8
  const wordSeven = [...document.getElementsByClassName('word-seven')]; // row-9
  const wordTwelve = [...document.getElementsByClassName('word-twelve')]; // row-9
  const wordTen2 = [...document.getElementsByClassName('word-ten-2')]; // row-10
  const wordOclock = [...document.getElementsByClassName('word-oclock')]; // row-10

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [noon, setNoon] = useState(false);

  function getTime() {
    const date = new Date();
    let hoursTmp = date.getHours();
    let minutesTmp = date.getMinutes();

    if (minutesTmp > 37) {
      hoursTmp = hoursTmp + 1;
    }

    if (hoursTmp > 12) {
      hoursTmp = hoursTmp - 12;
      setNoon(true);
    }

    setHours(hoursTmp);
    setMinutes(minutesTmp);
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getTime();
  //   }, 2000);

  //   return () => clearInterval(interval);
  // },[]);

  useEffect(() => {
    getTime();
  },[]);

  // if (noon) {
  //   wordPm.forEach(element => {
  //     element.classList.toggle('am-pm');
  //   });  
  // } else {
  //   wordAm.forEach(element => {
  //     element.classList.toggle('am-pm');
  //   });
  // }

  wordIt.forEach(element => {
    element.classList.toggle('on');
  });

  wordIs.forEach(element => {
    element.classList.toggle('on');
  });

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
      wordFive2.forEach(element => {
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
      wordFive1.forEach(element => {
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
      wordFive1.forEach(element => {
        element.classList.toggle('on');
      });
      wordTo.forEach(element => {
        element.classList.toggle('on');
      });
      break;
  }

  return (
    <div className="App">    
      <header className="header"><h1>Clock Work</h1></header>

      <table className="square">
        <tbody>
          <tr className="row row-1 ">
            <td className="cell word-it">i</td>
            <td className="cell word-it">t</td>
            <td className="cell">l</td>
            <td className="cell word-is">i</td>
            <td className="cell word-is">s</td>
            <td className="cell">a</td>
            <td className="cell">s</td>
            <td className="cell word-am">a</td>
            <td className="cell word-am">m</td>
            <td className="cell word-pm">p</td>
            <td className="cell word-pm">m</td>
          </tr>
          <tr className="row row-2 ">
            <td className="cell">a</td>
            <td className="cell">c</td>
            <td className="cell word-quarter">q</td>
            <td className="cell word-quarter">u</td>
            <td className="cell word-quarter">a</td>
            <td className="cell word-quarter">r</td>
            <td className="cell word-quarter">t</td>
            <td className="cell word-quarter">e</td>
            <td className="cell word-quarter">r</td>
            <td className="cell">d</td>
            <td className="cell">c</td>
          </tr>
          <tr className="row row-3">
            <td className="cell word-twenty word-twenty-five">t</td>
            <td className="cell word-twenty word-twenty-five">w</td>
            <td className="cell word-twenty word-twenty-five">e</td>
            <td className="cell word-twenty word-twenty-five">n</td>
            <td className="cell word-twenty word-twenty-five">t</td>
            <td className="cell word-twenty word-twenty-five">y</td>
            <td className="cell">x</td> 
            <td className="cell word-five-1 word-twenty-five">f</td>
            <td className="cell word-five-1 word-twenty-five">i</td>
            <td className="cell word-five-1 word-twenty-five">v</td>
            <td className="cell word-five-1 word-twenty-five">e</td> 
              
          </tr>
          <tr className="row row-4">
            <td className="cell word-half">h</td>
            <td className="cell word-half">a</td>
            <td className="cell word-half">l</td>
            <td className="cell word-half">f</td>
            <td className="cell">b</td>
            <td className="cell word-ten-1">t</td>
            <td className="cell word-ten-1">e</td>
            <td className="cell word-ten-1">n</td>
            <td className="cell">f</td>
            <td className="cell word-to">t</td>
            <td className="cell word-to">o</td>
          </tr>
          <tr className="row row-5">
            <td className="cell word-past">p</td>
            <td className="cell word-past">a</td>
            <td className="cell word-past">s</td>
            <td className="cell word-past">t</td>
            <td className="cell">e</td>
            <td className="cell">r</td>
            <td className="cell">u</td>
            <td className="cell word-nine">n</td>
            <td className="cell word-nine">i</td>
            <td className="cell word-nine">n</td>
            <td className="cell word-nine">e</td>
          </tr>
          <tr className="row row-6">
            <td className="cell word-one">o</td>
            <td className="cell word-one">n</td>
            <td className="cell word-one">e</td>
            <td className="cell word-six">s</td>
            <td className="cell word-six">i</td>
            <td className="cell word-six">x</td>
            <td className="cell word-three">t</td>
            <td className="cell word-three">h</td>
            <td className="cell word-three">r</td>
            <td className="cell word-three">e</td>
            <td className="cell word-three">e</td>
          </tr>
          <tr className="row row-7">
            <td className="cell word-four">f</td>
            <td className="cell word-four">o</td>
            <td className="cell word-four">u</td>
            <td className="cell word-four">r</td>
            <td className="cell word-five-2">f</td>
            <td className="cell word-five-2">i</td>
            <td className="cell word-five-2">v</td>
            <td className="cell word-five-2">e</td>
            <td className="cell word-two">t</td>
            <td className="cell word-two">w</td>
            <td className="cell word-two">o</td>
          </tr>
          <tr className="row row-8">
            <td className="cell word-eight">e</td>
            <td className="cell word-eight">i</td>
            <td className="cell word-eight">g</td>
            <td className="cell word-eight">h</td>
            <td className="cell word-eight">t</td>
            <td className="cell word-eleven">e</td>
            <td className="cell word-eleven">l</td>
            <td className="cell word-eleven">e</td>
            <td className="cell word-eleven">v</td>
            <td className="cell word-eleven">e</td>
            <td className="cell word-eleven">n</td>
          </tr>
          <tr className="row row-9">
            <td className="cell word-seven">s</td>
            <td className="cell word-seven">e</td>
            <td className="cell word-seven">v</td>
            <td className="cell word-seven">e</td>
            <td className="cell word-seven">n</td>
            <td className="cell word-twelve">t</td>
            <td className="cell word-twelve">w</td>
            <td className="cell word-twelve">e</td>
            <td className="cell word-twelve">l</td>
            <td className="cell word-twelve">v</td>
            <td className="cell word-twelve">e</td>
          </tr>
          <tr className="row row-10">
            <td className="cell word-ten-2">t</td>
            <td className="cell word-ten-2">e</td>
            <td className="cell word-ten-2">n</td>
            <td className="cell">s</td>
            <td className="cell">e</td>
            <td className="cell word-oclock">o'</td>
            <td className="cell word-oclock">c</td>
            <td className="cell word-oclock">l</td>
            <td className="cell word-oclock">o</td>
            <td className="cell word-oclock">c</td>
            <td className="cell word-oclock">k</td>
          </tr>
        </tbody>
      </table>

      <footer className="footer">
        <p>
          Inspired by <a href="https://qlocktwo.com/ww/">QLOCKTWO</a>.
          Made by <a href="https://github.com/bencubin">Bencubin</a>,
          with awesome font from <a href="https://shriftovik.com/">Shriftovik</a>
        </p>
      </footer>
    </div>
  );
}

export default App;