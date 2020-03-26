let nShirtCreated = 0;

// Intrinsic (shareable property): color
// extrinsic: size
class FlyweightShirt {
  constructor(color) {
    this.color = color;

    nShirtCreated++;
  }

  report(size) {
    console.log(`Shirt ${this.color} - Size ${size}`);
  }
}

class FlyweightFactoryShirt {
  constructor() {
    this.pool = {};
  }

  getFlyweightShirt(color) {
    if (!this.pool[color]) {
      this.pool[color] = new FlyweightShirt(color);
    }
    return this.pool[color];
  }
}

function run() {
  const factory = new FlyweightFactoryShirt();
  const colors = ['RED', 'GREEN', 'BLUE'];
  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  for (const color of colors) {
    for (const size of sizes) {
      factory.getFlyweightShirt(color).report(size);
    }
  }

  console.log(`Shirt instances created: ${nShirtCreated}`);
}

module.exports = {
  run,
};
