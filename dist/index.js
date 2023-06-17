"use strict";
// coordinates needed throughout app
// --> coords take 2 points lon and lat
// positive lat is north and negative is south
// positive lon is west and negative east
// When coding with coordinates, how do you think you would want to work with them in JavaScript?
const numArr = [16.7666, 3.0026]; // normal array
const timbuktu = [16.7666, 3.0026]; // tuple
var Coords;
(function (Coords) {
    Coords[Coords["Latitude"] = 16.7666] = "Latitude";
    Coords[Coords["Longitude"] = 3.0026] = "Longitude";
})(Coords || (Coords = {}));
const coordinates = {
    // object
    lat: 16.7666,
    long: 3.0026,
};
const timBukTu = { lat: 16.7666, long: 3.0026 };
const newTimbuktu = { lat: 16.7666, long: 3.0026 };
console.log(newTimbuktu.lat);
console.log(newTimbuktu.long);
// console.log(Coords.Latitude);
/*Using an alias, such as the NewCoordinates type,
would be the best way to store and use coordinate data throughout the application
because it provides a clear and self-descriptive name for the type,
making the code more readable and maintainable. Additionally, by using an alias,
we can easily reuse the type definition in multiple places,
promoting consistency and reducing the chances of errors. */
