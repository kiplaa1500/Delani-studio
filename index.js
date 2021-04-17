$(document).ready(function () {
    $("#hide1").hide();
    $("#design").click(function () {
        $("#hide1").toggle(500);
    });
    $("#show").click(function () {
        $("#hide1").show(500);
    });

    $("#hide2").hide();
    $("#development").click(function () {
        $("#hide2").toggle();
    });
    $("#show").click(function () {
        $("#development").show();
    });
    $("#hide3").hide();
    $("#products-management").click(function () {
        $("#hide3").toggle();
    });
    $("#show").click(function () {
        $("#products-management").show();
    });
    preventDefault();
})