$(document).ready(function(){
    // creo 36 quadratini
    for (var i=0; i<36; i++){
        $("#template").find(".square").clone().appendTo(".box");
    }

    // funzione che parte cliccando su ogni quadratino
    $(".square").on("click", function(){
        var square = $(this);
        $.ajax(
            {
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                method: "GET",
                success: function (data) {
                    // assegno il numero ottenuto dall'API ad una variabile
                    var number = data.response;
                    // stampo il numero nel quadratino cliccato
                    square.text(number);
                    // controllo se il numero è maggiore di 5 o no
                    if (number > 5){
                        // coloro il quadratino di verde aggiungendo la classe "green" e rimuovo la classe "yellow"
                        square.removeClass("yellow");
                        square.addClass("green");
                    } else {
                        // coloro il quadratino di giallo aggiungendo la classe "yellow" e rimuovo la classe "green"
                        square.removeClass("green");
                        square.addClass("yellow");
                    }
                    
                },
                error: function () {
                    alert("E' avvenuto un errore.");
                }
            }
        );
    })

    
})