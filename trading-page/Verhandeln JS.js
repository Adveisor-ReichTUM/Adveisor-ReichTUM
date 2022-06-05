const playerID = 0;

const my_cards = [];
const opponent_cards = [];
const free_cards = [];

showing_selector_wuensche = false;
showing_selector_angebote = false;

value_wuensche = 0;
value_angebote = 0;

var streets_wuensche = [];
var streets_angebote = [];

function set_player_id(id) {
    playerID = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("parent", document.getElementById(ev.target.id).parentElement.id);
}

function drop_to_wuensche_field(ev) {
    ev.preventDefault();
    var street_id = ev.dataTransfer.getData("text");
    var street_field_id = (ev.dataTransfer.getData("parent"));
    if(ev.target.childElementCount < 4  && ev.target.id == "wuensche_drop" && access_streets_wuensche(street_field_id)) {
        ev.target.appendChild(document.getElementById(street_id));
        append_streets_wuensche(street_id);
    }
}

function drop_to_angebote_field(ev) {
    ev.preventDefault();
    var street_id = ev.dataTransfer.getData("text");
    var street_field_id = (ev.dataTransfer.getData("parent"));
    if(ev.target.childElementCount < 4  && ev.target.id == "angebote_drop" && access_streets_angebote(street_field_id)) {
        ev.target.appendChild(document.getElementById(street_id));
        append_streets_angebote(street_id);
    }
}

function drop_to_street_field(ev) {
    ev.preventDefault();
    var street_id = ev.dataTransfer.getData("text");
    var container_field_id = (ev.dataTransfer.getData("parent"));
    var street_field_id = ev.target.id;
    if(ev.target.childElementCount == 0  && ev.target.id.startsWith("street_field") && access_streets_field(container_field_id, street_field_id)) {
        ev.target.appendChild(document.getElementById(street_id));
    }
    id = parseInt(street_field_id.split("_")[2]);
    if(id <= 28) {
        remove_streets_angebote(street_id);
    }
    if(id > 28 && id <= 56) {
        remove_streets_wuensche(street_id);
    }
}

function show_range_shifter_wuensche() {
    if(showing_selector_wuensche) {
        document.getElementById("shifter_wuensche").style.display = "none";
        reset_value_wuensche();
    }
    else {
        document.getElementById("shifter_wuensche").style.display = "inline";
    }
    showing_selector_wuensche = !showing_selector_wuensche;
}

function show_range_shifter_angebote() {
    if(showing_selector_angebote) {
        document.getElementById("shifter_angebote").style.display = "none";
        reset_value_angebote();
    }
    else {
        document.getElementById("shifter_angebote").style.display = "inline";
    }
    showing_selector_angebote = !showing_selector_angebote;
}

function update_value_wuensche() {
    value_wuensche = document.getElementById("shifter_input_wuensche").value;
    document.getElementById("quantity_wuensche").value = value_wuensche;
}

function update_value_angebote() {
    value_angebote = document.getElementById("shifter_input_angebote").value;
    document.getElementById("quantity_angebote").value = value_angebote;
}

function update_quantity_wuensche() {
    value_wuensche = document.getElementById("quantity_wuensche").value;
    document.getElementById("shifter_input_wuensche").value = value_wuensche;
}

function update_quantity_angebote() {
    value_angebote = document.getElementById("quantity_angebote").value;
    document.getElementById("shifter_input_angebote").value = value_angebote;
}

function reset_value_angebote() {
    value_angebote = 0;
    document.getElementById("shifter_input_angebote").value = value_angebote;
    document.getElementById("quantity_angebote").value = value_angebote;
}

function reset_value_wuensche() {
    value_wuensche = 0;
    document.getElementById("shifter_input_wuensche").value = value_wuensche;
    document.getElementById("quantity_wuensche").value = value_wuensche;
}


function access_streets_wuensche(street_id) {
    streets_field = parseInt(street_id.split("_")[2]);
    if(streets_field > 28 && streets_field <= 56) {
        return true;
    }
    return false;
}

function access_streets_angebote(street_field_id) {
    streets_field = parseInt(street_field_id.split("_")[2]);
    if(streets_field <= 28) {
        return true;
    }
    return false;
}

function access_streets_field(container_field_id, street_field_id) {
    id = parseInt(street_field_id.split("_")[2]);
    if(container_field_id == "angebote_drop" && id <= 28) {
        return true;
    }
    if(container_field_id == "wuensche_drop" && id > 28 && id <= 56) {
        return true;
    }
    return false;
}

function append_streets_wuensche(element) {
    streets_wuensche.push(element);
}

function append_streets_angebote(element) {
    streets_angebote.push(element);
}

function remove_streets_wuensche(element) {
    var index = streets_wuensche.indexOf(element);
    if(index != -1) {
        streets_wuensche.splice(index, 1);
    }
}

function remove_streets_angebote(element) {
    var index = streets_angebote.indexOf(element);
    if(index != -1) {
        streets_angebote.splice(index, 1);
    }
}

/*function submit_trading_offer() {
    trade(streets_angebote, streets_wuensche, value_angebote, value_wuensche, playerID);
}*/

