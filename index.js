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
        $("#hide2").toggle(500);
    });
    $("#show").click(function () {
        $("#development").show(500);
    });
    $("#hide3").hide();
    $("#products-management").click(function () {
        $("#hide3").toggle(500);
    });
    $("#show").click(function () {
        $("#products-management").show(500);
    });
    preventDefault();
})