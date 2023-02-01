let btn1 =document.getElementsByClassName("btn1");
let btn2 =document.getElementsByClassName("btn2");
let btn3 =document.getElementsByClassName("btn3");
let home = document.getElementById("home");
let guest = document.getElementById("guest");
    let countH=0;
    let countG=0;
let increment=()=>{
    countH += 1;
    home.innerHTML = countH;
  }
let increment1=()=>{
    countH += 2;
    home.innerHTML = countH;
 }
let increment2=()=>{
    countH += 3;
    home.innerHTML = countH;
 }
let incrementGuest=()=>{
  
    countG += 1;
    guest.innerHTML = countG;
}
let incrementGuest1=()=>{
    
    countG += 2;
    guest.innerHTML = countG;

}
let incrementGuest2=()=>{
    countG += 3;
    guest.innerHTML = countG;
}
let reset=()=>{
     countH=0;
     countG=0;
     home.innerHTML = 0;
     guest.innerHTML = 0;
}
reset()