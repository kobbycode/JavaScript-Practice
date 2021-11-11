function Book(tittle, author, ISBN, numCopies) {
  this.tittle = tittle;
  this.author = author;
  this.ISBN = ISBN;
  this.numCopies = numCopies;
}

Book.prototype.getAvailability = function () {
  if (this.numCopies === 0) {
    return 'Out of Stock';
  } else if (this.numCopies < 10) {
    return 'Few in Stock';
  }
  return 'In Stock';
};

Book.prototype.sell = function (numOfCopiesSold = 1) {
  this.numCopies -= numOfCopiesSold;
};

Book.prototype.stock = function (numOfCopiesStocked = 5) {
  this.numCopies += numOfCopiesStocked;
};

const LightCalling = new Book('Light Calling', 'Kobby Debrah', 145687, 5);

console.log(LightCalling.getAvailability());
LightCalling.stock(12);

console.log(LightCalling.getAvailability());
LightCalling.sell(17);

console.log(LightCalling.getAvailability());
