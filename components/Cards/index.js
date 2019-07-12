import createElement from "../../Utility.js";

//let axios = require('axios');

// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let backend_url = 'https://lambda-times-backend.herokuapp.com/articles';

axios.get(backend_url).then(request => {
  articleComponent(request);
}).catch(e => {
  console.log(e);
});

function articleComponent(promise) {
  let cards_container = document.querySelector('.cards-container');
  console.log(promise.data.articles.javascript[0].authorPhoto);
  for(let entry in promise.data.articles) {
    let array = promise.data.articles[entry];
    array.forEach(section => {
      let card = createElement('div', 'card'),
          headline = createElement('div', 'headline', section.headline),
          author = createElement('div', 'author'),
          img_container = createElement('div', 'img-container'),
          img = createElement('img'),
          by = createElement('span', null, `By ${section.authorName}`);
      img_container.appendChild(img);
      img.src = section.authorPhoto;
      card.appendChild(headline);
      card.appendChild(author);
      author.appendChild(img_container);
      author.appendChild(by);
      cards_container.appendChild(card);
    });
  }
}
