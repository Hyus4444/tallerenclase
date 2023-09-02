$("#container1").on("click",function(){
    $("#container2").show();
    $("#container1").hide();
    $("btn-start").hide();

});

$("#container1").on("mouseover",function(){
    $("#container1").addClass("forma");

});

$("#container2").on("mouseover",function(){
    $("#container2>h1").text("Hola uwu")

$("#container2>h1").append("<i>Hola uwu</i>")
$("#container2>h1").append("<marquee>Hola uwu<marquee>")
});
