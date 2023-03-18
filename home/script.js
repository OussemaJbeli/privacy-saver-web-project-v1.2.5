let close_img = document.getElementById("close_img");
let login = document.getElementById("login_panel");
close_img.addEventListener("click", exite_img);
let condition = "closed";
function exite_img(){
    console.log("ff")
        login.style.animation="close_login .2s linear forwards";
}