'use strict';

var allProducts = [];
// var currentImages = [];
var prevImages = [];
var clicks = 0;

function Products(name, filepath, clickCount, appearCount) {
  this.name = name;
  this.filepath = filepath;
  this.clickCount = clickCount;
  this.appearCount = appearCount;
  allProducts.push(this);
}

function productGenerator() {
  new Products('R2-D2 Bag', 'img/bag.jpg', 0, 0);
  new Products('Banana Slicer', 'img/banana.jpg', 0, 0);
  new Products('Bathroom Tablet', 'img/bathroom.jpg', 0, 0);
  new Products('Toeless Boots', 'img/boots.jpg', 0, 0);
  new Products('Breakfast All-In-One', 'img/breakfast.jpg', 0, 0);
  new Products('Meatball Bubble Gum', 'img/bubblegum.jpg', 0, 0);
  new Products('Uncomfortable Chair', 'img/chair.jpg', 0, 0);
  new Products('Cthulhu Doll', 'img/cthulhu.jpg', 0, 0);
  new Products('Dog-Duck Mask', 'img/dog-duck.jpg', 0, 0);
  new Products('Dragon Meat', 'img/dragon.jpg', 0, 0);
  new Products('Cutlery Pen Set', 'img/pen.jpg', 0, 0);
  new Products('Pet Sweep', 'img/pet-sweep.jpg', 0, 0);
  new Products('Tauntaun Sleeping Bag', 'img/tauntaun.jpg', 0, 0);
  new Products('Unicorn Meat', 'img/unicorn.jpg', 0, 0);
  new Products('Tenticle USB', 'img/usb.gif', 0, 0);
  new Products('Useless Water Can', 'img/water-can.jpg', 0, 0);
  new Products('Bad Wine Glass', 'img/wine-glass.jpg', 0, 0);
}
productGenerator();

// Assigning variables to html ids

var images = document.getElementById('images');
var pics = [document.getElementById('product1'), document.getElementById('product2'), document.getElementById('product3')];
var tally = document.getElementById('tally');

// imgEl1.addEventListener('click', randProduct);
// imgEl2.addEventListener('click', randProduct);
// imgEl3.addEventListener('click', randProduct);

function randImg() {
  return Math.floor(Math.random() * allProducts.length);
}

function randProduct() {
  var currentImages = [];
  currentImages[0] = randImg();
  while (currentImages[0] === currentImages[1] || currentImages[0] === currentImages[2] || prevImages.indexOf(currentImages[0]) !== -1) {
    currentImages[0] = randImg();
  }

  currentImages[1] = randImg();
  while (currentImages[1] === currentImages[2] || prevImages.indexOf(currentImages[1]) !== -1) {
    currentImages[1] = randImg();
  }

  currentImages[2] = randImg();
  while (prevImages.indexOf(currentImages[2]) !== -1) {
    currentImages[2] = randImg();
  }

  for(var j = 0; j < 3; j++) {
    pics[j].src = allProducts[currentImages[j]].filepath;
    pics[j].id = allProducts[currentImages[j]].name;
    allProducts[currentImages[j]].appearCount ++;
    prevImages[j] = currentImages[j];
  }
  // var randIndex1 = Math.floor(Math.random() * allProducts.length);
  // var randIndex2 = Math.floor(Math.random() * allProducts.length);
  // var randIndex3 = Math.floor(Math.random() * allProducts.length);

  // imgEl1.src = allProducts[randIndex1].filepath;
  // imgEl2.src = allProducts[randIndex2].filepath;
  // imgEl3.src = allProducts[randIndex3].filepath;

  // allProducts[randIndex1].appearCount ++;
  // allProducts[randIndex2].appearCount ++;
  // allProducts[randIndex3].appearCount ++;

  // currentImages.push(imgEl1.src);
  // currentImages.push(imgEl2.src);
  // currentImages.push(imgEl3.src);
  // prevImages.push(currentImages);

  console.log(currentImages);
  clicks++;
  // console.log(prevImages);
  if (clicks === 25) {
    // allProducts[randIndex1].appearCount --;
    // allProducts[randIndex2].appearCount --;
    // allProducts[randIndex3].appearCount --;
    makeTableHeader();
    makeTableRow();
    images.parentNode.removeChild(images);
  }
}
randProduct();

// functions to generate table of results

function makeTableHeader() {
  var thEl = document.createElement('tr');
  var trEl = document.createElement('tr');
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.textContent = 'Times picked';
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.textContent = 'Times shown';
  trEl.appendChild(thEl);
  tally.appendChild(trEl);
}

function makeTableRow() {
  for (var j = 0; j < allProducts.length; j++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allProducts[j].name;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = allProducts[j].clickCount;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = allProducts[j].appearCount;
    trEl.appendChild(tdEl);
    tally.appendChild(trEl);
  }
}