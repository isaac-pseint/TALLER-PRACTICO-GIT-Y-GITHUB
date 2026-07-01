
let ciudades=[
    {nombre: "Bogota",numeroHabitantes:20000000,metrosSM:25000,temperatura:"15°",coordenadas:[455,-235],sitios:[{"01":"parque","02":"museo"}]},
    {nombre: "Cali",numeroHabitantes:5000000,metrosSM:5000,temperatura:"30°",coordenadas:[120,-280],sitios:[{"01":"plaza","02":"piscina"}]},
    {nombre: "Pereira",numeroHabitantes:2000000,metrosSM:10000,temperatura:"20°",coordenadas:[220,-180],sitios:[{"01":"zoologico","02":"parque del cafe"}]},
    {nombre: "Medellin",numeroHabitantes:2500000,metrosSM:1500,temperatura:"22°",coordenadas:[62,-355],sitios:[{"01":"parque explora","02":"comuna 13"}]},
{nombre: "Cartagena",numeroHabitantes:1000000,metrosSM:2,temperatura:"28°",coordenadas:[180,-405],sitios:[{"01":"ciudad amurallada","02":"castillo san felipe"}]},
]



  function listarCiudades() {
  tabla_ciudad.innerHTML = "";
  ciudades.forEach((ciudad) => {
    let fila = `<tr><td>${ciudad.nombre}</td><td>${ciudad.numeroHabitantes}</td><td>${ciudad.metrosSM}</td><td>
    ${ciudad.temperatura}</td><td>${ciudad.coordenadas}</td><td>${ciudad.sitios[0]["01"]}, ${ciudad.sitios[0]["02"]}</td></tr>`;
    tabla_ciudad.innerHTML += fila;
  });
}


document.addEventListener("DOMContentLoaded", listarCiudades);
