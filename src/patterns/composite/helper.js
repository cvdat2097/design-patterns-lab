function getPadding(level) {
  let padding = '';
  for (let i = 0; i < level; i++) {
    padding += '    ';
  }
  return padding;
}

module.exports = {
  getPadding,
};
