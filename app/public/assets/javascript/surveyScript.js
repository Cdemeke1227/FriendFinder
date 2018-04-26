$(document).ready(function () {


    $("#submit").on("click", function (event) {
        event.preventDefault();

        var scoresArray = [
            parseInt($("#question1").val()),
            parseInt($("#question2").val()),
            parseInt($("#question3").val()),
            parseInt($("#question4").val()),
            parseInt($("#question5").val()),
            parseInt($("#question6").val()),
            parseInt($("#question7").val()),
            parseInt($("#question8").val()),
            parseInt($("#question9").val()),
            parseInt($("#question10").val())
        ];

        // Here we grab the form elements
        var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: scoresArray
        };

        // console.log(newFriend);

        $.post("/api/friends", newFriend, function (data) {
            // console.log("matach: " +data);
            $(".matchName").text(data.name);
            $(".matchPicture").attr("src", data.photo);

        });

        $(".modal").modal();

    });


});