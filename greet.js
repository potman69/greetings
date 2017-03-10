var demoMessage = document.getElementById("geetingName");
var namesGreeted = {};
var counterDisplay=document.querySelector("#counterDisplay");
console.log(counterDisplay);
counterDisplay.innerHTML = localStorage.clickcount;

if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount === "null") {
        localStorage.clickcount = 0;
    }
  }
  function clearLocalStorage() {
      localStorage.clear();
      document.getElementById("counterDisplay").innerHTML =  localStorage.clickcount = 0;
  }

  
  function myCounter(list, inputName){
    if (list[inputName] === undefined && inputName !== ""){
      list[inputName] = 1;
      localStorage.clickcount++;
    };
    return localStorage.clickcount;
  }

function myFunction() {
    var name = document.getElementById("mytext").value;
    counterDisplay.innerHTML = myCounter(namesGreeted, name);

    if(document.getElementById("english").checked && name !== ""){
      demoMessage.innerHTML = "Hello, " + name + " "  + "Have a nice day.";

    }
    else if (document.getElementById("afrikaans").checked && name !== ""){
      demoMessage.innerHTML = "More, " + name + " "  + "geniet die dag.";

    }
    else if(document.getElementById("xhosa").checked && name !== ""){
      demoMessage.innerHTML = "Mholweni, " + name + " "  + "ubenosuku olumyoli.";

    } else {
     demoMessage.innerHTML = "You have not entered a name";
    }
    document.getElementById("mytext").value = "";
  }
