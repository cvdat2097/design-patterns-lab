// Interface
class HelperInterface {
  action() {}
}

class FirstLayer extends HelperInterface {
  CURRENT_LAYER_NO = 1;

  constructor(nextLayer) {
    super();
    this.nextLayer = nextLayer;
  }

  action(layerNo) {
    if (layerNo === this.CURRENT_LAYER_NO) {
      console.log('LAYER 1 ACTION');
    } else {
      this.nextLayer.action(layerNo);
    }
  }
}

class MidLayer extends HelperInterface {
  CURRENT_LAYER_NO = 2;

  constructor(nextLayer) {
    super();
    this.nextLayer = nextLayer;
  }

  action(layerNo) {
    if (layerNo === this.CURRENT_LAYER_NO) {
      console.log('LAYER 2 ACTION');
    } else {
      this.nextLayer.action(layerNo);
    }
  }
}

class LastLayer extends HelperInterface {
  constructor() {
    super();
  }

  action() {
    console.log('LAST LAYER ACTION');
  }
}

module.exports = {
  FirstLayer,
  MidLayer,
  LastLayer,
};
