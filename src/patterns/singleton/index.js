class SuperHeavyWindow {
  static instance = null;

  static getInstance() {
    if (!this.instance) {
      this.instance = new SuperHeavyWindow();
    }
    return this.instance;
  }

  constructor() {
    console.log('Window instance is created!');
  }

  display() {
    console.log('Window displayed on the screen!');
  }
}

function run() {
  let instance = null;
  instance = SuperHeavyWindow.getInstance();
  instance = SuperHeavyWindow.getInstance();
  instance = SuperHeavyWindow.getInstance();
  instance = SuperHeavyWindow.getInstance();
  instance = SuperHeavyWindow.getInstance();
  instance = SuperHeavyWindow.getInstance();

  instance.display();
}

module.exports = {
  run,
};
