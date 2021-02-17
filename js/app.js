'use strict';

//Global Variables
let totalClicks = 0;
let clickAllowed = 25;
let allThings = [];
let indexArray = [];
let imageCount = 6;
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');
let myContainer = document.querySelector('section');
let myButton = document.querySelector('div');
// console.log(imageThree);

function Thing(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  allThings.push(this);
}

new Thing('banana');
new Thing('usb', 'gif');
new Thing('bag');
new Thing('bathroom');
new Thing('boots');
new Thing('breakfast');
new Thing('chair');
new Thing('cthulhu');
new Thing('dog-duck');
new Thing('dragon');
new Thing('pen');
new Thing('pet-sweep');
new Thing('scissors');
new Thing('shark');
new Thing('sweep', 'png');
new Thing('tauntaun');
new Thing('unicorn');
new Thing('water-can');
new Thing('wine-glass');

function getRandomIndex() {
  return Math.floor(Math.random() * allThings.length);
}

function renderThing() {
  while (indexArray.length < imageCount) {
    let randomIndex = getRandomIndex();
    while (!indexArray.includes(randomIndex)) {
      indexArray.push(randomIndex);

    }

  }

  let firstThingIndex = indexArray.shift();
  let secondThingIndex = indexArray.shift();
  let thirdThingIndex = indexArray.shift();

  imageOne.src = allThings[firstThingIndex].src;
  imageOne.title = allThings[firstThingIndex].name;
  allThings[firstThingIndex].views++;

  imageTwo.src = allThings[secondThingIndex].src;
  imageTwo.title = allThings[secondThingIndex].name;
  allThings[secondThingIndex].views++;

  imageThree.src = allThings[thirdThingIndex].src;
  imageThree.title = allThings[thirdThingIndex].name;
  allThings[thirdThingIndex].views++;
}


function handleClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image and only an image');
  }

  totalClicks++;
  let allClicked = event.target.title;

  for (let i = 0; i < allThings.length; i++) {
    if (allClicked === allThings[i].name) {
      allThings[i].clicks++;
    }
  }
  renderThing();
  if (totalClicks === clickAllowed) {
    myContainer.removeEventListener('click', handleClick);
    renderChart();
  }
}

renderThing();


function renderChart() {
  let thingNames = [];
  let thingViews = [];
  let thingClicks = [];
  for (let i = 0; i < allThings.length; i++) {
    thingNames.push(allThings[i].name);
    thingViews.push(allThings[i].views);
    thingClicks.push(allThings[i].clicks);
  }
  console.log('thingNames: ', thingNames);
  console.log('thingViews: ', thingViews);
  console.log('thingClicks: ', thingClicks);
  
  let ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  // let myChart = new Chart(ctx);
}
myContainer.addEventListener('click', handleClick);

