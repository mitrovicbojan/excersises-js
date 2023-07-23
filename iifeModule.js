let countryModule = (function () {
  return {
    flagMixin: function (obj) {
      obj.flag = function () {
        return "Greece";
      };
    },
    destinationMixin: function (obj) {
      obj.destination = function () {
        return "France";
      };
    },
  };
})();

countryModule.flagMixin(oilTanker);
oilTanker.flag();
