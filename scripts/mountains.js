"use strict";
//This scripts contains code to dynamically create information on different mountains from a JSON file.
//Author:  Pam Belknap

// Initialize
window.onload = function() {
    let objs;

    //Starts the communication to the server
    $.getJSON(
        "data/mountains.json",
        //This function doesn't necessarily run instantaneously
        function(data) {
            objs = data;
            //load dropdown list here (code)
            let mountainChoice = document.getElementById("mountainChoice");
            for (let i = 0; i < objs.mountains.length; i++) {
                let mt = objs.mountains[i].name;
                let element = document.createElement("option");
                element.text = mt;
                element.value = mt;
                mountainChoice.appendChild(element);
            }

            const btnMountain = document.getElementById("btnMountain");
            btnMountain.onclick = createmountainTable;

            function createmountainTable() {
                let mountainChoice = document.getElementById("mountainChoice").selectedIndex;
                // to select option from a specific dropdown, in this instance mountainChoice.
                let chosenMountain = document.getElementById("mountainChoice").options[mountainChoice].value;
                let table = document.getElementById("mountains");
                table.innerHTML = "";

                for (let i = 0; i < objs.mountains.length; i++) {
                    if (chosenMountain == objs.mountains[i].name) {
                        let row = table.insertRow(table.rows.length);
                        let cell1 = row.insertCell(0);
                        cell1.innerHTML = "Name";
                        let cell2 = row.insertCell(1);
                        cell2.innerHTML = objs.mountains[i].name;
                        table.appendChild(row);

                        row = table.insertRow(table.rows.length);
                        let cell3 = row.insertCell(0);
                        cell3.innerHTML = "Elevation";
                        let cell4 = row.insertCell(1);
                        cell4.innerHTML = objs.mountains[i].elevation;
                        table.appendChild(row);

                        row = table.insertRow(table.rows.length);
                        let cell5 = row.insertCell(0);
                        cell5.innerHTML = "Effort";
                        let cell6 = row.insertCell(1);
                        cell6.innerHTML = objs.mountains[i].effort;
                        table.appendChild(row);

                        row = table.insertRow(table.rows.length);
                        let cell7 = row.insertCell(0);
                        cell7.innerHTML = "Image";
                        let cell8 = row.insertCell(1);
                        cell8.innerHTML = objs.mountains[i].img;
                        table.appendChild(row);

                        row = table.insertRow(table.rows.length);
                        let cell9 = row.insertCell(0);
                        cell9.innerHTML = "Description";
                        let cell10 = row.insertCell(1);
                        cell10.innerHTML = objs.mountains[i].desc;
                        table.appendChild(row);

                        row = table.insertRow(table.rows[i].length);
                        let cell11 = row.insertCell(0);
                        cell11.innerHTML = "Coordinates-Latitude";
                        let cell12 = row.insertCell(1);
                        cell12.innerHTML = objs.mountains[i].coords.lat
                        table.appendChild(row);

                        row = table.insertRow(table.rows.length);
                        let cell13 = row.insertCell(0);
                        cell13.innerHTML = "Coordinates-Longitude";
                        let cell14 = row.insertCell(1);
                        cell14.innerHTML = objs.mountains[i].coords.lng
                        table.appendChild(row);
                    }
                }
            }
        }
    )
}