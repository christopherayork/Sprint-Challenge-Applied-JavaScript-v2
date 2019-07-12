import createElement from "../../Utility.js";
//const axios = require('axios');

// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const backend_url = 'https://lambda-times-backend.herokuapp.com/topics';

axios.get(backend_url).then(request => {
  tabComponent(request);
}).catch(e => {
  console.log(e);
});

function tabComponent(promise) {
  let topics = document.querySelector('.topics');
  promise.data.topics.forEach(topic => {
    let element = createElement('div', 'tab', topic);
    topics.appendChild(element);
  });
}