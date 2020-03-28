class Monitor {
  display() {}
  flash() {}
}

class RealMonitor extends Monitor {
  display() {
    console.log('Displaying something');
  }

  flash() {
    console.log('Flashing the screen');
  }
}

class ProxyMonitor extends Monitor {
  constructor(monitor) {
    super();
    this.monitor = monitor;
  }

  display() {
    console.log('Doing extra work to get the real monitor');
    this.monitor.display();
  }

  flash() {
    console.log('Doing extra stuff...');
    this.monitor.flash();
  }
}

// =================
function run() {
  const monitor = new ProxyMonitor(new RealMonitor());
  monitor.display();
  monitor.flash();
}

module.exports = {
  run,
};
