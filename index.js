let motorcycle = {
    color: "black",
    gauge: 1
};

let motorcycle = {
    color: "black",
    gauge: 1
  };
console.log(motorcycle.color);

let motorcycle = {
    color: "black",
    gauge: 1,
    sayColor: function() {return "The motorcycle color is " + motorcycle.color + ".";}
}
  motorcycle.sayColor();

let motorcycle = {
    color: "black",
    gauge: 1,
    sayColor: function() {return "The motorcycle color is " + this.color + ".";}
};


function Bikes() {
    this.name = "Suzuki";
    this.year = 2007;
    this.color = "white";
};

function Bikes() {
    this.name = "Suzuki";
    this.year = 2007;
    this.color = "white";
    }
let suzukiBikes = new Bikes();

function Bikes(year, color, name) {
    this.year = year;
    this.color = color;
    this.name = name;
    
  }
  let suzuki = new Bikes("Suzuki", 2007, "white");


function suzukiBikes(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
    
  }
  let suzuki = new Bikes("Suzuki", 2007, "white");


  suzuki instanceof Bikes;


function Bikes(name) {
    this.name = name;
    this.year = year;
    this.color = color;
    
  }
  let suzuki = new Bikes("Suzuki");
  let yamaha= new Bikes("Yamaha");

let ownProps = [];

for (let property in R) {
  if(r.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);


Bikes.prototype.numWheels = 2;

console.log(Suzuki.numLegs);
console.log(Yamaha.numLegs);