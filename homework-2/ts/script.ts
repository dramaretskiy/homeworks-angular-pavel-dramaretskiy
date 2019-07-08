interface Converter {
  toSystem(value: number): string;
  fromSystem(value: string): number;
}

class ToBinary implements Converter {
  private radix: number = 2;

  toSystem(value: number): string {
    return value.toString(this.radix);
  }
  fromSystem(value: string): number {
    return parseInt(value, this.radix);
  }
}

class ToHexal implements Converter {
  private radix: number = 8;

  toSystem(value: number): string {
    return value.toString(this.radix);
  }
  fromSystem(value: string): number {
    return parseInt(value, this.radix);
  }
}

class ToHexidecimal implements Converter {
  private radix: number = 16;

  toSystem(value: number): string {
    return value.toString(this.radix);
  }
  fromSystem(value: string): number {
    return parseInt(value, this.radix);
  }
}

const binary: ToBinary = new ToBinary();
const hexal: ToHexal = new ToHexal();
const hexidecimal: ToHexidecimal = new ToHexidecimal();

console.log("from Decimal to Binary:", binary.toSystem(777));
console.log("from Binary to Decimal", binary.fromSystem("1100001001"));

console.log("from Decimal to Hexal:", hexal.toSystem(100));
console.log("from Hexal to Decimal:", hexal.fromSystem("144"));

console.log("from Decimal to Hexidecimal:", hexidecimal.toSystem(123456789));
console.log("from Hexidecimal to Decimal", hexidecimal.fromSystem("75bcd15"));
