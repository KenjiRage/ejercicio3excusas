let sujeto = ["Mi perro",  "Mi gato", "Mi hermano", "Una cabra", "Un alien"];
let accion = ["se comió", "rompió", "borró", "robó", "atacó"]
let cosa = ["mis deberes", "mi ordenador", "mis apuntes", "mi teléfono", "mi portatil"]
let cuando = ["por la mañana", "durante la noche", "cuando estaba durmiendo", "cuando salí a pasear", "cuando estaba en el baño"]

function generadorExcusa(arr){
    let nuevaExcusa = sujeto[Math.floor(Math.random() * arr.length)] + " " + 
                    accion[Math.floor(Math.random() * arr.length)] + " " + 
                    cosa[Math.floor(Math.random() * arr.length)] + " " + 
                    cuando[Math.floor(Math.random() * arr.length)]
    return nuevaExcusa
}

function agregarFrase(){
    document.getElementById("excusa").innerHTML = generadorExcusa(sujeto, accion, 
    cosa, cuando);
}

window.onload = function(){agregarFrase()};