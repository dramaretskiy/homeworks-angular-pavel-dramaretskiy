class ToBinary {
  constructor() {
    this.radix = 2;
  }

  toSystem(value) {
    return value.toString(this.radix);
  }

  fromSystem(value) {
    return parseInt(value, this.radix);
  }
}

class ToHexal {
  constructor() {
    this.radix = 8;
  }

  toSystem(value) {
    return value.toString(this.radix);
  }

  fromSystem(value) {
    return parseInt(value, this.radix);
  }
}

class ToHexidecimal {
  constructor() {
    this.radix = 16;
  }

  toSystem(value) {
    return value.toString(this.radix);
  }

  fromSystem(value) {
    return parseInt(value, this.radix);
  }
}

const binary = new ToBinary();
console.log("from Decimal to Binary:", binary.toSystem(777));
console.log("from Binary to Decimal", binary.fromSystem("1100001001"));

const hexal = new ToHexal();
console.log("from Decimal to Hexal:", hexal.toSystem(100));
console.log("from Hexal to Decimal:", hexal.fromSystem("144"));

const hexidecimal = new ToHexidecimal();
console.log("from Decimal to Hexidecimal:", hexidecimal.toSystem(123456789));
console.log("from Hexidecimal to Decimal", hexidecimal.fromSystem("75bcd15"));
