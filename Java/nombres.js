const listaNombres = document.querySelector("#lista-nombres")

fetch("./Java/nombres.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(nombre => {
            const li = document.createElement("li");
            li.innerText = nombre.nombre + " " + nombre.apellido + " " + "//" +" "+ "Rango" + ":" + nombre.rango;
            listaNombres.append(li);

        });
    })