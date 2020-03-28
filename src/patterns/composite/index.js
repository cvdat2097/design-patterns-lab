const helper = require('./helper');

// Interface
class FileComponent {
  constructor(name) {
    this.name = name;
  }

  traverse(level = 0) {}
}

class File extends FileComponent {
  constructor(name) {
    super(name);
  }

  traverse(level = 0) {
    const padding = helper.getPadding(level);
    console.log(`${padding}File: ${this.name}`);
  }
}

class Folder extends FileComponent {
  fileComponents = [];

  constructor(name) {
    super(name);
  }

  addFileComponent(fileComponent) {
    this.fileComponents.push(fileComponent);
  }

  traverse(level = 0) {
    const padding = helper.getPadding(level);
    console.log(`${padding}Folder: ${this.name}`);
    for (const component of this.fileComponents) {
      component.traverse(level + 1);
    }
  }
}

function run() {
  const file1 = new File('a.txt');
  const file2 = new File('b.txt');
  const file3 = new File('c.txt');
  const file4 = new File('d.txt');

  const folder1 = new Folder('books');
  const folder2 = new Folder('images');
  const folder3 = new Folder('src');

  folder1.addFileComponent(folder2);
  folder1.addFileComponent(file1);
  folder2.addFileComponent(file2);
  folder2.addFileComponent(file3);
  folder2.addFileComponent(folder3);
  folder3.addFileComponent(file4);

  folder1.traverse();
}

module.exports = {
  run,
};
