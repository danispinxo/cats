// synchronous function to fetch a cat breed
const breedDetails = function(breed) {
  // can simply return it
  return catBreeds[breed];
};

//get the return value right away from the function
const bombay = breedDetails('Bombay');
console.log(bombay);