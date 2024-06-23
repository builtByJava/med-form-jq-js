/*jquery script*/
/*show/hide reactions on various selections*/
$(document).ready(function () {
  $("#pCareNo").click(function () {
    $(".med-lastEval").show();
    $(".current-provider-info").hide();
  });

  $("#pCareYes").click(function () {
    $(".med-lastEval").hide();
    $(".current-provider-info").show();
  });

  $("#cMedsYes").click(function () {
    $("#current-meds-desc").show();
  });

  $("#cMedsNo").click(function () {
    $("#current-meds-desc").hide();
  });

  $("#cont-email").click(function () {
    $(".contact-method-phone").hide();
    $(".contact-method-email").show();
  });

  $("#cont-phone").click(function () {
    $(".contact-method-phone").show();
    $(".contact-method-email").hide();
  });
});
