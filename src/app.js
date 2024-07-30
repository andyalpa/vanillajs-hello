window.onload = function() {
  let letter = "A ";
  let adjetive = ["tall ", "skinny ", "fat ", "pretty "];
  let noun = ["cow, ", "dog ", "cat ", "pig "];
  let verb = ["kick my ", "bite my ", "throw my ", "grab my "];
  let object = ["lunch ", "phone ", "camera ", "homework "];
  let location = [
    "in my yard",
    "inside the garage",
    "on the roof",
    "in the library"
  ];

  let random1 = Math.floor(Math.random() * adjetive.length);
  let random2 = Math.floor(Math.random() * noun.length);
  let random3 = Math.floor(Math.random() * verb.length);
  let random4 = Math.floor(Math.random() * object.length);
  let random5 = Math.floor(Math.random() * location.length);

  document.querySelector("#argument").innerHTML =
    letter +
    adjetive[random1] +
    noun[random2] +
    verb[random3] +
    object[random4] +
    location[random5];
};
