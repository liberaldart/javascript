( function ($) {

  var activate_textbox = function () {
    $('#the-text').on('focus', function () {
      var options = {
          target: "#external-content",
          remote: "external.html",
          placement: "right",
          backdrop: "false",
          keyboard: "true"
      };
      $('#dialog').modalPopover(options);
      $('#dialog').modalPopover('show');
    });
  }

  $('#dialog').on('refresh-content', function () {
    console.log('refresh called');
    $('#dialog').modalPopover('hide');
    $('#dialog').modalPopover('show');
  });

  $(document).on('ready', function() {
    activate_textbox();

  });

})(window.jQuery);
