class Observable {
  constructor() {
    this.observers = new Set();
  }

  subscribe(observer) {
    this.observers.add(observer);
  }

  unsubscribe(observer) {
    this.observers.delete(observer);
  }

  notifyObservers(event, payload) {
    for (const observer of this.observers) {
      observer.onNotify(event, payload);
    }
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  onNotify(event, payload = null) {
    console.log(`${this.name}: received ${event}`);
  }
}

module.exports = {
  Observable,
  Observer,
};
