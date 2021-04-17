$(document).ready(function () {
    $("#hide1").hide();
    $("#design").click(function () {
        $("#hide1").toggle(700);
    });
    $("#show").click(function () {
        $("#hide1").show(700);
    });

    $("#hide2").hide();
    $("#development").click(function () {
        $("#hide2").toggle(700);
    });
    $("#show").click(function () {
        $("#development").show(700);
    });
    $("#hide3").hide();
    $("#products-management").click(function () {
        $("#hide3").toggle(500);
    });
    $("#show").click(function () {
        $("#products-management").show(700);
    });
    preventDefault();
})