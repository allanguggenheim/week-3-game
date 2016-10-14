Main = {};
Main.WordArray = [];
Main.WordUArray = [];
Main.LettersGuessedUArray = [];

Main.Lives = 6;
Main.NumberInWordBank = 4;

Main.Word = "test";
Main.UnderscoresWord = ""
Main.WordU = "";

var userGuessArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//Functions go here


document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        if (contains(userGuessArray,userGuess)) {
            event.preventDefault();
            Main.UpdateLetter(userGuess);
        }
}

Main.PullWord = function(){
    Main.Word = Words.List[(Math.floor(Math.random()*Main.NumberInWordBank))];
}
Main.SetUnderline = function(){
    Main.PullWord();
    for(i=0; i < Main.Word.Length; i++){
        Main.WordArray[i] = Main.Word.charAt(i);
        Main.WordUArray[i] = "_";
    }
    Main.WordU = Main.WordUArray.join("");
    document.getElementById("WORD").innerHTML = Main.WordU;
    document.getElementById("numLetters").innerHTML = Main.Word.length;

    for (i = 0; i < Main.Word.length; i++) { 
        Main.UnderscoresWord = Main.UnderscoresWord + " ___ ";
    }

    document.getElementById("WORD").innerHTML = Main.UnderscoresWord;

    // document.getElementById("underlinedWORD").innerHTML = Main.UnderscoresWord;

}

Main.UpdateLetter = function(letter){
    Main.LettersGuessedUArray = Main.LettersGuessedUArray + letter
    document.getElementById("guessedLetters").innerHTML = Main.LettersGuessedUArray;
    Main.Changes = 0;

    for (i = 0; i < Main.Word.length; i++) { 
        Main.UnderscoresWord = Main.UnderscoresWord + " ___ ";
    }

    for(i=0; i < Main.Word.length; i++){
        Main.WordArray[i] = Main.Word.charAt(i);
        if(Main.Word.charAt(i) == letter){
            Main.WordUArray[i] = letter;
            Main.Changes += 1;
        } else {
            Main.WordUArray[i] = " ___ ";
        }
    }
 
    for(i=0; i < Main.Word.length; i++){
            if (contains(Main.LettersGuessedUArray,Main.Word.charAt(i))) {
                // alert("yes")
                Main.WordUArray[i] = Main.Word.charAt(i);
            }
    }


    if(Main.Changes < 1){
        Main.Lives -=1;
        document.getElementById("lives").innerHTML = Main.Lives;
    }

    if(Main.Lives == 6){
        document.getElementById('main_img').src='images/hangman_1.png'
    }

    if(Main.Lives == 5){
        document.getElementById('main_img').src='images/hangman_2.png'
    }

    if(Main.Lives == 4){
        document.getElementById('main_img').src='images/hangman_3.png'
    }

    if(Main.Lives == 3){
        document.getElementById('main_img').src='images/hangman_4.png'
    }

    if(Main.Lives == 2){
        document.getElementById('main_img').src='images/hangman_5.png'
    }

    if(Main.Lives == 1){
        document.getElementById('main_img').src='images/hangman_6.png'
    }

    if(Main.Lives == 0){
        document.getElementById('main_img').src='images/hangman_7.png'
    }

    Main.WordU = Main.WordUArray.join("");
    document.getElementById("WORD").innerHTML = Main.WordU;

    Main.Word1 = Main.WordArray.join("");
    Main.Word2 = Main.WordUArray.join("");

    if(Main.Word1 == Main.Word2){
        alert("You Won! Loading A New Word");
        window.location.reload();
    }

    if(Main.Lives < 1){
        document.getElementById("WORD").innerHTML == Main.Word1;
        alert("You Have Run Out Of Lives, Please Try Again.");
        window.location.reload();
    }
}

Main.PullWord();
Main.SetUnderline();
