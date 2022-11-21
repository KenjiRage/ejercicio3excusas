let subject = ["Mi perro",  "Mi gato", "Mi hermano", "Una cabra", "Un alien"];
let action = ["se comió", "rompió", "borró", "robó", "atacó"]
let thing = ["mis deberes", "mi ordenador", "mis apuntes", "mi teléfono", "mi portatil"]
let when = ["por la mañana", "durante la noche", "cuando estaba durmiendo", "cuando salí a pasear", "cuando estaba en el baño"]

function generatorExcuse(arr){
    let newExcuse = subject[Math.floor(Math.random() * arr.length)] + " " + 
                    action[Math.floor(Math.random() * arr.length)] + " " + 
                    thing[Math.floor(Math.random() * arr.length)] + " " + 
                    when[Math.floor(Math.random() * arr.length)]
    return newExcuse
}

function addPhrase(){
    document.getElementById("excusa").innerHTML = generatorExcuse(subject, action, thing, when);
}

window.onload = function(){addPhrase()};
