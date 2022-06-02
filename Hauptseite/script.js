//globale Variablen für countUpTimer()
var timerVariable = setInterval(function() {
    if(!isPaused) {
        countUpTimer();
    }
}, 1000);
var totalSeconds = 0;
var isPaused = false;

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function countUpTimer() {
    ++totalSeconds;
    var hour = Math.floor(totalSeconds / 3600);
    var minute = Math.floor((totalSeconds - hour * 3600) / 60);
    var seconds = totalSeconds - (hour * 3600 + minute * 60);
    document.getElementById("count_up_timer").innerHTML = pad(hour, 2) + ":" + pad(minute, 2) + ":" + pad(seconds, 2);
}

function pause_timer() {
    isPaused = !isPaused;
    if(isPaused)
        document.getElementById("break_count_up_timer").innerHTML = "Weiter";
    else
        document.getElementById("break_count_up_timer").innerHTML = "Pause";
}


//Geldzähler geht bis 1500
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';
    counter.setAttribute('data-target', 1500);
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }
        else{
            counter.innerText = target;
        }
    };
    updateCounter();
});

//dynamisches Update des Geldcounters
function updateCounter_2(new_counter_value, is_opponent) {
    // is_oppenent entscheidet, ob Du den Wert für den Gegner oder den Spieler aktualisierst
    var new_counters;
    if(is_opponent) {
        new_counters = document.querySelectorAll('.counter-opponent');
    } else {
        new_counters = document.querySelectorAll('.counter');
    }
    new_counters.forEach(counter => {
        counter.innerText = '0';
        counter.setAttribute('data-target', new_counter_value);
        
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            
            const increment = target / 200;
            
            if(c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 1);
            }
            else{
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}
