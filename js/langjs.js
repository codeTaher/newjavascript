let ar=document.getElementById("ar");
let en=document.getElementById("en");
let parg=document.getElementById("parg");
let nom =document.getElementById("numdev");
let contact=document.getElementById("cont");
ar.onclick=()=>{
   setlang("arabic");
   localStorage.setItem("lg","arabic")
};
en.onclick=()=>{
    setlang("english");
    localStorage.setItem("lg","english")
};
onload=()=>{
    setlang(localStorage.getItem("lg"))
};
function setlang(lg){
   if(lg==="arabic"){
     parg.innerHTML="مرحبا بكم في موقع طاهر مباركي" 
     nom.innerHTML="الطاهر المباركي"
     contact.innerHTML="تواصل"
   }else if(lg==="english"){
     parg.innerHTML="welcome to website of taher Mbarki"
     nom.innerHTML="Taher Mbarki";
     contact.innerHTML="Communication"
   }

}