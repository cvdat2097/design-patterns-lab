class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {}
}

class StartCommand extends Command {
  execute() {
    this.receiver.start();
  }
}

class StopCommand extends Command {
  execute() {
    this.receiver.stop();
  }
}

module.exports = {
  StartCommand,
  StopCommand,
};
