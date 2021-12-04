let flag = true;
let bttn = document.querySelector("#buttonmenu");
bttn.addEventListener("click", function(){
    if (flag){
        this.style.background = 'url(matirials/computer-icons-removebg-preview.png) no-repeat';
        flag = false;
        showMenu();
    } else {
        this.style.background = 'url(matirials/menuu.png) no-repeat';
        flag = true;
        showMenu();
    }
});

function showMenu(){
    document.querySelector("#nav").classList.toggle("show");
}