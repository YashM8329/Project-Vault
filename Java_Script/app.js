const favourite = "Avatar";
let guess = prompt("Enter the name of the movie");
while((guess != favourite) && (guess != "Quit"))
    {
        console.log("Wrong");
        guess = prompt("Wrong guess please try");
    }
