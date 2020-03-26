let nShirtCreated = 0;

class Shirt {
  constructor(color, size) {
    this.color = color;
    this.size = size;

    nShirtCreated++;
  }

  report() {
    console.log(`Shirt ${this.color} - Size ${this.size}`);
  }
}

function run() {
  const colors = ['RED', 'GREEN', 'BLUE'];
  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  for (const color of colors) {
    for (const size of sizes) {
      const shirt = new Shirt(color, size);
      shirt.report();
    }
  }

  console.log(`Shirt instances created: ${nShirtCreated}`);
}

module.exports = {
  run,
};
