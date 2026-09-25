const tombolBenar = 
  document.querySelector("#jawaban1");
const tombolSalah = 
  document.querySelectorAll(".salah1");
const benar = 
  document.querySelector("#benar1");
const gagal = 
  document.querySelector("#gagal1");

const tombolBenar2 =
  document.querySelector("#jawaban2");
const tombolSalah2 =
  document.querySelectorAll(".salah2");
const benar2 =
  document.querySelector("#benar2");
const gagal2 =
  document.querySelector("#gagal2");



const tombolNilai =
  document.querySelector("#hasil");


let nilai = 0;
let soalTerjawab= 0;
const jumlahSoal= 2;
  
jawaban1.onclick = function(){
  nilai += Number(tombolBenar.dataset.nilai);
};

jawaban2.onclick = function(){
  nilai += Number(tombolBenar2.dataset.nilai);
};


function matikantombol(tombolBenar, tombolSalah) {

    soalTerjawab++
  
    tombolBenar.disabled = true;
     
    tombolSalah.forEach(function(button) {
      button.disabled = true;
  });    
  
   if(soalTerjawab === jumlahSoal){
   tombolNilai.disabled = false;
  }
}


tombolBenar.addEventListener("click",
function() {
  benar.textContent = "selamat kamu benar";
  benar.style.display = "block";

  matikantombol(tombolBenar, tombolSalah);
  });

tombolSalah.forEach(function (button) {
  button.addEventListener("click", function(){
   gagal.textContent = "tidak apa apa, coba lagi";
   gagal.style.display = "block";

  matikantombol(tombolBenar, tombolSalah);
 });
});



tombolBenar2.addEventListener("click",
function() {
  benar2.textContent = "ya kan bebek aja";
  benar2.style.display = "block";
  
  matikantombol(tombolBenar2, tombolSalah2);
});

 tombolSalah2.forEach(function (button) {
   button.addEventListener("click", function(){
   gagal2.textContent = "SALAH"
   gagal2.style.display = "block"

   matikantombol(tombolBenar2, tombolSalah2);
    
 });
});






tombolNilai.onclick = function (){
  alert("Nilai kamu adalah:" + nilai)
};
