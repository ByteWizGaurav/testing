const btn = document.getElementById("kuchhbhi");
const header = document.getElementById("header");
let check = true;

btn.addEventListener("click", () => {
    if(check){
        check = false;
        header.style.background = "#944444";
    }
    else{
        check = true;
        header.style.background = "#4c4c4c";
    }
});