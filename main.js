
let elword = document.querySelector(".word") ;//h2
let elinput = document.querySelector("#input_text");//input
let elball = document.querySelector("#ball") ;//ball toplash
let elvaqt = document.querySelector("#vaqt"); // vaqt qismi
let eltugadi = document.querySelector(".tugadi");  // tugash qismi
let yes = document.querySelector(".yes");

const words=[
	"arise",
	"became",
	"beeten",
	"sunday",
	"vue",
	"html",
	"css",
	"scss",
	"java script",
	"dom",
	"Abdurahmon",
	"Boboxonov",
	"Sherzod",
	"Baxriddin",
	"Nurmuhammad",
	"Samandar",
	"Nodirbek",
	"Isoxon",
	"Odilbek",
	"Umarbek",
	"Dilshodbek",
	"Samandar",
	"all",
	"number",
	"oil",
	"left",
	"within",
	"now",
	"right",
	"feet",
	"leave",
	"what",
	"now",
	"facebook",
	"came",
	"live",
	"test",
	"about",
	"netflix",
	"came",
	"set",
	"were",
	"follow",
	"study",
	"day",
	"structure",
	"over",
	"why",
	"why",
	"talk",
	"soon",
	"because",
	"random",
	"watch",
	"year",
	"her",
	"any",
	"snapchat",
	"I",
	"both",
	"around",
	"book",
	"line",
	"mother",
	"open",
	"now",
	"defend",
	"mile",
	"go",
	"by",
	"found",
	"said",
	"eye",
	"come",
	"so",
	"place",
	"food",
	"got",
	"city",
	"always",
	"these",
	"any",
	"use",
	"been",
	"was",
	"read",
	"their",
	"change",
	"leave",
	"can",
	"they",
	"those",
	"eat",
	"never",
	"no",
	"eat",
	"story",
	"end",
];
alert("Tez yoz o'yinini boshladik!!!");
let randomword;
let score = 0;
let time = 60;
function rendom(){
  return words[Math.floor(Math.random()*(words.length-1))]
}

function addtoDom(){
  randomword=rendom();
  elword.innerHTML=randomword;
}

function updateScore(){
  score++;
  elball.innerHTML = score;
}

function updateTime(){
  time --;
  elvaqt.innerHTML=time;
  if(time == 0){
    clearInterval(timeInterval);
    gameOver()
  }
}
const timeInterval = setInterval(updateTime, 1000);
function gameOver(){
if(score>=0 && score<10){
  eltugadi.innerHTML = `
  <h2>Vaqtingiz tugadi </h2>
  <h1 class="h3ball"> ${score}  ball to'pladiz   ☹️ ❌❌❌ Iltimos ko'proq shug'ullaning natijangiz qoniqarsiz </h1>
  <button onclick="location.reload()">Qayta o'ynash</button>
  ` 
  eltugadi.style.display = "flex";

}
else if(score>=10 && score<20){
  eltugadi.innerHTML = `
  <h2>Vaqtingiz tugadi </h2>
  <h1> ${score}  ball to'pladiz  ⭐️❌❌ 😉 yaxshi </h1>
  <button onclick="location.reload()">Qayta o'ynash</button>
  ` 
  eltugadi.style.display = "flex";
}
else if(score>=20 && score<30){
  eltugadi.innerHTML = `
  <h2>Vaqtingiz tugadi </h2>
  <h1 class="h3ball"> ${score} ball to'pladiz ⭐️⭐️❌ 😊 Ajoyib  </h1>
  <button onclick="location.reload()">Qayta o'ynash</button>
  ` 
  eltugadi.style.display = "flex";
}
else {
  eltugadi.innerHTML = `
  <h2>Vaqtingiz tugadi </h2>
  <h1 class="h3ball"> ${score} ball  to'pladiz  ⭐️⭐️⭐️ 🤩 Super natija  </h1>
  <button onclick="location.reload()">Qayta o'ynash</button>
  ` 
  eltugadi.style.display = "flex";
}
}
yes.style.display = "inline"
addtoDom();
elinput.addEventListener("input", e=>{
  let typedText = e.target.value;
 if(typedText === randomword){

    updateScore(); 
    addtoDom();
    yes.innerHTML="✅"
    e.target.value = "";
    updateTime()
  }
  else{
    yes.innerHTML="❌"
  }
});