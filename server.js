// Dependencies
var express =       require("express");
var bodyParser =    require("body-parser")

// Express Configurations
var PORT =          process.env.PORT || 3000;
var app =           express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static(__dirname+'/app/public'));

// Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes.js")(app);



// Listiner
app.listen(PORT, function() {
    console.log("App listeneing on PORT " + PORT);
});