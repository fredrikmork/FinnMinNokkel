// Legge til tabell på personlige sider
function leggTilTabell(filnavn) {
    var Connect = new XMLHttpRequest();
    Connect.open("GET", filnavn, false);
    Connect.send(null);
    var docX = Connect.responseXML;
    var ovelse = docX.getElementsByTagName("ovelse");
    var pers = docX.getElementsByTagName("pers");
    document.write("<table>");
    document.write("<tr>  <th>Øvelse</th>   <th>Personlig rekord</th> </tr>");
    for (var i = 0; i < ovelse.length; i++) {
        document.write("<tr>");
        document.write("<td>" + ovelse[i].textContent + "</td>");
        document.write("<td>" + pers[i].textContent + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

// Lager knappen med teskten som er på "tittel" fra xml-dokument
function visFunnet(filnavn) {
    var Connect = new XMLHttpRequest();
    Connect.open("GET", filnavn, false);
    Connect.send(null);
    var docX = Connect.responseXML;
    var tittel = docX.getElementsByTagName("tittel");
    var pl = docX.getElementsByTagName("plassering");
    var det = docX.getElementsByTagName("detaljer");
    var hent = docX.getElementsByTagName("hentested");
    var dato = docX.getElementsByTagName("dato");
    var kontakt = docX.getElementsByTagName("kontakt");
    var id = docX.getElementsByTagName("id");

    document.write("<table>");
    var e;
    var b;
    var text;
    var j = 0;

    for (var i = 0; i < tittel.length; i++) {

        text = id[i].textContent;
        document.write("<tr>" + "<th>" + "<button type='button' id='midBtn' class='btn btn-block' data-toggle='collapse' data-target='#'>");
        document.write(tittel[i].textContent);
        document.write("</button>");
        document.write("<div  class='collapse' id='midlertidig'>");
        document.write('Gjenstand funnet: '+ pl[i].textContent + "<br>" +'Detaljer om gjenstanden: ' + det[i].textContent + "<br>" + 'Hentested: ' + hent[i].textContent + "<br>" + 'Kontakt: ' + kontakt[i].textContent);
        document.write("<br>" +'Dato gjenstand funnet: '+ dato[i].textContent);
        document.write("</div>" + "</th>" + "</tr>");
        e = document.getElementById('midlertidig');
        b = document.getElementById('midBtn');
        e.id = id[i].textContent;
        b.id = 'button' + id[i].textContent;

        b.setAttribute("data-target", "#" + text);
        j++;
    }
    document.write("</table>");
}

//savnet knappene
function visSavnet(filnavn) {
    var Connect = new XMLHttpRequest();
    Connect.open("GET", filnavn, false);
    Connect.send(null);

    var docX = Connect.responseXML;
    var tittel = docX.getElementsByTagName("tittel");
    var sted = docX.getElementsByTagName("sted");
    var det = docX.getElementsByTagName("detaljer");
    var dato = docX.getElementsByTagName("dato");
    var id = docX.getElementsByTagName("id");
    var kontakt = docX.getElementsByTagName("kontakt");

    document.write("<table>");
    var e;
    var b;
    var text;
    var j = 0;

    for (var i = 0; i < tittel.length; i++) {

        text = id[i].textContent;
        document.write("<tr>" + "<th>" + "<button type='button' id='midBtn' class='btn btn-block' data-toggle='collapse' data-target='#'>");
        document.write(tittel[i].textContent);
        document.write("</button>");
        document.write("<div  class='collapse' id='midlertidig'>");
        document.write('Gjenstand mistet: ' + sted[i].textContent + "<br>" + 'Detaljer: ' +  det[i].textContent + "<br>" + 'Dato: '+  dato[i].textContent + "<br>" + 'Kontakt: ' + kontakt[i].textContent);
        document.write("</div>" + "</th>" + "</tr>");
        e = document.getElementById('midlertidig');
        b = document.getElementById('midBtn');
        e.id = id[i].textContent;
        b.id = 'button' + id[i].textContent;

        b.setAttribute("data-target", "#" + text);
        j++;
    }
    document.write("</table>");
}

// Funskjon for å sette inn knappen når du begynner å scrolle
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("scrollUp").style.display = "block";
    } else {
        document.getElementById("scrollUp").style.display = "none";
    }
}

// scroller til toppen av siden ved klikk på knappen
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//søkefunksjon
function sokeFunksjon() {
    var input, filter, div, tr, a, i;
    input = document.getElementById("sok");
    filter = input.value.toUpperCase();
    div = document.getElementById("sokAnnonse");
    tr = div.getElementsByTagName("tr");


    for (i = 0; i < tr.length; i++) {
        a = tr[i].getElementsByTagName("button")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";

        }
    }
}

//redirect page
function funnetFunction() {
    window.location = "funnet.html";
}

function savnetFunction() {
    window.location = "savnet.html";
}

function hjemDirection() {
    window.location = "index.html";
}
