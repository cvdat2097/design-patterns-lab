const { Bike, Car } = require('./receiver');
const { StartCommand, StopCommand } = require('./command');
const { Invoker } = require('./invoker');

function run() {
  const bike = new Bike();
  const car = new Car();

  const invoker = new Invoker();
  invoker.addCommand(new StartCommand(bike));
  invoker.addCommand(new StopCommand(bike));
  invoker.addCommand(new StartCommand(car));
  invoker.addCommand(new StartCommand(car));

  invoker.execute();
}

module.exports = {
  run,
};
