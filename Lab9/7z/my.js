let continent = new Array();
continent = [
  "Євразія",
  "Африка",
  "Північна Америка",
  "Південна Америка",
  "Австралія",
  "Антарктида",
];
let density = new Array(6);
density[0] = "Густота - 86 осіб/км²  Площа - 54 760 000 км²";
density[1] = "Густота - 30 осіб/км²  Площа - 30 370 000 км²";
density[2] = "Густота - 23 осіб/км²  Площа - 24 710 000 км²";
density[3] = "Густота - 21 осіб/км²  Площа - 17 840 000 км²";
density[4] = "Густота - 3 особи/км²  Площа - 7 692 000 км²";
density[5] = "Густота - 0 осіб/км²  Площа - 14 200 000 км²";
function fun1() {
  for (let i = 0; i < 5; i++) {
    if (continent.continent[i] == continent[i]) {
      alert(density[i]);
    }
  }
}
