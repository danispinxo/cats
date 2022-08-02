const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // <<here, rather than returning the data, the function will pass data to the callback function functionToRunWhenThingsAreDone, which is a parameter of breedDetailsFromFile>>
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // <<and now this is a whole separate function rather than just calling the same file retrieval function on the breed, which will be used as a callback function on breedDetailsFromFile
};

breedDetailsFromFile('Bombay', printOutCatBreed); // << so we call breedDetailsFromFile with TWO arguments, one is the breed, and the other is the print function