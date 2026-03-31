$(document).ready(function () {
    $("button").click(function () {

        $.getJSON("data/info.json", function (anime) {

            let output = "";

            anime.forEach(function(item) {
                output += 
                    "Name: " + item.Name +
                    "<br>Year: " + item.Year +
                    "<br>Type: " + item.Type +
                    "<br>Episodes: " + item.Episodes +
                    "<br>Genre: " + item.Genre +
                    "<br>Rating: " + item.Rating +
                    "<br><br>";
            });

            $("#animeList").html(output);
        });

    });
});