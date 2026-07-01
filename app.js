
let ciudades=[
    {nombre: "Bogota",numeroHabitantes:20000000,metrosSM:25000,temperatura:"15°",coordenadas:[455,-235],sitios:[{"01":"parque","02":"museo"}]},
    {nombre: "Cali",numeroHabitantes:5000000,metrosSM:5000,temperatura:"30°",coordenadas:[120,-280],sitios:[{"01":"plaza","02":"piscina"}]},
    {nombre: "Pereira",numeroHabitantes:2000000,metrosSM:10000,temperatura:"20°",coordenadas:[220,-180],sitios:[{"01":"zoologico","02":"parque del cafe"}]}]



  function listarCiudades() {
  tabla_ciudad.innerHTML = "";
  ciudades.forEach((ciudad) => {
    let fila = `<tr><td>${ciudad.nombre}</td><td>${ciudad.numeroHabitantes}</td><td>${ciudad.metrosSM}</td><td>
    ${ciudad.temperatura}</td><td>${ciudad.coordenadas}</td><td>${ciudad.sitios[0]["01"]}, ${ciudad.sitios[0]["02"]}</td></tr>`;
    tabla_ciudad.innerHTML += fila;
  });
}


document.addEventListener("DOMContentLoaded", listarCiudades);
