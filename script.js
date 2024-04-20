let kopf=0;
let zahl=0;

let coin=document.querySelector(".coin");
let flibtBtn=document.querySelector("#flib-button");
let resetBtn=document.querySelector("#reset-button");



flibtBtn.addEventListener("click",()=>{
    let i= Math.floor(Math.random()*2);
    coin.style.animation= "none";

    if(i){
        setTimeout(()=> {
            coin.style.animation= "spin-kopf 3s forwards";
        },100);
        kopf++;
    } else {
        setTimeout(()=> {
            coin.style.animation= "spin-zahl 3s forwards";
    },100);
        zahl++;
}
  // istatistikleri yaz

    setTimeout(updateStats ,3000);
    disableButton();
});

function updateStats(){
    document.querySelector("#kopf-count").textContent=`Kopf: ${kopf}`;
    document.querySelector("#zahl-count").textContent=`Zahl: ${zahl}`;
}


function disableButton(){
    flibtBtn.disabled = true;
    setTimeout(()=> {
        flibtBtn.disabled = false;
    },3000);
}


resetBtn.addEventListener("click" ,()=>{
    coin.style.animation = "none";
    kopf =0;
    zahl =0;
    updateStats();
});