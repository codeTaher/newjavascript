let codes = document.getElementById("codes");
let play =document.getElementById("play");
let rem = document.getElementById("rev");
let res =document.getElementById("rel")
play.onclick=()=>{
    res.innerHTML=codes.value;
    localStorage.setItem("res",codes.value)
};
rem.onclick=()=>{
    res.innerHTML="";
    codes.value="";
}
onload=()=>{
    codes.value=localStorage.getItem("res");
    res.innerHTML=codes.value;
}