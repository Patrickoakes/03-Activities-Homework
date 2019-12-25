var car = {
  make: "Honda",
  model: "Fit",
  color: "Blue Raspberry",
  mileage: 3000,
  isWorking: true,

  driveToWork: function() {
    alert("Old Mileage: " + this.mileage);

    this.mileage = this.mileage + 8;

    alert("New mileage: " + this.mileage);
  },

  driveAroundWorld: function() {
    alert("Old Mileage: " + this.mileage);

    this.mileage = this.mileage + 24000;

    alert("New Mileage: " + this.mileage);
    alert("Car needs a tuneup!");

    this.isWorking = false;
  },

  getTuneUp: function() {
    alert("Car is ready to go!");
    this.isWorking = true;
  },

  honk: function() {
    alert("Honk! Honk!");
  }
};

// How would we log...

console.log(car.make);

// The car's make?

console.log(car.model);
// The car's model?
console.log(car.mileage);
// The car's mileage?

// How would we run the car's driveToWork method?
car.driveToWork();
// How would we run the car's driveAroundWorld method?
car.driveAroundWorld();
// How would we run the getTuneUp method?
car.getTuneUp();