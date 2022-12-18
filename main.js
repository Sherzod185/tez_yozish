
let elword = document.querySelector(".word") ;//h2
let elinput = document.querySelector("#input_text");//input
let elball = document.querySelector("#ball") ;//ball toplash
let elvaqt = document.querySelector("#vaqt"); // vaqt qismi
let eltugadi = document.querySelector(".tugadi");  // tugash qismi
let yes = document.querySelector(".yes");

const words=[
	"Arise",
	"Became",
	"Beeten",
	"Sunday",
	"Vue",
	"Html",
	"Css",
	"Scss",
	"Java script",
	"Dom",
	"Boboxonov",
	"Sherzod",
	"All",
	"Number",
	"Oil",
	"Left",
	"Within",
	"Now",
	"Right",
	"Feet",
	"Leave",
	"What",
	"Now",
	"Facebook",
	"Came",
	"Live",
	"Test",
	"About",
	"Netflix",
	"Came",
	"Set",
	"Were",
	"Follow",
	"Study",
	"Day",
	"Structure",
	"Over",
	"Why",
	"Talk",
	"Soon",
	"Because",
	"Random",
	"Watch",
	"Year",
	"Her",
	"Any",
	"Snapchat",
	"I",
	"Both",
	"Around",
	"Book",
	"Line",
	"Mother",
	"Open",
	"Now",
	"Defend",
	"Mile",
	"Go",
	"By",
	"Found",
	"Said",
	"Eye",
	"Come",
	"Place",
	"Food",
	"Got",
	"City",
	"Always",
	"These",
	"Any",
	"Use",
	"Been",
	"Was",
	"Read",
	"Their",
	"Change",
	"Leave",
	"Can",
	"They",
	"Those",
	"Eat",
	"Never",
	"No",
	"Eat",
	"Story",
	"End",
];
alert("Tez yoz o'yinini boshladik!!!");
let randomword;
let score = 0;
let time = 60;
function rendom(){
  return words[Math.floor(Math.random()*(words.length-1))].toUpperCase()
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
  if(time === 0){
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
  let typedText = e.target.value.toUpperCase();
 if(typedText === randomword){

    updateScore(); 
    addtoDom();
    yes.innerHTML="✅"
    e.target.value = "";
  }
  else if((typedText.length === randomword.length)){
    yes.innerHTML="❌"
  }
	else{
		yes.innerHTML=""
	}
});