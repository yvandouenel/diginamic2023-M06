class Bike {
  static seat_number = 1;
  constructor(brand, model, weight) {
    this.brand = brand;
    this.model = model;
    this.weight = weight;
  }
  pedal() {
    console.log(`Je pédale sur ${Bike.seat_number} siège`);
  }
}

class Tandem extends Bike {
  static seat_number = 2;
  constructor(brand, model, weight, color) {
    super(brand, model, weight);
    this.color = color;
  }
  pedal() {
    console.log(`Nous sommes ${Tandem.seat_number} à pédaler sur notre tandem ${this.color}`);
  }
}

const bike1 = new Bike("Decth", "zzz", 12);
const tandem1 = new Tandem("Spe", "aaa", 6, "rouge");

bike1.pedal();
tandem1.pedal();