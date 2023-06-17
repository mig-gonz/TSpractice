// coordinates needed throughout app
// --> coords take 2 points lon and lat

// positive lat is north and negative is south
// positive lon is west and negative east

// When coding with coordinates, how do you think you would want to work with them in JavaScript?

const numArr: number[] = [16.7666, 3.0026]; // normal array

const timbuktu: [number, number] = [16.7666, 3.0026]; // tuple

enum Coords { // enum
  Latitude = 16.7666,
  Longitude = 3.0026,
}

const coordinates: { lat: number; long: number } = {
  // object
  lat: 16.7666,
  long: 3.0026,
};

interface Coordinates {
  // interface
  lat: number;
  long: number;
}

const timBukTu: Coordinates = { lat: 16.7666, long: 3.0026 };

type NewCoordinates = {
  // alias
  lat: number;
  long: number;
};

const newTimbuktu: NewCoordinates = { lat: 16.7666, long: 3.0026 };

console.log(newTimbuktu.lat);
console.log(newTimbuktu.long);
// console.log(Coords.Latitude);

/*Using an alias, such as the NewCoordinates type, 
would be the best way to store and use coordinate data throughout the application
because it provides a clear and self-descriptive name for the type,
making the code more readable and maintainable. Additionally, by using an alias,
we can easily reuse the type definition in multiple places, 
promoting consistency and reducing the chances of errors. */
