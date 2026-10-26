$(document).ready(function(){

    $("*").css("font-family","Arial")

    $("#title").text("WELCOME STUDENTS!") 

    $("p").css("color","pink")

    $(".intro").text("Learning jQuery")

    $("#btn").click(function(){

        $(this).css("background-color","black")
        $(this).css("color","white")

       

    })

    $("p.intro").css("color","red")

    $("ul li:first").css("color","green")

    $("[href]").css("color","blue")

    $("tr:even").css("background","lightblue")
    $("tr:odd").css("background","lightgreen")


    $("#btn").click(function(){
        $("#message").text("You clicked the button")
    })

    $("#btn").dblclick(function(){
        $("#message").text("You double clicked the button")
        $(this).css("background-color","white")
        $(this).css("color","orange")
    })

    $("#btn").mouseenter(function(){
        $("#message").text("Your mouse reach the button!")
    })
    $("#btn").mouseleave(function(){
        $("#message").text("Your mouse leaves the button!")
    })
    $("#btn2").mousedown(function(){
        $(this).css("background-color","aqua")
        $(this).css("color","azure")

    })
    $("#btn2").mouseup(function(){
        $(this).css("background-color","yellow")
        $(this).css("color","purple")

    })
    $("#name").focus(function(){
        $("#message").text("Typing....")
        $(this).css("background","lightyellow")
    })
    $("#name").blur(function(){
        $("#message").text("Typing....")
        $(this).css("background","lightblue")
    })

    $("#course").change(function(){
        $("#message").text($(this).val())
    })

    $("#btnhide").click(function(){
        $("#table").hide("slow")
    })
    
    $("#btnshow").click(function(){
        $("#table").show("slow")
    })


})

