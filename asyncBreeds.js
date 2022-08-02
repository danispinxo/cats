const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) functionToRunWhenThingsAreDone(data);

    if (error) functionToRunWhenThingsAreDone(undefined);
  });
};

module.exports = breedDetailsFromFile;