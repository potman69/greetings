function greeting (name){
  return "Hello," + " " + name;

};


var greetMessage = function(firstName, language){
  if (language === "English"){
    return "Hello, " + firstName;
  }
  if (language === "afrikaans"){
    return "Halo, " + firstName;
  }
  if (language === "xhosa"){
    return "Mholweni, " + firstName;
  }
}


function myCounter(list, inputName) {
  if (list[inputName] === undefined && inputName !== "") {
    list[inputName] = 1;
    localStorage.clickcount++;
  };
  return localStorage.clickcount;
}
