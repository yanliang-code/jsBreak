define(['./util.js', './util1.js'], function (util, util1) {
  return {
    aGetFormatDate: function (date) {
      console.log('util===', util);
      console.log('util1===', util1);
      return util.getFormatDate(date, 2);
    },
  };
});
