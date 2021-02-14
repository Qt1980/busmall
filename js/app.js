'use strict';

//Global Variables
let totalClicks = 0;
let clickAllowed = 25;
let allThings =[];
let indexArray = [];
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
new Thing('bad');
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
  // console.log(!array1.includes(2));
  while(indexArray.length < 3) {
    let randomIndex = getRandomIndex();
    while(!indexArray.includes(randomIndex)) {
      indexArray.push(randomIndex);

    }

  }

  let firstThingIndex = indexArray.pop();
  let secondThingIndex = indexArray.pop();
  let thirdThingIndex = indexArray.pop();

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

function renderResults() {
  let mylist = document.querySelector('ul');
  for(let i = 0; i < allThings.length; i++);{
    let li = document.createElement('li');
    li.textContent - `${allThings[i].name} had ${allThings[i].views} votes, and was seen ${allThings[i].clicks} times`;
    mylist.appendChild(li);
  }
}

function handleClick(event) {
  if (event.target === myContainer){
    alert('Please follow instructions and click an image');
  }
}

totalClicks++;
let allClicked = event.target.title;

for (let i = 0; i < allThings.length; i++){
  if(allClicked === allThings[i].name) {
    allThings[i].clicks++;
  }
}
renderThing();
if (totalClicks === clickAllowed) {
  myContainer.removeEventListener('click', handleClick);
}

function handleButtonClick(event){
  if(totalClicks === clickAllowed){
    renderResults();
  }
}

renderThing();


myContainer.addEventListener('click', handleClick);
myButton.addEventListener('click', handleButtonClick);
