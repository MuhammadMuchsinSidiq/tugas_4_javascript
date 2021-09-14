var Sidiq = 158;
var Allam = 159;
var Tifta = 157;

if (Sidiq > Allam && Sidiq > Tifta) {
  console.log("Sidiq Adalah Siswa tertinggi");
} else {
  if (Allam > Sidiq && Allam > Tifta) {
    console.log("Allam adalah siswa tertinggi");
  } else {
    console.log("Tifta adalah siswa tertinggi");
  }
}
