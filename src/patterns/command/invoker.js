class Invoker {
  commands = [];

  addCommand(command) {
    this.commands.push(command);
  }

  execute() {
    this.commands.forEach(c => c.execute());
  }
}

module.exports = {
  Invoker,
};
