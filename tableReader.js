
// tableReader.js - Letze Änderung: Maurice König

"use strict";

// Variablen, die zwischengespeichert werden um hier im Script damit arbeiten zu können.
let persons = [];
let personssorted = [];
const dispBtn1 = document.getElementById("dispBtn1");
const dispBtn2 = document.getElementById("dispBtn2");
const ul1 = document.getElementById("ul1"); 
const ol1 = document.getElementById("ol1");

// --------------------------------------------------------------------------------------

// Die eigentlichen Funktionsaufrufe!
dispBtn1.addEventListener("click", showList);
pushNames();
printToConsole(persons);
//printToConsole(personssorted);

// --------------------------------------------------------------------------------------
//dispBtn2.addEventListener("click", showList);



// Implementierungen der einzelnen Funktionen.


// showList: Namen aus dem "persons"-Array der oben deklariert wurde, werden als Listenelemente einem anderen Listenelement untergeordnet und deren Text wird gleichgesetzt
// mit dem Namen der Person an Index i.
//Zwei verschiedene Elemente hinzugefügt, eines für eine geordnete Liste und das andere für eine ungeordnete Liste.
function showList() {
    
    for (let i = 0; i < persons.length; i++){
        let newOrderedListElement = document.createElement("li");
        let newUnorderedListElement = document.createElement("li");

        newOrderedListElement.innerText = persons[i].firstName + " " + persons[i].lastName;
        newUnorderedListElement.innerText = persons[i].firstName + " " + persons[i].lastName;

        ol1.appendChild(newOrderedListElement);
        ul1.appendChild(newUnorderedListElement);
        
    }
}


    
    
// pushNames: Es werden Objekte mit zwei internen Variablen "firstName" und "lastName" erstellt. Die Wertzuweisungen erfolgen ebenfalls auf direktem Wege. Danach werden die
// Objekte in das Array "persons" gepusht.
function pushName(fName, lName) {
    persons.push({
        firstName: fName,
        lastName: lName
    });
    }
function pushNames (){

    pushName("Anton","Mustermann");
    pushName("Moritz","Mustermann");
    pushName("Berta","Bertelsmann");
    pushName("Julius","Cäsar");
}

// Simple Ausgabe in die Konsole.
function printToConsole(outputStr) {
    console.log(outputStr);
}

