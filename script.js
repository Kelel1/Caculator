const keypad = document.querySelector("#digits");
var sev = document.getElementById("seven");

// sev.addEventListener("click", displayValue);


/** Create calculator keypad */
function displayKeys() {
    
    const keys = document.querySelectorAll('button');
   
    for (i = 0; i < keys.length; i++) {        
        keys[i].setAttribute("style", "border-radius: 25%; height: 35px; width: 35px;" + " "
        + "background-color: royalblue");         
    }

    keys[0].addEventListener("click", vsalz = () => {

        return document.getElementById("display").innerHTML += "7";
    });

    keys[1].addEventListener("click", vsalz = () => {

        return document.getElementById("display").innerHTML += "8";
    });

    keys[2].addEventListener("click", vsalz = () => {

        return document.getElementById("display").innerHTML += "9";
    });

    keys[3].addEventListener("click", vsalz = () => {

        return document.getElementById("display").innerHTML += "4";
    });

    keys[4].addEventListener("click", vsalz = () => {

        return document.getElementById("display").innerHTML += "5";
    });

    keys[5].addEventListener("click", vsalz = () => {

        return document.getElementById("display").innerHTML += "6";
    });

    keys[6].addEventListener("click", vsalz = () => {

        return document.getElementById("display").innerHTML += "1";
    });

    keys[7].addEventListener("click", vsalz = () => {

        return document.getElementById("display").innerHTML += "2";
    });

    keys[8].addEventListener("click", vsalz = () => {

        return document.getElementById("display").innerHTML += "3";
    });

    keys[9].addEventListener("click", vsalz = () => {

        return document.getElementById("display").innerHTML += "0";
    });

    keys[10].addEventListener("click", vsalz = () => {

        return document.getElementById("display").innerHTML += ".";
    });

    keys[11].addEventListener("click", vsalz = () => {

        return document.getElementById("display").innerHTML += "-";
    });
}


// const keyz = document.getElementById("digits");
// function setEventListener () {

//     for (i = 0; i < keyz.length; i++) {

//         keyz[i].addEventListener('click', (play) => {

//             displayValue();
//         });
//     };

// }

/** Diplays key value, when clicked */
// function displayValue() {
//     document.getElementById("display").innerHTML += "7";

//     // switch (document.getElementById("display"))
// }
displayKeys();