/// Diese Funktion bekommt als Eingabe List<String>, wobei jeder String die ID einer Straße repräsentiert
function show_offer(value_angebote, streets_angebote, value_wuensche, streets_wuensche) {
    document.getElementById("show_offer_angebote").style.display = "inline";
    document.getElementById("show_offer_wuensche").style.display = "inline";
    document.getElementById("trading_offer_decision").style.display = "inline";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("angebote").style.display = "none";
    document.getElementById("wuensche").style.display = "none";
    document.getElementById("submit_offer").style.display = "none";
    for(var i = 0; i < streets_angebote.length; i++) {
        newNode = document.getElementById(streets_angebote[i]).cloneNode(true);
        newNode.setAttribute('draggable', false);
        document.getElementById("offer_angebote_streets").appendChild(newNode);
    }
    for(var i = 0; i < streets_wuensche.length; i++) {
        newNode = document.getElementById(streets_wuensche[i]).cloneNode(true);
        newNode.setAttribute('draggable', false);
        document.getElementById("offer_wuensche_streets").appendChild(newNode);
    }
    document.getElementById("offer_wuensche_value").innerHTML = value_wuensche + " Ω";
    document.getElementById("offer_angebote_value").innerHTML = value_angebote + " Ω";
}

function submit_offer_decision() {
    answer = document.querySelector('input[name="trading_offer_buttons"]:checked').value;
    if(answer == "Annehmen") {
        alert("Angebot wurde akzeptiert");
        //backend_offer_accepted(True);
    }
    else {
        alert("Angebot wurde abgelehnt");
        //backend_offer_accepted(False);
    }
    document.getElementById("overlay").style.display = "none";
}

//Diese Funktion soll Alex für den Spieler aufrufen, der das Angebot gemacht hat, bevor er den Screen updated
function show_opponent_decision(decision) {
    if(decision) {
        alert("Der Gegner hat Dein Angebot angenommen");
    }
    else {
        alert("Der Gegner hat Dein Angebot abgelehnt");
    }
}



//Alex ruft diese Methode auf, wenn ein Angebot angenommen wurde, oder wenn eine neue Straße gekauft wurde
// my_cards, opponent_cards, free_cards: List<String> mit IDs
function update_streets_on_screen(my_cards, opponent_cards, free_cards) {
    document.getElementById("show_offer_angebote").style.display = "none";
    document.getElementById("show_offer_wuensche").style.display = "none";
    document.getElementById("trading_offer_decision").style.display = "none";
    document.getElementById("angebote").style.display = "inline";
    document.getElementById("wuensche").style.display = "inline";
    document.getElementById("submit_offer").style.display = "inline";
    // Update it
    
    for(var i = 0; i < 84; i++) {
        try {
            var street_element = document.getElementById("street_" + (i+1));
            document.getElementById("storage").appendChild(street_element);
        }
        catch (e) {

        }
    }
    /*for(var i = 1; i < 85; i++) {
        var id = "street_field_" + i;
        try {
            document.getElementById("street_field_" + i).innerHTML = "";
        }
        catch(e) {
            //alert(e);
        }
    }*/
    for(var i = 0; i < my_cards.length; i++) {
        document.getElementById("street_field_" + (i + 1)).appendChild(document.getElementById(my_cards[i]));
    }
    for(var i = 0; i < opponent_cards.length; i++) {
        document.getElementById("street_field_" + (i + 29)).appendChild(document.getElementById(opponent_cards[i]));
    }
    for(var i = 0; i < free_cards.length; i++) {
        document.getElementById("street_field_" + (i + 57)).appendChild(document.getElementById(free_cards[i]));
    }
}

function submit_trading_offer() {
    angebote = ["street_1", "street_2", "street_4"];
    wuensche = ["street_14", "street_24", "street_21"];
    angebote_value = 200;
    wuensche_value = 500;
    show_offer(value_angebote, angebote, value_wuensche, wuensche);
}

/*function submit_trading_offer() {
    my_cards_test = ["street_1", "street_2", "street_3"];
    opponent_cards_test = ["street_31", "street_32", "street_33"];
    free_cards_test = ["street_59", "street_60", "street_61"];
    update_streets_on_screen(my_cards_test, opponent_cards_test, free_cards_test);
}*/

function show_mortgage(id) {
    //ändere Durchsichtigkeit
    street_id = "street_" + id; //wenn als Integer übergeben wird
    document.getElementById(street_id).style.opacity = 0.5;
    //ändere Hintergrundfarbe
    street_field = document.getElementById(street_id).parentElement.id;
    document.getElementById(street_field).style.background = "red";
    //schalte draggable aus
    document.getElementById(street_id).setAttribute('draggable', false);
}

function end_mortgage(id) {
    //ändere Durchsichtigkeit
    street_id = "street_" + id; //wenn als Integer übergeben wird
    document.getElementById(street_id).style.opacity = 1;
    //ändere Hintergrundfarbe
    street_field = document.getElementById(street_id).parentElement.id;
    document.getElementById(street_field).style.background = "none";
    //schalte draggable ein
    document.getElementById(street_id).setAttribute('draggable', true);
}

/*function submit_trading_offer() {
    show_mortgage(1);
}

function end_the_mortgage() {
    end_mortgage(1);
}*/