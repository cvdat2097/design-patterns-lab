class Fan {
  currentState = null;

  constructor(currentState) {
    this.currentState = currentState;
  }

  next() {
    this.currentState.forward(this);
    this.currentState.print();
  }

  back() {
    this.currentState.backward(this);
    this.currentState.print();
  }

  setState(newState) {
    this.currentState = newState;
  }
}

// Interface
class State {
  print() {}
  forward() {}
  backward() {}
}

class LowSpeed extends State {
  print() {
    console.log('Running in LOW mode');
  }

  forward(fan) {
    fan.setState(new HighSpeed());
  }

  backward(fan) {
    fan.setState(new Off());
  }
}

class HighSpeed extends State {
  print() {
    console.log('Running in HIGH mode');
  }

  forward(fan) {
    fan.setState(new Off());
  }

  backward(fan) {
    fan.setState(new LowSpeed());
  }
}

class Off extends State {
  print() {
    console.log('The fan is NOT RUNNING');
  }

  forward(fan) {
    fan.setState(new LowSpeed());
  }

  backward(fan) {
    fan.setState(new HighSpeed());
  }
}

// =======================
function run() {
  const fan = new Fan(new Off());
  fan.next();
  fan.back();
  fan.next();
  fan.next();
  fan.next();
  fan.back();
  fan.next();
}

module.exports = {
  run,
};
