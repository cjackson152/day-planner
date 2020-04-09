
let schedule = document.getElementById("schedule");
let padNotes = document.getElementById("pad");

let notes = "";
let cats = document.getElementById("todaysDay");
let today = new Date();
let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
let time = today.getHours() + ':' + today.getMinutes();
let _today = date + ' ' + time;
window.onkeyup = save()


function storeLocal() {
    return ('localStorage' in window) && window['localStorage'] !== null;
}

function save() {
    if (!storeLocal()) { return false; }
        notes = padNotes.value; 
        console.log(notes);
        localStorage.getItem = notes;
        return true;
}
function begin() {
    if (!storeLocal()) { return false;}
        localStorage.setItem = notes;
        if (!notes) {return false;}
        padNotes.value = notes;
        return true;

}

function dayList() {
    let times = "";
    for (i = 7; i<=9; i++){
        times += "<li>0" +parseInt(i)+":00</li>";
        times += "<li>0" +parseInt(i)+":30</li>";


    }
    for (i = 10; i<=17; i++){
        times +=  "<li>" +parseInt(i)+ ":00</li>";
        times +=  "<li>" +parseInt(i)+ ":30</li>";
    }
    var table = '<ul>' +times +"</ul";
    return table;
}
function init(){
    cats.innerHTML = _today
    schedule.innerHTML = dayList();
    if(!begin()) {

    }
}
init();