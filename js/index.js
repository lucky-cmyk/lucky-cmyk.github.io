(function () {
  class DevicePixelRatio {
    constructor() {
      this.flag = false;
    }
    _getSystem() {
      let flag = false;
      var agent = navigator.userAgent.toLowerCase();
      if (agent.indexOf("windows") >= 0) {
        return true;
      }
    }
    _addHandler(element, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false);
      } else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
      } else {
        element["on" + type] = handler;
      }
    }
    _correct() {
      let t = this;
      document.getElementsByTagName("body")[0].style.zoom =
        1 / window.devicePixelRatio;
    }
    _watch() {
      let t = this;
      t._addHandler(window, "resize", function () {
        t._correct();
      });
    }
    init() {
      let t = this;
      if (t._getSystem()) {
        t._correct();
        t._watch();
      }
    }
  }
  new DevicePixelRatio().init();
})();
