import createElement from "../../Utility.js";

// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  let header = createElement('div', 'header'),
      date = createElement('span', 'date', 'SMARCH 28, 2019'),
      title = createElement('h1', null, 'Lambda Times'),
      temp = createElement('span', 'temp', '98°'),
      headerContainer = document.querySelector('.header-container');
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);
  headerContainer.appendChild(header);
}

Header();
