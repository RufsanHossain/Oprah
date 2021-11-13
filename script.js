var username = prompt("Hello, who are you?");
var cars = ["BMW", "Ferrary", "Maseratti"];
var prize = Math.floor(Math.random() * cars.length);

if (username === "Chris" || username === "chris") {
    document.write(
        "<h1>Hello, " +
        username +
        ". You have won a " +
        cars[prize] +
        " car.</h1>"
    );

    if (cars[prize] === "BMW") {
        var carImg = document.getElementById("car");
        carImg.innerHTML =
            '<img src="images/bmw.jpg" width="400px">';
    }
} else if (username === "Rufsan") {
    document.write(
        "<h1>Hello, " +
        username +
        ". You have won a " +
        cars[prize] +
        " car.</h1>"
    );
} else {
    document.write("<h1>Hello," + " " + username + "!!</h1>");
    var jennifer = document.getElementById("jennifer");
    jennifer.innerHTML = '<img src="images/R.jpg" width="300px">';
}