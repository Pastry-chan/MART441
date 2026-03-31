let anime = [
{
    "Name" : "Yona of the Dawn",
    "Year" : "2014",
    "Type" : "Series",
    "Episodes" : "24",
    "Genre" : "Romance, Action, Fantasy",
    "Rating" : "9"
},
{
    "Name" : "Assassination Classroom",
    "Year" : "2015",
    "Type" : "Series",
    "Episodes" : "22",
    "Genre" : "Action, Comedy",
    "Rating" : "7"
},
{
    "Name" : "Blue Exorcist",
    "Year" : "2011",
    "Type" : "Series",
    "Episodes" : "25",
    "Genre" : "Dark-fantasy, supernatural, action",
    "Rating" : "5"
},
{
    "Name" : "Bakuman",
    "Year" : "2010",
    "Type" : "Series",
    "Episodes" : "25",
    "Genre" : "Comedy, Drama, Romance",
    "Rating" : "8"
},
{
    "Name" : "Erased",
    "Year" : "2016",
    "Type" : "Series",
    "Episodes" : "12",
    "Genre" : "Mystery, Psychological",
    "Rating" : "6"
},
{
    "Name" : "My Hero Academia",
    "Year" : "2016",
    "Type" : "Series",
    "Episodes" : "13",
    "Genre" : "Action, Comedy, School",
    "Rating" : "6"
},
{
    "Name" : "Cardcaptor Sakura",
    "Year" : "1998",
    "Type" : "Series",
    "Episodes" : "70",
    "Genre" : "Adventure, Comedy, Fantasy",
    "Rating" : "6"
},
{
    "Name" : "Dororo",
    "Year" : "2019",
    "Type" : "Series",
    "Episodes" : "24",
    "Genre" : "Historical, Action, Dark-fantasy",
    "Rating" : "8"
}
];

        $(function () {
            $("button").click(function () {
                showanimeList();
            });

        });
       
function showanimeList() {
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
}