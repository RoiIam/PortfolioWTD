document.getElementById("showAsyncBtn").addEventListener("click", loadXml);

function loadXml() {
    alert("loading!");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            loadTable(this);
        }
    };
    xhttp.open("GET", "testData.xml", true);
    xhttp.send();
}

//lets do it with loops, but it is not great to work with
function loadTable(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<thead>" +
        "<tr>" +
        "<th>UserName</th>" +
        "<th>Game</th>" +
        "<th>Genres</th>" +
        "</thead>"+ "<tbody>";

    var usersList = xmlDoc.getElementsByTagName("userWishlist");
    var ee =0;

    for (i = 0; i <usersList.length; i++) {
        var gamesList = usersList[i].getElementsByTagName('game');
        table += "<td>" + usersList[i].getElementsByTagName("username")[0].childNodes[0].nodeValue
        + "</td>";//end of games

        table+= "<td>" //start of games
        for(j = 0; j <gamesList.length; j++) {
            table += usersList[i].getElementsByTagName("title")[j].childNodes[0].nodeValue
                + "<br>";
        }
        table+= "</td>"; //end of games
        table+= "<td>" //start of genres

        for(k = 0; k <gamesList.length; k++) {
            var genresList = gamesList[k].getElementsByTagName("genre");
            for (l = 0; l <genresList.length; l++){
                var aaa =  genresList[0].getElementsByTagName("genre1");
                for (m =0; m<aaa.length; m++) {
                    table += aaa[m].childNodes[0].nodeValue;
                    table += ", ";
                }
            }
            table+= "</br>";
        }
        table+= "</td></tr>";
    }
    table += "</tbody>";

    document.getElementById("demo").innerHTML = table;
}


