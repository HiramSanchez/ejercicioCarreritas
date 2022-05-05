var carreritas =["Lucía", "Roberto", "María", "Jesús", "Andrea", "José"];
console.log("Inicio de la carrera: ", carreritas);

//Andrea adelanta a Maria
carreritas.splice(4,1);
carreritas.splice(2,0, "Andrea");
console.log("Andrea adelanta a Maria: ", carreritas);
//José es decalificado de la carrera
carreritas.pop();
console.log("José es decalificado de la carrera: ", carreritas);
//Entre Lucía y Roberto clasifican: Cristóbal, Fernanda, y Armando.
carreritas.splice(1,0, "Cristóbal", "Fernanda", "Armando");
console.log("Entre Lucía y Roberto clasifican: Cristóbal, Fernanda, y Armando: ", carreritas);
//Entra Federico al primer puesto
carreritas.unshift("Federico");
console.log("Entra Federico al primer puesto: ", carreritas);