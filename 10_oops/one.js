function Car(name, cc, company) {
  this.name = name;
  this.cc = cc;
  this.company = company;

  this.display = function () {
    console.log(`Car Info: ${this.company} ${this.name} - ${this.cc}cc`);
  };

  return this;
}

const carA = new Car("Create", "Hyundai", 1500);
// console.log(carA);
// const carB = new Car("XUV", "Mahendra", 1700);
// console.log(carB);
// carA.display();

// Using arrow function

const ArrowCar = (name, cc, company) => {
  this.name = name;
  this.cc = cc;
  this.company = company;

  this.display = function () {
    console.log(`Car Info: ${this.company} ${this.name} - ${this.cc}cc`);
  };

  return this;
};

const arrowCarA = new ArrowCar("XUV", "Mahendra", 1700);
// const arrowCarB = new ArrowCar("Nexon", "Tata", 1200);
console.log(arrowCarA);
// console.log(arrowCarB);
arrowCarA.display();
// arrowCarB.display();
