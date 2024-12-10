$(document).ready(function () {
    $(".first-list-element").addClass("active")
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active")
    })
    $("#toggler").click(function () {
        $(".sidebar").toggleClass("toggle")
        $(".layer").toggleClass("toggle")
    })
    $(".layer").click(function () {
        $(".sidebar").toggleClass("toggle")
        $(".layer").toggleClass("toggle")
    })
    $(".search-icon").click(function () {
        $(".search-input").slideToggle("slow")
    })
})