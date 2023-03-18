document.querySelector("#choices")


var u;
var op;
var opscore=0;
var uscore=0;
var choices=["stone","paper","scissor"];

window.onload=function(){
    for(let i=0;i<3;i++){
        let choice=document.createElement("img")
        choice.id=choices[i];
        choice.src=choices[i] + ".png";
        choice.addEventListener("click",selectchoice)
        document.querySelector("#choices").append(choice);
    }
}
function selectchoice(){
    u=this.id;
    document.querySelector(".your").src=u+".png"  //clicl krne p it appears in image
op=choices[Math.floor(Math.random()*3)]
document.querySelector(".op").src=op+".png"  //clicl krne p it appears in image


if(u==op){
    uscore +=1;
    opscore +=1;
}
else{
    if(u=="rock"){
    if( op=="scissor"){
        uscore +=1;
    }else if(op=="paper") {
        opscore+=1;
    }
}
if(u==op){
    uscore +=1;
    opscore +=1;
}
else{
    if(u=="scissor"){
    if( op=="paper"){
        uscore +=1;
    }else if(op=="stone") {
        opscore+=1;
    }
}
else if(u=="paper"){
    if( op=="stone"){
        uscore +=1;
    }else if(op=="scissor") {
        opscore+=1;
    }
}
 
}

}
document.querySelector("#oponent-score").innerText= opscore;
document.querySelector("#ur-score").innerText=uscore;
}
