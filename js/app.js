'use strict';

//Global Variables
let totalClicks = 0;
let clickAllowed = 25;
let allThings =[];
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');
console.log(imageThree);

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
new Thing('sweep');
new Thing('tauntaun');
new Thing('unicorn');
new Thing('water-can');
new Thing('wine-glass');

function getRandomIndex() {
  return Math.floor(Math.random() * allThings.length);
}

function renderThing() {
  let firstThingIndex = getRandomIndex();
  let secondThingIndex = getRandomIndex();
  let thirdThingIndex = getRandomIndex();
}