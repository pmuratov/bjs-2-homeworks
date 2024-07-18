function parseCount(parseValue) {
  let result = Number.parseFloat(parseValue);
  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  } else {
    return result;
  }
}

function validateCount(parseValue) {
  try {
    return parseCount(parseValue);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a > b + c || b > a + c || c > b + a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    const p = this.perimeter * 0.5;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +(s.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}

let triangle = new Triangle(2, 5, 5);
let funcTriangle = getTriangle(10, 10, 10);

console.log(triangle, "   ", triangle.area, "   ", triangle.perimeter);
console.log(
  funcTriangle,
  "   ",
  funcTriangle.area,
  "   ",
  funcTriangle.perimeter
);
