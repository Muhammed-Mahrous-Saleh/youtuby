$(document).ready(function () {
    $("#readMore").on("click", function () {
        read_more()
    })

    $(".reply").click(function () {
        var inner_cards = $(this).parents("div.row").nextAll("div.card")
        for (let card_i = 0; card_i < inner_cards.length; card_i++) {
            $(inner_cards[card_i]).toggle()
        }
    })
})

function read_more() {
    var dots = document.getElementById("dots")
    var moreText = document.getElementById("more")
    var btnText = document.getElementById("readMore")

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none"
        btnText.innerHTML = "عرض المزيد"
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline"
        btnText.innerHTML = "عرض أقل"
    }
}